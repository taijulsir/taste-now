import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css"
const Navbar = () => {

    const navlinks =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contactUs">Contact Us</NavLink></li>
            <li><NavLink to="/cart"><AiOutlineShoppingCart className="cart-icon"></AiOutlineShoppingCart></NavLink></li>
            <li><NavLink to="/register" className="sign-up-btn">Sign Up</NavLink></li>
        </>
    return (
        <div>
            <div className="container">
                {/* Website name */}
                <div className="website-title">Taste Now</div>
                {/* Navlinks */}
                <div>
                    <ul className=" list-container">
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;