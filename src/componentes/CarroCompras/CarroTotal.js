import { useContext } from "react";
import { tiendaContext } from "../Context/TiendaContext";
const CarroTotal = () => {
  const { carro } = useContext(tiendaContext);
  const total = carro.reduce((acum, elem)=> acum + elem.price * elem.quanty,0 )
  return <div className="cartTotal">
          <h3>Total a Pagar: ${total}</h3>
         </div>;
};
export default CarroTotal;