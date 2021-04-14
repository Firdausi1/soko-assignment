import React from 'react';
import './Bag.css';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Link } from 'react-router-dom';

export default function EmptyBag() {
    return (
        <div className="emptyBag">
            <SentimentVeryDissatisfiedIcon fontSize="large"/>
            <h3>It's empty here</h3>
            <p>Start shopping to add items to basket</p>
            <Link to="/">
            <button className="secondary__button emptyBag__button">Back to homepage</button>
            </Link>
        </div>
    )
}
