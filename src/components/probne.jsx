import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedback = meaning => {
    this.setState(prevState => ({ [meaning]: prevState[meaning] + 1 }));
  };
  // countFeedback = propName => {
  //   this.setState(prevState => ({ [propName]: prevState[propName] + 1 }));
  // };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  render() {
    console.log(this.state);
    const meanings = Object.keys(this.state);
    console.log(meanings);
    return (
      <>
        {/* <button type="button" onClick={() => this.countFeedback('good')}>
          good
        </button>
        <button type="button" onClick={() => this.countFeedback('neutral')}>
          neutral
        </button>
        <button type="button" onClick={() => this.countFeedback('bad')}>
          bad
        </button> */}

        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics />
          ) : (
            // <div>
            //   <p>Good: {this.state.good}</p>
            //   <p>Neutral: {this.state.neutral}</p>
            //   <p>Bad: {this.state.bad}</p>
            //   <p>Total: {this.countTotalFeedback()}</p>
            //   <p>
            //     Positive feedback: {this.countPositiveFeedbackPercentage()}%
            //   </p>
            // </div>
            <Notification message="sdasdasda" />
          )}
        </Section>
      </>
    );
  }
}

export default App;

const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(meaning => (
        <button
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
