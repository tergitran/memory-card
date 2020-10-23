import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppBar.module.css';

const AppBar = props => {
    const { currentScore, bestScore } = props;
    return (
        <div className={styles.AppBar}>
            <h1 className={styles.Title}>Memory Card</h1>
            <div className={styles.Score}>
                <h3>Score: {currentScore}</h3>
                <h3>Best Score: {bestScore}</h3>
            </div>
        </div>
    );
};

AppBar.propTypes = {

};

export default AppBar;