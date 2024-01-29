import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {

    const navlinks =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">About Us</NavLink></li>
            <li><NavLink to="/">Blog</NavLink></li>
            <li><NavLink to="/">Contact Us</NavLink></li>
            <li><NavLink to="/"><AiOutlineShoppingCart></AiOutlineShoppingCart></NavLink></li>
            <li><NavLink to="/">Sign Up</NavLink></li>
        </>
    return (
        <div>
            <div>
                {/* Website name */}
                <div className="website-title">Taste Now</div>
                {/* Navlinks */}
                <div>
                    <ul>
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;