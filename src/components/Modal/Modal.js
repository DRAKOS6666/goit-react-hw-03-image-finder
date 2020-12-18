import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    closeModal: propTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleCloseClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleCloseClick}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
export default Modal;
