import React, { useState, useEffect } from 'react';
import Card from './card';
import ResetButton from './button';
import Levels from './levels';

function Cards() {
    const [items, setItems] = useState([]);
    const [flippedCount, setFlippedCount] = useState(0);
    const [prev, setPrev] = useState(-1);
    const [difficulty, setDifficulty] = useState('Easy');

    useEffect(() => {
        const cardsByDifficulty = {
            Easy: [
                { id: 1, img: '/images/badger.png', stat: "" },
                { id: 1, img: '/images/badger.png', stat: "" },
                { id: 2, img: '/images/dumbledore.png', stat: "" },
                { id: 2, img: '/images/dumbledore.png', stat: "" },
                { id: 3, img: '/images/harry.png', stat: "" },
                { id: 3, img: '/images/harry.png', stat: "" },
                { id: 4, img: '/images/hermione.png', stat: "" },
                { id: 4, img: '/images/hermione.png', stat: "" },
                { id: 5, img: '/images/lion.png', stat: "" },
                { id: 5, img: '/images/lion.png', stat: "" },
                { id: 6, img: '/images/ravenclaw.png', stat: "" },
                { id: 6, img: '/images/ravenclaw.png', stat: "" },
            ], /* array for the easy game */
            Hard: [
                { id: 1, img: '/images/badger.png', stat: "" },
                { id: 1, img: '/images/badger.png', stat: "" },
                { id: 2, img: '/images/dumbledore.png', stat: "" },
                { id: 2, img: '/images/dumbledore.png', stat: "" },
                { id: 3, img: '/images/harry.png', stat: "" },
                { id: 3, img: '/images/harry.png', stat: "" },
                { id: 4, img: '/images/hermione.png', stat: "" },
                { id: 4, img: '/images/hermione.png', stat: "" },
                { id: 5, img: '/images/lion.png', stat: "" },
                { id: 5, img: '/images/lion.png', stat: "" },
                { id: 6, img: '/images/ravenclaw.png', stat: "" },
                { id: 6, img: '/images/ravenclaw.png', stat: "" },
                { id: 7, img: '/images/ron.png', stat: "" },
                { id: 7, img: '/images/ron.png', stat: "" },
                { id: 8, img: '/images/snake.png', stat: "" },
                { id: 8, img: '/images/snake.png', stat: "" }
            ], /*array for the hard game mode*/
        };

        const shuffledCards = cardsByDifficulty[difficulty].sort(() => Math.random() - 0.5);

        setItems([...shuffledCards]);
    }, [difficulty]);

    function check(current) {
        if (items[current].id === items[prev].id) {
            items[current].stat = 'correct';
            items[prev].stat = 'correct';
            setItems([...items]);
            setPrev(-1);
        } else {
            items[current].stat = 'wrong';
            items[prev].stat = 'wrong';
            setItems([...items]);
            setTimeout(() => {
                items[current].stat = '';
                items[prev].stat = '';
                setItems([...items]);
                setPrev(-1);
            }, 1000);
        }
    }

    function handleClick(id) {
        if (prev === -1 && flippedCount < 2) {
            items[id].stat = 'active';
            setFlippedCount(flippedCount + 1);
            setItems([...items]);
            setPrev(id);
        } else if (flippedCount === 1) {
            check(id);
            setFlippedCount(0);
        }
    }

    function resetBoard() {
        items.forEach((item) => {
            item.stat = '';
        });
        setDifficulty('Easy');
    }

    return (
        <div className="holder">
            <div>
                <ResetButton onReset={resetBoard} />
            </div>
            <div className="diff-style">
                <Levels onChangeDifficulty={setDifficulty} />
            </div>
            <div className="container">
                {items
                    .slice(0, difficulty === 'Easy' ? 12 : items.length)
                    .map((item, index) => (
                        <Card key={index} item={item} id={index} handleClick={handleClick} />
                    ))}
            </div>
        </div>
    );
}

export default Cards;
