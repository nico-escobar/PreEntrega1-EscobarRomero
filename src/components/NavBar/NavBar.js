import CardWidget from "../CartWidget/Cardwidget";
import "bulma/css/bulma.css";

const NavBar = () => {
    return ( 
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <a className="navbar-item" href="https://www.facebook.com/profile.php?id=100010272153497">
        <img src="https://scontent.fepa4-1.fna.fbcdn.net/v/t39.30808-6/395391541_2006100289742357_3319516654393800062_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yKLj-CWHefAAX-mcm2M&_nc_ht=scontent.fepa4-1.fna&oh=00_AfALItIfRbBWwOT8czqTyuUk5clOE5NcCk6AhZ00Mbt4eA&oe=6551DF19" width="90" height="30"/>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
            <a className="navbar-item">
            SOMBREROS
            </a>
    
            <a className="navbar-item">
            ACCESORIOS
            </a>

            <a className="navbar-item">
            CONTACTO
            </a>
        </div>
    </div>
        <CardWidget />
    </nav>
)

}

export default NavBar;
