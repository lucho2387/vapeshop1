import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './Screen/Inicio/Inicio';
import Productos from './Screen/Productos/Productos';
import Promociones from './Screen/Promociones/Promociones';
import Nosotros from './Screen/Nosotros/Nosotros';
import Contacto from './Screen/Contacto/Contacto';
import Cart from './Screen/Cart/Cart';
import Detalle from './Screen/Detalle/Detalle';
import {CartContextProvider} from './context/CartContext'

function App() {
 
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route exact path="/productos/:productoId" element={<Productos />} />
          <Route exact path="/producto/:codigoId" element={<Detalle />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>  
  );
}

export default App;
