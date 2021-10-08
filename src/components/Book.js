import PropTypes from 'prop-types';
import Circle from './circleLoader';

const Book = (props) => {
  const { bookdata, removeBookfromStore } = props;
  const {
    id, title, author, category, progress, complete,
  } = bookdata;

  const removeClick = () => {
    removeBookfromStore(id);
  };

  return (
    <div className="Lesson-Panel row">
      <div className="col-5">
        <p className="School-of">{category}</p>
        <p className="Title">{title}</p>
        <p className="Author">{author || 'Author'}</p>
        <div className="mt-3 d-flex p-0">
          <button type="button" className="Book-buttons border-0 bg-transparent">Comments </button>
          <div className="Line" />
          <button type="button" className="Book-buttons border-0 bg-transparent" onClick={removeClick}>Remove </button>
          <div className="Line" />
          <button type="button" className="Book-buttons border-0 bg-transparent">Edit </button>
        </div>
      </div>
      <div className="col-4 d-flex flex-row justify-content-center align-items-center border-end">
        <Circle percentage={parseInt(complete, 10)} />
        <div className="d-flex flex-column">
          <p className="-Percent-Complete">
            {complete || 0}
            %
          </p>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <div className="col-3 ps-4">
        <p className="Current-Chapter">CURRENT CHAPTER</p>
        <p className="Current-Lesson">{progress || 'Chapter 1'}</p>
        <button type="button" className="Update-progress btn btn-info">
          UPDATE PROGRESS
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
