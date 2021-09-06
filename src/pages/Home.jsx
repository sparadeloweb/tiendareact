import CardWithIlu from "../components/home/CardWithIlu";
import ButtonsForHome from "../components/home/ButtonsForHome";

import svg from '../svg/homeilu.svg';

function Home(){
    let descForCard = <div>
            <p>Esta web fue diseñada como proyecto para el curso de React en la plataforma virtual de Coderhouse. Gracias Nico Restrepo y Eze Romio por la ayuda y la enseñanza</p>
            <p>La tienda contiene productos fictios. No se podrá comprar ninguno de los elementos visualizados en el sitio, ni pagar por ellos.</p>
            <p>Creada por Santiago Paradelo, 20 años, programador web ubicado en Rosario, Santa Fe, Argentina. Ante cualquier otra duda o sugerencia, diríjase a la sección de contactos</p>
        </div>;

    return(
        <div className="home-page-container">
                <h2>Bienvenido a Tienda React !</h2>
                <CardWithIlu title="Web diseñada para Coderhouse <3" desc={descForCard} svg={svg} reverse={false} />
                <ButtonsForHome/>
        </div>
    );
}

export default Home;