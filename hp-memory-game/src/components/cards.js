import { useState } from "react";
import Card from "./card";
import ResetButton from "./button";

function Cards() {
    //state to hold our images and help update the stat when a card is selected
const [items, setItems] = useState([
    { id: 1, img: '/images/badger.png', stat: ""},
    { id: 1, img: '/images/badger.png', stat: ""},
    { id: 2, img: '/images/dumbledore.png', stat: ""},
    { id: 2, img: '/images/dumbledore.png', stat: ""},
    { id: 3, img: '/images/harry.jpg', stat: ""},
    { id: 3, img: '/images/harry.jpg', stat: ""},
    { id: 4, img: '/images/hermione.jpg', stat: ""},
    { id: 4, img: '/images/hermione.jpg', stat: ""},
    { id: 5, img: '/images/lion.jpg', stat: ""},
    { id: 5, img: '/images/lion.jpg', stat: ""},
    { id: 6, img: '/images/ravenclaw.jpg', stat: ""},
    { id: 6, img: '/images/ravenclaw.jpg', stat: ""},
    { id: 7, img: '/images/ron.jpg', stat: ""},
    { id: 7, img: '/images/ron.jpg', stat: ""},
    { id: 8, img: '/images/snake.jpg', stat: ""},
    { id: 8, img: '/images/snake.jpg', stat: ""}
   
].sort(() => Math.random() - 0.5)) //randomise the page after the page is reloaded

const [flippedCount, setFlippedCount] = useState(0);

const[prev, setPrev] = useState(-1)
//function to check the current cards
function check(current) {
    if(items[current].id === items[prev].id){ //if the two flipped cards ids match we change the stat to correct
        items[current].stat = "correct"
        items[prev].stat ="correct"
        setItems([...items])
        setPrev(-1)
    }else{
        items[current].stat = "wrong" //if the flipped cards are incorrect give them the 'wrong' class to apply the css
        items[prev].stat = "wrong"
        setItems([...items])
        setTimeout(() => {              //logic to flip the cards back if they dont match after 1ms
            items[current].stat = ""
            items[prev].stat = ""
            setItems([...items])
            setPrev(-1)
        }, 1000)
    }
}

function handleClick(id) {
   if(prev === -1 && flippedCount < 2) {
    items[id].stat = "active"
    setFlippedCount(flippedCount + 1) //Increase the flipped number by one
    setItems([...items])
    setPrev(id)
   }else if(flippedCount === 1){

    check(id);
    setFlippedCount(0) //Reset the flipped count
   }
}
 
  function resetBoard() {
    // Clear the 'stat' property of each card
    items.forEach((item) => {
      item.stat = "";
    });

    // Reshuffle the cards
    setItems([...items.sort(() => Math.random() - 0.5)]);
    setPrev(-1);
  }
 
    return (
        <div className="holder">
            <div>
                <ResetButton onReset={resetBoard} /> {/* Render the ResetButton component */}
            </div>
            <div className="container">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
                ))}
            </div>
        
        </div>
  );
}

export default Cards;