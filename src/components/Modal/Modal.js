import React, { Component } from 'react';

class Modal extends Component {
  onKeyPressed = e => {
    this.props.closeModal(e);
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyPressed);
  }

  componentWillMount() {
    document.removeEventListener('keydown', this.onKeyPressed);
  }
  //   console.log('modalItem :>> ', modalItem);
  render() {
    const { modalItem, closeModal } = this.props;
    return (
      <div className="Overlay" onKeyDown={closeModal} onClick={closeModal}>
        <div className="Modal">
          <img src={modalItem.largeImageURL} alt={modalItem.tags} />
        </div>
      </div>
    );
  }
}
export default Modal;
