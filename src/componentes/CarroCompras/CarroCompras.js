import { useContext } from "react";
import { tiendaContext } from "../Context/TiendaContext";
import CarroProductos from "./CarroProductos";
import CarroTotal from "./CarroTotal";
import "./CarroProductos.css";
import Navbar from "../Navbar/Navbar";
const CarroCompras = () => {
  //logica del carro de productos
  const { carro } = useContext(tiendaContext);
  return (
    <>
      <Navbar/>
      {carro.length > 0 ? (
        <>
          <CarroProductos/>
          <CarroTotal/>
        </>
      ) : (
        <h2 className="cart-message-center">El carro esta vacio</h2>
      ) }
    </>
  );
};

export default CarroCompras;