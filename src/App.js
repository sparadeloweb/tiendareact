import Sidebar from './components/Sidebar/Sidebar'; // Importo el componente Sidebar (mi primer componente creado)
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
       <Sidebar/>
       <main>
         <ItemListContainer greeting="Hola Coder! Soy Santiago"/>
       </main>
    </div>
  );
}

export default App;
