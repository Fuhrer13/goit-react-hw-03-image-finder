import React from 'react';
import classes from '../../App.module.css';
import PropTypes from 'prop-types';

const Modal = ({ src }) => {
  return (
    <div className={classes.Overlay}>
      <div className={classes.Modal}>
        <img src={src} alt="" />
      </div>
    </div>
  );
};
Modal.propType = {
  src: PropTypes.string.isRequired,
};

export default Modal;
