import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import classes from '../../App.module.css';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <div>
      <ul className={classes.ImageGallery}>
        {images.map(img => (
          <ImageGalleryItem {...img} key={img.id} toggleModal={toggleModal} />
        ))}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  toggleModal: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default ImageGallery;
