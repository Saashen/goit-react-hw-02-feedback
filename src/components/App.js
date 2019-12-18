import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countClickAmount = ({ target }) => {
    const { name } = target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const clicks = Object.values(this.state);
    const feedback = clicks.reduce((acc, value) => acc + value, 0);
    return feedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good < 1 ? 0 : Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <section title="FeedbackOptions">
          <h2>Please leave feedback</h2>
          <FeedbackOptions onLeaveFeedback={this.countClickAmount} />
        </section>
        {this.countTotalFeedback() > 0 ? (
          <section title="Statistics">
            <h2>Statistics</h2>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}
