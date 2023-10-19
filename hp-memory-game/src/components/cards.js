import Card from './card';
import React from 'react';


const Cards = ({ items, difficulty, handleClick }) => {
    return (
        <div className="container">
            {items
                .slice(0, difficulty === 'Easy' ? 12 : items.length)
                .map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                ))}
        </div>
    );
};
export default Cards;