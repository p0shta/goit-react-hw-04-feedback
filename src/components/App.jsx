import { useState, useEffect } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal([good, neutral, bad].reduce((acc, value) => acc + value, 0));
    }, [good, neutral, bad]);

    const positivePercentage = () => {
        const positiveFeedbacks = good;
        const positivePercentage = (positiveFeedbacks / total) * 100;

        return Math.round(positivePercentage);
    };

    const onLeaveFeedback = feedback => {
        switch (feedback) {
            case 'good':
                setGood(good => good + 1);
                break;

            case 'neutral':
                setNeutral(neutral => neutral + 1);
                break;

            case 'bad':
                setBad(bad => bad + 1);
                break;

            default:
                return;
        }
    };

    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={onLeaveFeedback}
                />
            </Section>
            <Section title="Statistics">
                {total > 0 ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage()}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        </div>
    );
}
