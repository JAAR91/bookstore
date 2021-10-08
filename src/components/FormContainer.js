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
    category: 'Fantasy',
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
        category: inputText.category,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-wrap m-0 p-0">
      <p className="Form-Title col-12">ADD NEW BOOK</p>
      <div>
        <input
          className="form-control"
          placeholder="Book title"
          value={inputText.title}
          onChange={onChange}
          name="title"
        />
      </div>
      <div className="">
        <select className="form-select" name="category" onChange={onChange}>
          {options.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.value}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-info text-white add-button">ADD BOOK</button>
    </form>
  );
};

FormContainer.propTypes = {
  submitBookToStore: PropTypes.func.isRequired,
};

export default FormContainer;
