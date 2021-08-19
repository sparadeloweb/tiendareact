import { Link } from 'react-router-dom';

function Logo(){
    return(
        <li className="logo">
            <Link to="/" className="nav-link">
                <span className="link-text">Tienda React</span>
                <i class="fab fa-react"></i>
            </Link>
        </li>
    );
}

export default Logo;