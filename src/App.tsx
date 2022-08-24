import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ButtonCommit, Navbar } from './components';
import MainContext from './context/MainContext';
import { useMainStatesContext } from './hooks';
import { Commits, Home, ProductDetails, ProductForm } from './screens';

function App() {

  const { data, actions } = useMainStatesContext()

  return (
    <>
      <MainContext.Provider value={{ data, actions }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/add" element={<ProductForm />} />
          <Route path="/product/edit/:id" element={<ProductForm />} />
          <Route path="/commits" element={<Commits />} />
        </Routes>
        <ButtonCommit />
      </MainContext.Provider>
    </>
  );
}

export default App;
