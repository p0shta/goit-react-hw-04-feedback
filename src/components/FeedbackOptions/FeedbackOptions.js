import React, { Component } from 'react';

import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;

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
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
