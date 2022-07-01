import copirightLogo from "../media/icon/copiright.svg";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="wrapper">
                    <div className="title-page">Hawk Industries</div>
                    <div className="content">
                        <nav className="menu-list">
                            <ul>
                                <li><b>About</b></li>
                                <li><a href="#">Who We Are</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                            <ul>
                                <li><b>Blog</b></li>
                                <li><a href="#">Latest</a></li>
                                <li><a href="#">Trending</a></li>
                                <li><a href="#">Most Popular</a></li>
                            </ul>
                            <ul>
                                <li><b>Legal</b></li>
                                <li><a href="#">Terms Of Use</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </nav>
                        <section className="subscribe-container">
                            <b>Subscribe to our newsletter to receive news!</b>
                            <form>
                                <p>Enter your email</p>
                                <div>
                                    <input type="email" />
                                    <input type="submit" value="Subscribe" />
                                </div>
                            </form>
                        </section>
                    </div>
                    <div className="copiright-container">
                        <img src={copirightLogo} alt="Copiright" />
                        <p>Hawk Industries 2022.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;