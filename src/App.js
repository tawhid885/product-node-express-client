import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './components/AddProducts/AddProducts';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/products" element={<Products></Products>} />
          <Route path="/products/:id" element={<UpdateProduct></UpdateProduct>} />
          <Route path="/addProducts" element={<AddProducts></AddProducts>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
