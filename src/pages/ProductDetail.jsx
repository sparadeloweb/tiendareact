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

    const isInCart = (itemId) => {
        return cartContext.cart.some(item => item.id == itemId);
    }

    const addItemToCart = (newItem, quantity) => {
        if (isInCart(newItem.id)) {
            const cartEditado = cartContext.cart.map(item => item.id === newItem.id ? {...newItem, quantity: quantity} : item);
            cartContext.setCart(cartEditado);
        } else {
            cartContext.setCart([...cartContext.cart, {...newItem, quantity: quantity}]);
        }
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
                    {items ? <button onClick={() => addItemToCart(item, items)}>Terminar compra</button> : null}
                </div>
            </div>
        </div>
        : <h3>Cargando</h3> }
        </div>
    );
}

export default ProductDetail;