import ItemList from "./ItemList";
import { useEffect, useState } from "react";

function ItemListContainer({greeting}){

    const [items, setItems] = useState();

    useEffect(() => {

        setTimeout( () => {
            
            const items = [
                {
                    id: 1,
                    title: 'Página Web Landing',
                    description: 'Solo la presentación',
                    price: 30000,
                    pictureUrl: 'https://www.damos.co/fotosnoticias/mac_que_es_una_landing_page_o_pagina_de_aterrizaje_1544133467.png'
                },
                {
                    id: 2,
                    title: 'Página Web E-Commerce',
                    description: 'Tienda para tu negocio',
                    price: 50000,
                    pictureUrl: 'https://www.enfasys.net/wp-content/uploads/2019/05/ecommerce.jpg'
                },
                {
                    id: 3,
                    title: 'Aplicación Web',
                    description: 'Tienda para tu negocio',
                    price: 100000,
                    pictureUrl: 'https://www.multiplicalia.com/wp-content/uploads/2018/04/Progressive-Web-Apps.jpg'
                },
                {
                    id: 4,
                    title: 'Aplicación Web',
                    description: 'Tienda para tu negocio',
                    price: 100000,
                    pictureUrl: 'https://www.multiplicalia.com/wp-content/uploads/2018/04/Progressive-Web-Apps.jpg'
                }
            ];

            setItems(items);
            
        }, 2000);

    }, []);

    return(
        <div>
            <ItemList items={items} title={'Mis primeros productos'}/>
        </div>
    );
}

export default ItemListContainer;