import "./Navbar.css";
import { Link} from "react-router-dom";
import TotalProductos from "../CarroCompras/TotalProductos";

const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link to={"/"}>
          <h1 className='navbar-logo'>VENTA DE LIBROS RICARDO FUENTES</h1>
        </Link>
        <Link className='seeCarrito' to={"/compra"}>
          🛒
          <TotalProductos/>
        </Link>
      </nav>
    </div>
  )
}
export default Navbar