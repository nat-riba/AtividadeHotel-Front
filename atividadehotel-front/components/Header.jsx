import logo from "./../src/assets/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header w-100 px-3 py-2">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={logo} alt="logohotel" /> 
        </Link>
        <div className="d-flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/quartos">Quartos</Link>
          <Link to="/reserva">Reservas</Link>
          <Link to="/clientes">Clientes</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;