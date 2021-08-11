function Item({id, title, description, price, pictureUrl}){
    return(
        <div className="item-div">
            <div className="item-image"><img src={pictureUrl} alt={title} /></div>
            <div className="item-title">{title}</div>
            <div className="item-description">{description}</div>
            <div className="item-attributes">
                <div className="item-price">{price} ARS</div>
                <div className="item-id">#{id}</div>
            </div>
            
        </div>
    )
}

export default Item;