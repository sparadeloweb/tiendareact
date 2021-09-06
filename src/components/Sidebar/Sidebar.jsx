import CartWidget from "./CartWidget";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import { useState, useContext, useEffect } from 'react';
import { CartContext } from './../../context/CartContext.jsx';

function Sidebar() { // Defino el JSX

    const [isShown, setIsShown] = useState(false);
    const cartContext = useContext(CartContext);
    useEffect( () => {
        console.log(cartContext);
    }, [cartContext] );

    return ( // Retorna un JSX
        <div>
            <div className="navbar2" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <ul className="navbar-nav2">
                    <Logo/>
                    <SidebarItem icon="fa-box-open" text="Productos" path="/products"/>
                    <SidebarItem icon="fa-newspaper" text="Noticias" path="/news"/>
                    <SidebarItem icon="fa-address-book" text="Contacto" path="/contact"/>
                    <CartWidget/>
                </ul>
            </div>
            {isShown &&
            <div className="blackscreen">
            </div>
            }
        </div>
    );
}

export default Sidebar; // Lo exporto para poder utilizarlo fuera