 import {Routes, Route} from 'react-router-dom'
 import './App.css';
import Home from './Pages/Home/HomePage';
import About from './Pages/About/AboutPage';
import Contact from './Pages/Contact/ContactPage';
import SingleProduct from './Pages/singleProduct/singleProductPage';
import Products from './Pages/Products/ProductsPage';
import ErrorPage from './Pages/Error/ErrorPage';
import BlogPage from './Pages/Blog/BlogPage';

function App() {
  return (<>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/blog' element={<BlogPage/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/singleProduct/:id' element={<SingleProduct/>}/>
    <Route path='/*' element={<ErrorPage/>}/>
  </Routes>
  </>);
}

export default App;
