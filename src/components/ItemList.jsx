import Item from './Item';

function ItemList({items, title}){
    return(
      <div className="item-list">
        {items ? items.map(item => <Item id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} /> ) : 'Cargando....'}
      </div>  
    );
}

export default ItemList;