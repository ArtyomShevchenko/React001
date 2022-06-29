import img from "./media/icon/bird.svg";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="wrapper">
                    <div className="logo">
                        <img src={img} alt="Logo" />
                        <p>Hawk Industries</p>
                    </div>
                    <nav>
                        <ul className="menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <div className="burger-icon"></div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;