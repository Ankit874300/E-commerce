import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import nav_drodown from '../Assests/dropdown_icon.png';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
      
        <div className='navbar'>
            <div className='nav-logo'>
                <img  src={logo} alt='' />
                <p onClick={() => { setMenu("shop") }}> <Link style={{ textDecoration:'none', color:'black' }} to='/'>Shopable</Link></p>
            </div>
            <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_drodown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}> <Link style={{ textDecoration: 'none' , color:'black'}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}> <Link style={{ textDecoration: 'none' , color:'black'}} to='/mens'>Mens</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}> <Link style={{ textDecoration: 'none' , color:'black'}} to='/womens'>Womens</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}> <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
                {/* <li onClick={() => { setMenu("kids") }}> <Link style={{ textDecoration: 'none'  }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li> */}
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} >Logout</button>:
                <Link to='/login'><button>Login</button></Link>}
             
                <Link to='/cart'><img src={cart_icon} alt='' /></Link>

                <div className="nav-cart-count">
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
