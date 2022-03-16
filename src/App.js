import './App.css';
import ShoppingCart from './ShoppingCart.js';
import ProductImages from './ProductImages.js';
import ProductInfo from './ProductInfo.js';

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>sneakers</li>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
          <li><ShoppingCart/></li>
        </ul>
      </nav>
      <div className='row'>
        <div className='col-6'><ProductImages/></div>
        <div className='col-6'><ProductInfo/></div>
      </div>
      <p>Coded by MV. Challenge by Frontend Mentor.</p>
    </div>
  )
}