import { useState } from 'react';
import './ProductInfo.css';
import ShoppingCart from './ShoppingCart';

export default function ProductInfo() {
const [count, setCount] = useState(0);

function Buttons() {
    const handleMinus = () => {
        setCount(count-1)}
    const handlePlus = () => {
        setCount(count+1)}

    const handleCart = () => {
        
    }


    return (
        <div className="buttons">
            <div className="counter">
            <span className="button" onClick={handleMinus}>-</span>
            <span className="number">{count}</span>
            <span className="button" onClick={handlePlus}>+</span>
            </div>
            <button className="addButton" onClick={handleCart}><span><ShoppingCart/></span><span>Add to cart</span></button>
        </div>
    )
}

    return (
        <div>
            <div className="text">
            <p className="brand">Sneaker Company</p>
            <p className="title">Fall Limited Edition Sneakers</p>
            <p className="description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            </div>
            <div className="price">
                <span id="currentPrice">$125.00</span><span id="discount">50%</span>
                <p id="oldPrice">$250.00</p>
            </div>
            <Buttons/>
            <p className="footer">Coded by MV. Challenge by Frontend Mentor.</p>

        </div>
    )
}
