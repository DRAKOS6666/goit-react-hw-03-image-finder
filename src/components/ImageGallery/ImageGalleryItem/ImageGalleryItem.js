import React from 'react';

function ImageGalleryItem({ item, openModal }) {
  return (
    <li className="ImageGalleryItem">
      <img
        id={item.id}
        onClick={() => openModal(item.id)}
        className="ImageGalleryItem-image"
        src={item.webformatURL}
        alt={item.tags}
      />
    </li>
  );
}

export default ImageGalleryItem;
