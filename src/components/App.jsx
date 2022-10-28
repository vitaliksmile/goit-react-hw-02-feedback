import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

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
    // console.log(this.state);
    const meanings = Object.keys(this.state);
    // console.log(meanings);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={meanings}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <div>
          <Section title="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </>
    );
  }
}

export default App;
