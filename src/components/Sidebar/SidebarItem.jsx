import { Link } from 'react-router-dom';

function SidebarItem({icon, text, path}){
    if(!path){
        path = '/';
    }
    
    return(
        <li className="nav-item2">
            <Link to={path} className="nav-link">
                <i className={`fas ${icon}`}></i>
                <span className="link-text">{text}</span>
            </Link>
        </li>
    );
}

export default SidebarItem;