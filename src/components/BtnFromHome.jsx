import { Link } from 'react-router-dom';
import Icon from './helpers/Icon';

function BtnFromHome(){
    return(
        <div className="btn-from-home">
            <Link className="">
                <Icon iconClass="fas "/>
            </Link>
        </div>
    );
}

export default BtnFromHome;