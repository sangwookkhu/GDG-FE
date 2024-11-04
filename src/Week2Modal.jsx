import React from 'react';
import { useFormValidation } from './useFormValidation';  
import './Modal.css';

const initialFormValues = {
  email: '',
  password: '',
  date: '',
};

const Week2Modal = ({ onClose }) => {
  const { values, errors, handleChange, handleSubmit } = useFormValidation(initialFormValues);

  const onSubmit = (formData) => {
    console.log('Form submitted successfully:', formData);
    onClose();  
  };

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <h2>Week2 Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>

          <div>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={values.date}
              onChange={handleChange}
            />
            {errors.date && <span>{errors.date}</span>}
          </div>

          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Week2Modal;
