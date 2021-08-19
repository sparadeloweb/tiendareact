import CartWidget from "./CartWidget";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

function Sidebar() { // Defino el JSX
    return ( // Retorna un JSX
        <div className="navbar2">
            <ul className="navbar-nav2">
                <Logo/>
                <SidebarItem icon="fa-box-open" text="Productos" path="/products"/>
                <SidebarItem icon="fa-newspaper" text="Noticias" path="/news"/>
                <SidebarItem icon="fa-address-book" text="Contacto" path="/contact"/>
                <CartWidget/>
            </ul>
        </div>
    );
}

export default Sidebar; // Lo exporto para poder utilizarlo fuera