import Select from 'react-select';

const FormContainer = () => {
  const options = [
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Mistery', label: 'Mistery' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Thriller', label: 'Thriller' },
    { value: 'Action', label: 'Action' },
  ];

  return (
    <form className="row m-0">
      <p className="col-12 text-muted fs-4 fw-bold">ADD NEW BOOK</p>
      <div className="col-6">
        <input className="form-control" placeholder="Book title" />
      </div>
      <div className="col-3 mx-4">
        <Select options={options} />
      </div>
      <button type="button" className="col-2 btn btn-info text-white">ADD BOOK</button>
    </form>
  );
};

export default FormContainer;
