function SidebarItem({icon, text}){
    return(
        <li className="nav-item2">
            <a href="#" className="nav-link">
                <i className={`fas ${icon}`}></i>
                <span className="link-text">{text}</span>
            </a>
        </li>
    );
}

export default SidebarItem;