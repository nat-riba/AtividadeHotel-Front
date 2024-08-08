import logo from "./../assets/banner-home";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header w-100 px-3 py-2">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={logo} alt="BannerHome" /> 
        </Link>
        <div className="d-flex gap-5">
          <Link to="/clientes">Clientes</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
