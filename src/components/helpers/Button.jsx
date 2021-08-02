function Button({action, useClass, value}){
    return(
        <button onClick={action} className={`button ${useClass}`}>{value}</button>
    );
}

export default Button;