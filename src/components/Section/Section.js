import PropTypes from 'prop-types';

import s from './Section.module.css';

import React, { Component } from 'react';

export default class Section extends Component {
    render() {
        const { title, children } = this.props;

        return (
            <div className={s.section}>
                <h2 className={s.title}>{title}</h2>
                {children}
            </div>
        );
    }
}

Section.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
};
