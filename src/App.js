import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import Sidebar from './components/Sidebar/Sidebar'; // Importo el componente Sidebar (mi primer componente creado)
import { CartContext } from './context/CartContext';
import Products from './pages/Products';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';



function App() {

  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
        <BrowserRouter>
          <div className="App">
            <Sidebar/>
            <main>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/products">
                  <Products/>
                </Route>
                <Route exact path="/product/:id">
                  <ProductDetail/>
                </Route>
                <Route exact path="/contact">
                  <Contact/>
                </Route>
              </Switch>
            </main>
          </div>
        </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
