import PropTypes from 'prop-types';
import './circle.css';

const Circle = (props) => {
  const { percentage } = props;

  const circleValue = `c100 small p${percentage || 0}`;

  return (
    <div className="clearfix me-3">
      <div className={circleValue}>
        <span className="-Percent-Complete">
          {percentage || 0}
          %
        </span>
        <div className="slice">
          <div className="bar" />
          <div className="fill" />
        </div>
      </div>
    </div>
  );
};

Circle.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Circle;
