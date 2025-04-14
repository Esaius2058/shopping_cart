import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar2 = () => {
    const { cartCounter } = useContext(ShopContext);

    return (
        <div className="header">
            <Logo />
            <div className="nav-container">
                <nav className="nav-bar">
                    <Link to="/shop" className="link">
                        SHOP
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Navbar2;