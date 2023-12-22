import { useContext } from "react";
import { tiendaContext } from "../Context/TiendaContext";
import CantidadProductos from "./CantidadProductos";
const CarroProductos = () => {
  const { carro, setCarro } = useContext(tiendaContext);
  const  borrarProducto = (id) => {
    const idProd = carro.find((elemento) => elemento.id === id);
    const nuevoCarro = carro.filter((elemento) => {
      return elemento !== idProd;
    });
    setCarro(nuevoCarro);
  };

  return carro.map((product)=>{
    return (
      <div className='cartContent' key={product.id}>
        <img src={product.img} alt='product-card' />
        <h3 className='name'>{product.name}</h3>
        <CantidadProductos cantidad={product.quanty} />
        <h4 className='price'>${product.price * product.quanty}</h4>
        <h3 className='cart-delete-button' onClick={() => borrarProducto(product.id)}>❌</h3>
      </div>
    )
  })
}
export default CarroProductos;
