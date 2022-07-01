import logo from "../media/icon/bird.svg";

function Logo() {
    return (
        <div className="logo-container">
            <img src={logo} alt="Icon"/>
            <div>Hawk Industries</div>
        </div>
    );
};

export default Logo;