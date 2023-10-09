import Logo from "../../icons/logo.svg";
import "./header.css";
const Header = () => {
    return (
        <>
            <div className="header">
                    <div className="header_item">
                        <img className="logo" src={Logo}></img>
                        <h1 className="logo_text">Медиатор</h1>
                        <nav className="nav">
                            <a className="nav_link">О НАС</a>
                            <a className="nav_link">ОСТАВЬТЕ НОМЕР</a>
                        </nav>
                    </div>
                </div>
        </>
    )
}

export default Header