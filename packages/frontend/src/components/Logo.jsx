import { Link } from "react-router-dom";

const Logo = () => {
    // This component renders the logo and title of the application.
    // It uses the Link component from react-router-dom to make the logo and title clickable

    return (
        <div className="logo">
            <Link to="/">
                <img
                    src={"/house-laptop-solid.svg"}
                    alt="digero_logo"
                    className="digero_logo"
                />
            </Link>
            <Link to="/" className="link-title">
                <h1 className="home-title">DIGERO</h1>
            </Link>
        </div>
    );
}

export default Logo;