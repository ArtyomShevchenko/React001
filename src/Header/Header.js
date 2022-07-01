import Logo from "../Components/Logo";
import Menu from "../Components/Menu";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <Logo />
                    <Menu />
                </div>
            </div>
        </header>
    );
};

export default Header;