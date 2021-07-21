function Sidebar() { // Defino el JSX
    return ( // Retorna un JSX
        <div className="navbar2">
            <ul className="navbar-nav2">
                <li className="logo">
                    <a href="#" className="nav-link">
                        <span className="link-text">Tienda React</span>
                        <i class="fab fa-react"></i>
                    </a>
                </li>
                <li className="nav-item2">
                    <a href="#" className="nav-link">
                        <i class="fas fa-box-open"></i>
                        <span className="link-text">Productos</span>
                    </a>
                </li>
                <li className="nav-item2">
                    <a href="#" className="nav-link">
                        <i class="fas fa-newspaper"></i>
                        <span className="link-text">Noticias</span>
                    </a>
                </li>
                <li className="nav-item2">
                    <a href="#" className="nav-link">
                        <i class="fas fa-address-book"></i>
                        <span className="link-text">Contacto</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar; // Lo exporto para poder utilizarlo fuera