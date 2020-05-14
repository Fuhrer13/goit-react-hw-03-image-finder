import React, { useState } from 'react';
import classes from '../../App.module.css';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <li className={classes.ImageGalleryItem} onClick={toggleModal}>
      {modal && <Modal src={largeImageURL} />}
      <img
        src={webformatURL}
        alt=""
        className={classes.ImageGalleryItemImage}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
