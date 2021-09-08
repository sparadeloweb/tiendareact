import {useState} from 'react';
import Button from './helpers/Button';
import Icon from './helpers/Icon';

function ItemCount({stock, initial, onAdd, item}){
    const [count, setCount] = useState(parseInt(initial));

    const stockMinimo = stock || 0;
    
    const validateStockAndAdd = (quantity = 0, availableQuantity = 0) => {
        if(quantity < availableQuantity){
                setCount(count + 1);
                onAdd(count + 1);
        }
    };

    const validateStockAndMinus = (quantity = 0) => {
        if(quantity > 0){
            setCount(count - 1);
            if(count == 0) {
                onAdd(false);
            } else {
                onAdd(count - 1);
            }
        }
    }

    return(
        <div className="count-display">
            <Button action={() => validateStockAndMinus(count)} value={<Icon iconClass="fas fa-minus"/>}/>
            <p>{count}</p>
            <Button action={() => validateStockAndAdd(count, stockMinimo)} value={<Icon iconClass="fas fa-plus"/>}/>
        </div>
    );
}

export default ItemCount;