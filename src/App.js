import './App.css';
import ShoppingCart from './ShoppingCart.js';
import ProductImages from './ProductImages.js';
import ProductInfo from './ProductInfo.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Nav className="brand">sneakers</Nav>
      <Nav>Collections</Nav>
      <Nav>Men</Nav>
      <Nav>Women</Nav>
      <Nav>About</Nav>
      <Nav>Contact</Nav>
      <Nav><ShoppingCart/></Nav>
      </Navbar>
      <div className='row'>
        <div className='col-6'><ProductImages/></div>
        <div className='col-6'><ProductInfo/></div>
      </div>
      <p>Coded by MV. Challenge by Frontend Mentor.</p>
    </div>
  )
}