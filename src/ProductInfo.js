import { useState } from 'react';
import './ProductInfo.css';
import ShoppingCart from './ShoppingCart';

export default function ProductInfo() {
const [count, setCount] = useState(0)

function Counter() {
    const handleMinus = () => {
        setCount(count-1)}
    const handlePlus = () => {
        setCount(count+1)}
    return (
        <div>
            <p className="counter">
            <span className="button" onClick={handleMinus}>-</span>
            <span className="number">{count}</span>
            <span className="button" onClick={handlePlus}>+</span>
            </p>
        </div>
    )
}

function AddButton() {
    return (
        <div>
        <button><ShoppingCart/>Add to cart</button>
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
                <p id="currentPrice">$125.00</p>
                <p id="discount">50%</p>
                <p id="oldPrice">$250.00</p>
            </div>
            <Counter/><AddButton/>
        </div>
    )
}
