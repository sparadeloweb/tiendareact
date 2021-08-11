import Item from './Item';

function ItemList({items, title}){
    return(
    <div className="item-list-box">
        <h2 className="item-list-title">{title}</h2>
        <div className="item-list">
        {
        items ? items.map(item => <Item id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} /> ) : <h3>Cargando....</h3>
        }
      </div>  
    </div>
    );
}

export default ItemList;