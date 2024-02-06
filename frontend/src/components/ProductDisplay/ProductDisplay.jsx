import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'
const ProductDisplay = (props) => {
    const {product} =props;
    const {addToCart} = useContext(ShopContext);
    return (
    <div className='productdisplay'>
<div className="productdisplayleft">
<div className="productdisplay-img-list">
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
</div>
<div className="productdisplay-img">
    <img className='productdisplay-main-img' src={product.image} alt="" />
</div>
</div>
<div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">₹{product.old_price}</div>
            <div className="productdisplay-right-prices-new">₹{product.new_price}</div>
        </div>
        <div className="productdisplay-right-discription">
        We guarantee a 100% match between the image shown and the actual product sent.
         However product colour may slightly vary due your monitor settings. 
        Customer's discretion is advised but we can guarantee you will love the product! Model Height:
        </div>
        <div className="productdisplay-right-size">
           
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
        </div>
        <button onClick={()=>{addToCart(product.id)} }  >ADD TO CART  </button>
        {/* console.log(1); */}
        <p className='productdisplay-right-category'> <span>Category :</span> Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'> <span>Tags :</span> Modern, Latest</p>

</div>

    </div>
  )
}

export default ProductDisplay