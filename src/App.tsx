import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, ProductDetails } from './screens';

function App() {
  // const [products, setProducts] = useState();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
