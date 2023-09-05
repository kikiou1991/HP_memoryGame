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

const[prev, setPrev] = useState(-1)

function check(current) {
    if(items[current].id === items[prev].id){
        items[current].stat = "correct"
        items[prev].stat ="correct"
        setItems([...items])
        setPrev(-1)
    }else{
        items[current].stat = "wrong"
        items[prev].stat = "wrong"
        setItems([...items])
        setTimeout(() => {
            items[current].stat = ""
            items[prev].stat = ""
            setItems([...items])
            setPrev(-1)
        }, 1000)
    }
}

function handleClick(id) {
   if(prev === -1) {
    items[id].stat = "active"
    setItems([...items])
    setPrev(id)
   }else{
    check(id)
   }
}
 
    return(
        <div className="container">
            {items.map((item, index )=> (
                <Card key={index} item={item} id={index} handleClick={handleClick}/>
            ))}
        </div>
    )
}

export default Cards;