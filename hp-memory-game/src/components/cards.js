import { useState } from "react";
import Card from "./card";

function Cards() {
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
   
].sort(() => Math.random() - 0.5))
 
    return(
        <div className="container">
            {items.map((item, index )=> (
                <Card key={index} item={item}/>
            ))}
        </div>
    )
}

export default Cards;