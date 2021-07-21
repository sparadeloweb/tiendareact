import logo from '../logo.svg'; // Traigo los recursos que quiero utilizar

function NavBar() { // Defino el JSX
    return ( // Retorna un JSX
        <header className="header col-sm-12">
            <div className="header-title-and-icon col-md-4 col-sm-12">
                <img src={logo} className="header-logo" alt="logo"/>
                <h1>Tienda React</h1>
            </div>
            <div className="header-category-sections col-md-8 col-sm-12">
                <p><a href="https://google.com">Productos</a></p>
                <p><a href="https://google.com">Noticias</a></p>
                <p><a href="https://google.com">Contacto</a></p>
            </div>
        </header>
        
    );
}

export default NavBar; // Lo exporto para poder utilizarlo fuera