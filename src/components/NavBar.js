import CartWidget from "./CartWidget";
import Logo from "./Logo";

function NavBar() {
    return (
        <div className="header">
            <div className="header__content container">
                <div className="header__content-logo">
                        <Logo />
                </div>
                <div className="header__content-menu">

                    <nav>
                        <ul>
                            <li><a href="@">Sobre Mí</a></li>
                            <li><a href="@">Music</a></li>
                            <li><a href="@">Shop</a></li>
                            <li><a href="@">Contacto</a></li>
                        </ul>
                    </nav>

                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </div>
    );
}

export default NavBar;