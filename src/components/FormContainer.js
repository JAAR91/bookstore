import PropTypes from 'prop-types';
import React, { useState } from 'react';

const FormContainer = (props) => {
  const options = [
    { value: 'Fantasy' },
    { value: 'Comedy' },
    { value: 'Drama' },
    { value: 'Horror' },
    { value: 'Mistery' },
    { value: 'Romance' },
    { value: 'Thriller' },
    { value: 'Action' },
  ];

  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.submitBookToStore(inputText);
      setInputText({
        title: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row m-0 py-3 mb-5">
      <p className="col-12 text-muted fs-4 fw-bold">ADD NEW BOOK</p>
      <div className="col-6">
        <input
          className="form-control"
          placeholder="Book title"
          value={inputText.title}
          onChange={onChange}
          name="title"
        />
      </div>
      <div className="col-3 mx-4">
        <select className="form-select" name="category" onChange={onChange}>
          {options.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.value}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="col-2 btn btn-info text-white">ADD BOOK</button>
    </form>
  );
};

FormContainer.propTypes = {
  submitBookToStore: PropTypes.func.isRequired,
};

export default FormContainer;
