function Card({item}) {
    return (
        <div className="card">
            <img src={item.img} alt={item.id}/>
        </div>
    )
}

export default Card;