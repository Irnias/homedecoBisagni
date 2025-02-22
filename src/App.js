import React from 'react';
import NavBar from './componentes/navBar/NavBar';
import { ItemListContainer } from './componentes/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './componentes/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './componentes/cart/Cart';
import { Error } from './componentes/error/Error';

const App = () => {

  const name = "Carla";
  const lastname = "Bisagni";
  const links = [
    {name: "Cocina", route: "categorias/cocina", id: 1},
    {name: "Jardin", route: "categorias/jardin", id: 2},
    {name: "Living", route: "categorias/living", id: 3},
    {name: "Habitacion", route: "categorias/habitacion", id: 4}
];

  return (
    <BrowserRouter>
      <NavBar listaLiks={links} />  
      <Routes>
        <Route path="/" element={<ItemListContainer nombre={name} apellido={lastname}/>}/>
        <Route path="/categorias/:name" element={<ItemListContainer nombre={name} apellido={lastname}/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />}/>
      </Routes>      
    </BrowserRouter>
  );
};

export default App;