import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card';
import styles from './Cards.module.css';
import AppBar from './AppBar/AppBar';

// const imageInfors = [{ id: 0, url: '/beagles.jpg', breed: 'Beagle' }, { id: 1, url: '/Brittany.jpg', breed: 'Brittany' }, { id: 2, url: '/Dachshund.jpg', breed: 'Dachshund' },
// { id: 3, url: '/french-bulldog.jpg', breed: 'French Bulldog' }, { id: 4, url: '/German-Shepherd-dog.jpg', breed: 'German Shepherd' },
// { id: 5, url: '/golden-retriever.jpg', breed: 'Golden Retriever' }, { id: 6, url: '/Pembroke-Welsh-Corgi.jpg', breed: 'Pembroke Welsh Corgi' },
// { id: 7, url: '/Pomeranian.jpg', breed: 'Pomeranian' }, { id: 8, url: '/poodles.jpg', breed: 'Poodles' },
// { id: 9, url: '/Rottweiler.jpg', breed: 'Rottweiler' }, { id: 10, url: '/Siberian-Husky.jpg', breed: 'Siberian Husky' },
// { id: 11, url: '/yorkshire-terrier.jpg', breed: 'Yorkshire Terrier' }];


function checkNoDoubleCards(cardsList, id) {
    if (cardsList.indexOf(id) != -1)
        return false;
    return true;
}

const Cards = props => {
    const [imageInfors, setImageInfors] = useState([{ id: 0, url: '/beagles.jpg', breed: 'Beagle' }, { id: 1, url: '/Brittany.jpg', breed: 'Brittany' }, { id: 2, url: '/Dachshund.jpg', breed: 'Dachshund' },
    { id: 3, url: '/french-bulldog.jpg', breed: 'French Bulldog' }, { id: 4, url: '/German-Shepherd-dog.jpg', breed: 'German Shepherd' },
    { id: 5, url: '/golden-retriever.jpg', breed: 'Golden Retriever' }, { id: 6, url: '/Pembroke-Welsh-Corgi.jpg', breed: 'Pembroke Welsh Corgi' },
    { id: 7, url: '/Pomeranian.jpg', breed: 'Pomeranian' }, { id: 8, url: '/poodles.jpg', breed: 'Poodles' },
    { id: 9, url: '/Rottweiler.jpg', breed: 'Rottweiler' }, { id: 10, url: '/Siberian-Husky.jpg', breed: 'Siberian Husky' },
    { id: 11, url: '/yorkshire-terrier.jpg', breed: 'Yorkshire Terrier' }]);
    const [chosenCards, setChosenCards] = useState([]);
    // const [random, setRandom] = useState(true);
    const [bestCore, setBestScore] = useState(0);

    function handleCardClicked(id) {
        if (checkNoDoubleCards(chosenCards, id)) {
            const newChosenCards = [...chosenCards, id];
            setChosenCards(newChosenCards);
            setRandomCards(imageInfors);
            // setRandom(!random);
            console.log(newChosenCards);
        } else {
            console.log("Game Over!");
            if (chosenCards.length > bestCore) {
                setBestScore(chosenCards.length);
            }
            setRandomCards(imageInfors);
            setChosenCards([]);
        }
    }

    function setRandomCards(imageInfors) {
        // Requiring the lodash library  
        const _ = require("lodash");

        // Original array  
        // var array = [2, 4, 6, 9, 10]; 

        // Use of _.shuffle() method 
        let shuffled_imageInfors = _.shuffle(imageInfors);

        // Printing the output  
        console.log(shuffled_imageInfors);

        setImageInfors(shuffled_imageInfors);

        // return shuffled_imageInfors.map(infor => <Card
        //     clicked={handleCardClicked}
        //     key={infor.id}
        //     infor={infor} />)
    }

    useEffect(() => {
        setRandomCards(imageInfors);
    }, []);

    return (
        <Fragment>
            <AppBar
                bestScore={bestCore}
                currentScore={chosenCards.length} />

            <div className={styles.Cards}>
                {imageInfors.map(infor => <Card
                    clicked={handleCardClicked}
                    key={infor.id}
                    infor={infor} />)}
            </div>
        </Fragment>
    );
};

Cards.propTypes = {

};

export default Cards;