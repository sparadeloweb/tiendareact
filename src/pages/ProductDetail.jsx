import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/helpers/Button';
import Icon from '../components/helpers/Icon';
import ItemCount from '../components/ItemCount';

function ProductDetail(){

    const [item, setItem] = useState();

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
                <ItemCount stock={5} initial={0}/>
                <div className="product-detail-item-actions">
                    <Link to="/">
                        <Icon iconClass="fas fa-shopping-cart"/>
                        Añadir al carrito
                    </Link>
                    <Link to="/">
                        <Icon iconClass="fas fa-heart"/>
                        Me Gusta
                    </Link>
                    <Link to="/">
                        <Icon iconClass="fas fa-share"/>
                        Compartir
                    </Link>
                </div>
            </div>
        </div>
        : <h3>Cargando</h3> }
        </div>
    );
}

export default ProductDetail;