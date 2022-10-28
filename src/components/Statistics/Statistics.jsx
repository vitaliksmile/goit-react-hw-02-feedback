import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <div className={s.center}>
        <p className={s.good}>Good: {good}</p>
        <p className={s.neutral}>Neutral: {neutral}</p>
        <p className={s.bad}>Bad: {bad}</p>
      </div>
      <p className={s.total}>Total: {total}</p>
      <p className={s.feedback}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
