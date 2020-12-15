import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import fetchImage from '../../service/fetchImages';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    currentPage: 1,
    isModal: false,
    modalItem: null,
  };

  getImages = () => {
    const query = this.props.query;
    this.setState({ isLoading: true });

    fetchImage(query, this.state.currentPage)
      .then(res => {
        const result = res.hits;
        console.log('Response :>> ', res.hits);
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...result],
            isLoading: false,
          };
        });
      })

      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    if (this.props.query) {
      this.getImages();
    }
  }

  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  loadMore = () => {
    this.setState(
      prevState => {
        console.log('prevState :>> ', prevState);
        console.log('currentPageLoadMore >> ', this.state.currentPage);
        console.log('currentPrevPageLoadMore >> ', prevState.currentPage);
        return { currentPage: prevState.currentPage + 1 };
      },
      () => {
        this.getImages();
      },
    );
  };

  openModal = e => {
    const result = this.state.images.find(image => {
      return e.target.id === image.id.toString();
    });
    this.setState({
      isModal: true,
      modalItem: result,
    });
  };

  closeModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const { images, isLoading, isModal, modalItem } = this.state;
    return (
      <>
        {images.length > 0 && (
          <ul className="ImageGallery">
            {images.map(item => (
              <li key={item.id} className="ImageGalleryItem">
                <img
                  id={item.id}
                  onClick={this.openModal}
                  className="ImageGalleryItem-image"
                  src={item.webformatURL}
                />
              </li>
            ))}
          </ul>
        )}
        {images.length > 0 ? (
          isLoading ? (
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={40}
              width={40}
              timeout={3000}
            />
          ) : (
            <Button loadMore={this.loadMore} />
          )
        ) : null}
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
