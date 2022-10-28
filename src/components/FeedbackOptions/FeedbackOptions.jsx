import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.div}>
      {options.map(meaning => (
        <button
          className={s['button-30']}
          key={meaning}
          type="button"
          onClick={() => onLeaveFeedback(meaning)}
        >
          {meaning}
        </button>
      ))}
    </div>
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
