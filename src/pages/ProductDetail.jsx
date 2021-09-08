import {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/helpers/Button';
import Icon from '../components/helpers/Icon';
import ItemCount from '../components/ItemCount';
import CartContext from '../context/CartContext';

function ProductDetail({onAdd}){

    const [items, setItems] = useState(false);
    const [item, setItem] = useState({});

    const cartContext = useContext(CartContext);

    let stock = 5; // Se debe cambiar a item.stock

    const addItem = (item, quantity) => {
        console.log(isOnCart(item));
        if(isOnCart(item)) {
            let id = item.id;
            console.log(cartContext.cart, cartContext.cart.id);
            let oldQuantity = cartContext.cart.id.quantity;
            if(oldQuantity + quantity <= stock ) {
                let finalItemVar = {...item, quantity: oldQuantity + quantity};
                cartContext.setCart({...cartContext.cart, [item.id] : finalItemVar});
            }
        } else {
            let finalItemVar = {...item, quantity: quantity};
            
            cartContext.setCart({...cartContext.cart, [item.id] : finalItemVar});
        }
    }

    const isOnCart = (passedItem) => {
        return cartContext.cart.hasOwnProperty(passedItem.id);
    }

    useEffect(() => {
        setTimeout( () => {
            const item = {
                    id: 1,
                    title: 'Página Web Landing',
                    description: 'Adquiere el servicio completo para mostrar en una sola página toda la información de tu empresa o servicio !',
                    price: 30000,
                    pictureUrl: 'https://www.damos.co/fotosnoticias/mac_que_es_una_landing_page_o_pagina_de_aterrizaje_1544133467.png'
            };
            setItem(item);
        }, 2000);
    }, []);

    

    return(
        <div className="page-details">
        {item ?
        <div className="product-detail">
            <div className="product-detail-image">
                <img src={`${item.pictureUrl}`} alt={`${item.title}`} />
            </div>
            <div className="product-detail-info">
                <h2>{`${item.title}`}</h2>
                <p>{`${item.description}`}</p>
                <ItemCount stock={5} onAdd={setItems} initial={0}/>
                <div className="product-detail-item-actions">
                    {items ? <button onClick={() => addItem(item, items)}>Terminar compra</button> : null}
                </div>
            </div>
        </div>
        : <h3>Cargando</h3> }
        </div>
    );
}

export default ProductDetail;