import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default class Notification extends Component {
    render() {
        const { message } = this.props;
        return <p className={s.message}>{message}</p>;
    }
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};
