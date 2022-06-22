import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics(props) {
    const { good, neutral, bad, total, positivePercentage } = props;

    return (
        <ul>
            <li className={s.item}>
                Good: <span className={s.value}>{good}</span>{' '}
            </li>
            <li className={s.item}>
                Neutral: <span className={s.value}>{neutral}</span>
            </li>
            <li className={s.item}>
                Bad: <span className={s.value}>{bad}</span>
            </li>
            <li className={s.item}>
                Total: <span className={s.value}>{total}</span>
            </li>
            <li className={s.item}>
                Positive feedback:{' '}
                <span className={s.value}>{positivePercentage}%</span>
            </li>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
