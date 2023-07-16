import logo from './logo.svg';
import './App.css';
import Products from './pages/Products';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateProduct from './pages/CreateProduct';


function App() {
  return (
    <>
    {/* Define homepage route, to redirect to the Products Grid */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/createproduct" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
 

export default App
