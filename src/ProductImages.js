import image1small from './images/image-product-1-thumbnail.jpg';
import image2small from './images/image-product-2-thumbnail.jpg';
import image3small from './images/image-product-3-thumbnail.jpg';
import image4small from './images/image-product-4-thumbnail.jpg';
import image1 from './images/image-product-1.jpg';
import image2 from './images/image-product-2.jpg';
import image3 from './images/image-product-3.jpg';
import image4 from './images/image-product-4.jpg';
import './ProductImages.css';

export default function ProductImages() {
    return (
        <div>
            <div className="main">
            <img id="preview" src={image1} alt="product" width="400"/>
            </div>
            <div className="thumbnail">
            <img id="thumbnail1" src={image1small} alt="product" width="100"/>
            <img id="thumbnail2" src={image2small} alt="product" width="100"/>
            <img id="thumbnail3" src={image3small} alt="product" width="100"/>
            <img id="thumbnail4" src={image4small} alt="product" width="100"/>

            </div>
        </div>
    );
}