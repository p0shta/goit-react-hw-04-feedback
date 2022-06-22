import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div>
            <ul className={s.list}>
                {options.map(option => {
                    const capitalizedFirstLetterWord =
                        option.split('')[0].toUpperCase() + option.slice(1);

                    return (
                        <li key={option} className={s.item}>
                            <button
                                className={s.button}
                                type="button"
                                onClick={() => onLeaveFeedback(option)}
                            >
                                {capitalizedFirstLetterWord}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
