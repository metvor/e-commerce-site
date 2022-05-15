import './App.css';
import ShoppingCart from './ShoppingCart.js';
import ProductImages from './ProductImages.js';
import ProductInfo from './ProductInfo.js';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from './images/image-avatar.png';



export default function App() {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
      <nav className='nav product'>sneakers</nav>
      <nav className='nav'>Collections</nav>
      <nav className='nav'>Men</nav>
      <nav className='nav'>Women</nav>
      <nav className='nav'>About</nav>
      <nav className='nav'>Contact</nav>
      <nav className='nav cart'><ShoppingCart/></nav>
      <nav className='nav avatar'><img src={avatar} alt="avatar" width="60"/></nav>
      </Navbar>
      <div className='parent'>
        <div className='section'><ProductImages/></div>
        <div className='section'><ProductInfo/></div>
      </div>
      </div>
  )
} 