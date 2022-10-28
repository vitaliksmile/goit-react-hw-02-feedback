import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(meaning => (
        <button
          key={meaning}
          type="button"
          onClick={() => onLeaveFeedback(meaning)}
        >
          {meaning}
        </button>
      ))}
    </>
  );
};
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

/* <button type="button" onClick={() => this.countFeedback('good')}>
          good
        </button>
        <button type="button" onClick={() => this.countFeedback('neutral')}>
          neutral
        </button>
        <button type="button" onClick={() => this.countFeedback('bad')}>
          bad
        </button> */
