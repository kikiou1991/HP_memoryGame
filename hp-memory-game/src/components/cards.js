
import Card from './card';


function Cards({ items, difficulty, handleClick }) {


    return (
        <div className="holder">

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
