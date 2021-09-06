import { Link } from 'react-router-dom';
import Icon from '../helpers/Icon';

function ButtonsForHome () {
    return (
        <div className="buttons-for-home-container">
            <Link to="/products">
                <Icon iconClass="fas fa-box-open"/> Productos
            </Link>
            <Link to="/news">
                <Icon iconClass="fas fa-box-open"/> Noticias
            </Link>
            <Link to="/contact">
                <Icon iconClass="fas fa-box-open"/> Contacto
            </Link>
        </div>
    );
}

export default ButtonsForHome;