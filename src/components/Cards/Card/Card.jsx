import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = props => {
    const { infor, clicked } = props;
    const { id, url, breed } = infor;
    return (
        <div
            className={styles.Card}
            onClick={() => clicked(id)} >
            <img className={styles.Image} src={url} />
            <h3>{breed}</h3>
        </div>
    );
};

Card.propTypes = {

};

export default Card;