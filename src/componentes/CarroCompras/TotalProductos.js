import { useContext } from "react";
import { tiendaContext } from "../Context/TiendaContext";
const TotalProductos = () => {
  const { carro, setCarro } = useContext(tiendaContext);
  const cantidadProductos = carro.reduce((acc, elemento)=> acc + elemento.quanty, 0);
  return <span className="cart-items-total">{cantidadProductos}</span>
};

export default TotalProductos;