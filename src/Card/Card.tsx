import React from 'react';
import './Card.css';

interface Props {
    name: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    imageUrl: string;
}

function Card(props: Props) {

    return (
        <div className='card'>
            <img src={props.imageUrl} alt={props.name} className="card-img-top" />
            <div>{props.category}</div>
            <div className='card-body'>
                <div className='card-title'>
                    {props.name}
                </div>
                <div className='card-text'>
                    {props.description}
                </div>
                <div>{props.price}</div>
                <div>
                    Rating: {props.rating}
                    <i className='bi-star'></i>
                </div>
                <button className='btn btn-primary'>Order Now</button>
            </div>
        </div>
    );
}

export default Card;