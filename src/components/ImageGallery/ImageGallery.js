import React, { Component } from 'react';
import propTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Button from './Button/Button';
import Modal from '../Modal/Modal';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import fetchImage from '../../service/fetchImages';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './ImageGallery.scss';

class ImageGallery extends Component {
  static propTypes = {
    query: propTypes.string.isRequired,
  };

  state = {
    images: [],
    isLoading: false,
    currentPage: 1,
    isModal: false,
    modalItem: null,
  };

  componentDidMount() {
    // this.setState({ isLoading: false });
    if (this.props.query !== '') {
      console.log('CDMount lets do fetch');
      return this.getImages();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('START UPDATE ======================================');
    console.log(
      'CDU prevQuery: ' +
        prevProps.query +
        ' currentQuery: ' +
        this.props.query,
    );
    console.log(
      'CDU prevPage: ' +
        prevState.currentPage +
        ' currentPage: ' +
        this.state.currentPage,
    );
    if (this.props.query !== prevProps.query) {
      console.log('New query fetch');
      this.setState({ images: [], currentPage: 1 }, this.getImages());
    }
    if (
      this.state.currentPage > prevState.currentPage &&
      this.props.query === prevProps.query
    ) {
      console.log('Fetch same query');
      this.getImages();
    }

    if (this.state.images.length > prevState.images.length) {
      toast.success('Success!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  getImages = () => {
    const query = this.props.query;
    this.setState({ isLoading: true });

    fetchImage(query, this.state.currentPage)
      .then(res => {
        console.log('RESPONSE', res);
        if (res.hits.length > 0) {
          this.setState(prevState => {
            console.table('currentState', this.state);
            console.table('prevState: ', prevState);
            return { images: [...prevState.images, ...res.hits] };
          });
        } else {
          toast.warn('Nothing found, try another query', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(err => {
        toast.error('Error, Something went wrong, try again', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(err);
      })
      .finally(this.setState({ isLoading: false }));
  };

  loadMore = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
  };

  openModal = imgId => {
    const result = this.state.images.find(image => {
      return image.id === imgId;
    });
    this.setState({
      isModal: true,
      modalItem: result,
    });
  };

  closeModal = () => {
    this.setState({ isModal: false, modalItem: null });
  };

  render() {
    const { images, isLoading, isModal, modalItem } = this.state;
    return (
      <>
        {images.length > 0 && (
          <>
            <ul className="ImageGallery">
              {images.map(item => (
                <ImageGalleryItem
                  key={item.id}
                  item={item}
                  openModal={this.openModal}
                />
              ))}
            </ul>
            <div className="loadMoreContainer">
              {isLoading ? (
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={40}
                  width={40}
                  timeout={4000}
                />
              ) : (
                <Button loadMore={this.loadMore} />
              )}
            </div>
          </>
        )}
        {/* {images.length > 0 ? (
          ) : null} */}
        {isModal && (
          <Modal closeModal={this.closeModal}>
            <img src={modalItem.largeImageURL} alt={modalItem.tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
