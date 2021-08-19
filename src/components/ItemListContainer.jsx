import ItemList from "./ItemList";
import { useEffect, useState } from "react";

function ItemListContainer(){

    const [items, setItems] = useState();

    useEffect(() => {

        setTimeout( () => {
            const items = [
                {
                    id: 1,
                    title: 'Página Web Landing',
                    description: 'Adquiere el servicio completo para mostrar en una sola página toda la información de tu empresa o servicio !',
                    price: 30000,
                    pictureUrl: 'https://www.damos.co/fotosnoticias/mac_que_es_una_landing_page_o_pagina_de_aterrizaje_1544133467.png'
                },
                {
                    id: 2,
                    title: 'Página Web E-Commerce',
                    description: 'Crea y corre una tienda para tu negocio, 100% configurada y lista para vender. Se realizará sobre WordPress y WooCommerce.',
                    price: 50000,
                    pictureUrl: 'https://www.enfasys.net/wp-content/uploads/2019/05/ecommerce.jpg'
                },
                {
                    id: 3,
                    title: 'Aplicación Web',
                    description: 'Montá tu propia aplicación para IOS o Android utilizando las tecnologías React y React Native. Llevá tu sitio al siguiente nivel !',
                    price: 100000,
                    pictureUrl: 'https://www.multiplicalia.com/wp-content/uploads/2018/04/Progressive-Web-Apps.jpg'
                },
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