import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, value) => acc + value, 0);
    };

    countPositiveFeedbackPercentage = () => {
        const positiveFeedbacks = this.state.good;
        const positivePercentage =
            (positiveFeedbacks / this.countTotalFeedback()) * 100;

        return Math.round(positivePercentage);
    };

    onLeaveFeedback = feedback => {
        this.setState(prevState => ({
            [feedback]: prevState[feedback] + 1,
        }));
    };

    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {total > 0 ? (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={total}
                            positivePercentage={positivePercentage}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </div>
        );
    }
}
