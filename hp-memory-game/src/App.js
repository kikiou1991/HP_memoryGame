import React, { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import Cards from "./components/cards";
import ResetButton from "./components/button";
import Levels from "./components/levels";

function App() {
  const [items, setItems] = useState([]);
  const [flippedCount, setFlippedCount] = useState(0);
  const [prev, setPrev] = useState(-1);
  const [difficulty, setDifficulty] = useState("Empty");
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const cardsByDifficulty = {
      Easy: [
        { id: 1, img: '/images/badger.png', stat: "", id2: 1 },
        { id: 1, img: '/images/badger.png', stat: "", id2: 2 },
        { id: 2, img: '/images/dumbledore.png', stat: "", id2: 3 },
        { id: 2, img: '/images/dumbledore.png', stat: "", id2: 4 },
        { id: 3, img: '/images/harry.png', stat: "", id2: 5 },
        { id: 3, img: '/images/harry.png', stat: "", id2: 6 },
        { id: 4, img: '/images/hermione.png', stat: "", id2: 7 },
        { id: 4, img: '/images/hermione.png', stat: "", id2: 8 },
        { id: 5, img: '/images/lion.png', stat: "", id2: 9 },
        { id: 5, img: '/images/lion.png', stat: "", id2: 10 },
        { id: 6, img: '/images/ravenclaw.png', stat: "", id2: 11 },
        { id: 6, img: '/images/ravenclaw.png', stat: "", id2: 12 },
      ], /* array for the easy game */
      Hard: [
        { id: 1, img: '/images/badger.png', stat: "", id2: 1 },
        { id: 1, img: '/images/badger.png', stat: "", id2: 2 },
        { id: 2, img: '/images/dumbledore.png', stat: "", id2: 3 },
        { id: 2, img: '/images/dumbledore.png', stat: "", id2: 4 },
        { id: 3, img: '/images/harry.png', stat: "", id2: 5 },
        { id: 3, img: '/images/harry.png', stat: "", id2: 6 },
        { id: 4, img: '/images/hermione.png', stat: "", id2: 7 },
        { id: 4, img: '/images/hermione.png', stat: "", id2: 8 },
        { id: 5, img: '/images/lion.png', stat: "", id2: 9 },
        { id: 5, img: '/images/lion.png', stat: "", id2: 10 },
        { id: 6, img: '/images/ravenclaw.png', stat: "", id2: 11 },
        { id: 6, img: '/images/ravenclaw.png', stat: "", id2: 12 },
        { id: 7, img: '/images/ron.png', stat: "", id2: 13 },
        { id: 7, img: '/images/ron.png', stat: "", id2: 14 },
        { id: 8, img: '/images/snake.png', stat: "", id2: 15 },
        { id: 8, img: '/images/snake.png', stat: "", id2: 16 }
      ], /*array for the hard game mode*/
      Empty: []
    };

    const shuffledCards = cardsByDifficulty[difficulty].sort(() => Math.random() - 0.5); //shuffling the cards randomly

    setItems([...shuffledCards]);
  }, [difficulty]);

  //function for checking for pairs
  function check(current) {
    if (items[current].id === items[prev].id && items[current].id2 !== items[prev].id2) {
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setItems([...items]);
      setPrev(-1);
      const newMatchedPairs = matchedPairs + 1; //keeps track of the matched pairs
      setMatchedPairs(newMatchedPairs);
      if (newMatchedPairs === items.length / 2) {
        resetBoardDelay();
      }
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
  //function to handle flipping the cards, checking if they match
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
  //function to reset the board
  function resetBoard() {
    items.forEach((item) => {
      item.stat = '';
    });
    setDifficulty('Empty');
    setIsActive(false);
  }

  function resetBoardDelay() {
    setTimeout(() => {
      resetBoard();
      setMatchedPairs(0); //resets the board once they are all matched up
    }, 5000)
  }

  return (
    <div className="App">
      <div>
        <h1>Harry Potter Memory-Game</h1>
      </div>
      <div className="holder">
        <div className="reset-button">
          <ResetButton onReset={resetBoard} />
        </div>
        <div className="diff-style">
          <Levels onChangeDifficulty={setDifficulty} isActive={isActive} setIsActive={setIsActive} />
        </div>
        {isActive && <div className="container">
          {/* <Cards items={items} difficulty={difficulty} handleClick={handleClick} /> */}
          <Cards items={items} difficulty={difficulty} handleClick={handleClick} /> : null
        </div>}
        {!isActive && <div className="hero">
          <div className="text-animation">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Welcome, please pick a difficulty!',
                2000,
                'Good luck and enjoy!',// wait 1s before replacing "Mice" with "Hamsters"

              ]}
              wrapper="span"
              speed={25}
              style={{ fontSize: '2em', display: 'inline-block', }}
              repeat={Infinity}
              deletionSpeed={25}
            />
          </div>
          <div>
            <img className='wizard' src="images/wizard.png" alt="wizard" />
          </div>

        </div>}

      </div>
    </div>
  );
}

export default App;