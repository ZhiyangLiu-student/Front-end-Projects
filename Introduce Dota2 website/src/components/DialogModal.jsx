import React, { useState } from 'react';
import './DialogModal.css';
import Button from './Button';

function DialogModal({ isOpen, onClose, children }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setValidationErrors({
      ...validationErrors,
      [e.target.name]: '',
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email';
    } else if (!formData.email.includes('@')) {
      errors.email = 'Please enter a valid email address';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      onClose();
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
    });
    setValidationErrors({
      name: '',
      email: '',
    });

    onClose();
  };

  return (
    <div>
      {isOpen && <div className="overlay" onClick={handleClose}></div>}
      <dialog open={isOpen} className="modal">
        <div className="modal" onClick={stopPropagation}>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            {validationErrors.name && (
                <span className="validation-error">{validationErrors.name}</span>
              )}

            <label>
              Email:
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            {validationErrors.email && (
                <span className="validation-error">{validationErrors.email}</span>
              )}

            {children}
            <Button aria-label='Submit'type="submit" visual="link">
              Submit
            </Button>
            <button className="cbt" aria-label='Close' onClick={handleClose}>
              Close <span aria-hidden="true">X</span>
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default DialogModal;




