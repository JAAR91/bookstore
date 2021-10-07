import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookdata, removeBookfromStore } = props;
  const {
    id, title, author, category, progress, complete,
  } = bookdata;

  const removeClick = () => {
    removeBookfromStore(id);
  };

  return (
    <div className="row m-0 rounded border p-4 bg-white shadow my-2">
      <div className="col-4">
        <p className="text-muted m-0">{category}</p>
        <p className="fs-2 fw-bold m-0">{title}</p>
        <p className="m-0 text-info">{author}</p>
        <div className="mt-4 d-flex">
          <button type="button" className="link-info border-0 bg-transparent mx-3">Comments </button>
          <div className="border" />
          <button type="button" className="link-info border-0 bg-transparent mx-3" onClick={removeClick}>Remove </button>
          <div className="border" />
          <button type="button" className="link-info border-0 bg-transparent mx-3">Edit </button>
        </div>
      </div>
      <div className="col-4 d-flex flex-column justify-content-center align-items-center border-end">
        <p className="fs-1">{complete}</p>
        <p className="text-muted">Completed</p>
      </div>
      <div className="col-4 ps-4">
        <p className="text-muted ms-4 my-0">CURRENT CHAPTER</p>
        <p className="fs-4 ms-4 my-0">{progress}</p>
        <button type="button" className="btn btn-info text-white ms-4 mt-4">
          Update Progress
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  bookdata: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    category: PropTypes.string.isRequired,
    progress: PropTypes.string,
    complete: PropTypes.string,
  }).isRequired,
  removeBookfromStore: PropTypes.func.isRequired,
};

export default Book;
