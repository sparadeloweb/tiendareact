import Sidebar from './components/Sidebar/Sidebar'; // Importo el componente Sidebar (mi primer componente creado)
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
       <Sidebar/>
       <main>
         <ItemListContainer greeting="Hola Coder! Soy Santiago"/>
         <ItemCount stock="5" initial="0"/>
       </main>
    </div>
  );
}

export default App;
