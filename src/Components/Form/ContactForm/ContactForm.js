import React from 'react';
import style from './ContactForm.module.css'
import PropTypes from 'prop-types';

const ContactForm = ({ name, number, handleChange }) => {
  return (
    <div className={style.containerUser}>
      <label>
       <p>Name</p>
       <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
      <label>
        <p>Number</p>
           <input type="text" name="number" onChange={handleChange} value={number} />
      </label>
      <button type="submit">Add contacts</button>
    </div>
  )
}

export default ContactForm

ContactForm.propTypes = {
  handleChange:PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};