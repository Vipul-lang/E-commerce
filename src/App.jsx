import './App.css'
import ProductList from './components/ProductList'
import ContextProvider from './context/ContextProvider'
import Cart from './components/Cart'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router'
import ProjectDetails from './components/ProductDetails'



function App() {
  return (
    
    // <ContextProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<ProductList/> }/>  
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products/:id' element={<ProjectDetails/>}/>
      </Routes>
      </BrowserRouter>
    // </ContextProvider>
    
  )
}

export default App
