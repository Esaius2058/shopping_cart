import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about-page">
            <Navbar2 />
            <div className="about-hero"></div>
            <div className="about-section">
                <div className="about-illustration">
                    <img src={"src/assets/shopping-cart.svg"} alt={"shopping-cart"} />
                    <h1>About Digero</h1>
                </div>
                <div className="about-description">
                    <p><em>Welcome to Digero - </em>your go-to destination for vibe-heavy variety.
                        Whether you're stocking up on everyday must-haves or hunting for that one perfect piece,
                        we're here to make shopping feel less like a chore and more like a flex.
                    </p>
                </div>
            </div>
            <div className="about-section">
                <div className="about-illustration">
                    <img src={"src/assets/shopping-bag.svg"} alt={"compass"} />
                    <h1>Our Mission</h1>
                </div>
                <div className="about-description">
                    <p>
                        To simplify shopping by offering a diverse range of reliable, high-quality
                        products in one unified, accessible platform.We believe in making your shopping
                        experience not just seamless, but also meaningful - saving you time while
                        delivering your lifestyle needs.
                    </p>
                </div>
            </div>
            <div className="about-section">
                <div className="about-illustration">
                    <img src={"src/assets/telescope.svg"} alt={"telescope"} />
                    <h1>Our Vision</h1>
                </div>
                <div className="about-description">
                    <p>
                        DIGERO aims to become a household name in modern e-commerce. By continuously expanding
                        our inventory and improving customer experience, we're building a platform where
                        convenience and trust go hand in hand. We envision DIGERO as a space where everyday
                        essentials meet elevated standards - without the overwhelm of traditional retail.
                    </p>
                </div>
            </div>
            <div className="about-section">
                <div className="about-illustration">
                    <img src={"src/assets/handshake-solid.svg"} alt={"telescope"} />
                    <h1>Our Commitment</h1>
                </div>
                <div className="about-description">
                    <ul>
                        We are dedicated to:
                        <li>Ethical sourcing</li>
                        <li>Clear return and refund policies</li>
                        <li>Partnering with reputable brands and suppliers</li>
                        <li>Ensuring that our customers feel supported throughout their shopping journey</li>
                    </ul>
                </div>
            </div>
            <div className="about-section">
                <div className="about-illustration">
                    <img src={"src/assets/handshake-solid.svg"} alt={"telescope"} />
                    <h1>Let's stay connected</h1>
                </div>
                <div className="about-description">
                    <p>
                        Have questions? Feedback? Business inquiries? Reach out to us at Hello@digero.com we're 
                        here to help
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;