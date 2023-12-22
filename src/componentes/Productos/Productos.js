import { useContext } from "react";
import { tiendaContext } from "../Context/TiendaContext";
import "./Productos.css";

const Productos = () => {
  // con el contexto traemos todos los productos
  const { producto, carro, setCarro } = useContext(tiendaContext);
  const comprarProducto = (product) => {
    //buscar si ya existe el producto
    const productoRepetido = carro.find((item) => item.id === product.id);
    if (productoRepetido) {
      // recorremos el carro con operador ternario
      setCarro(carro.map((item)=> item.id === product.id ? {...product, quanty: productoRepetido.quanty + 1 }: item))
    }else {
      setCarro([...carro, product]);
    }
  };
  // se mapean todos los productos
  return producto.map((product)=> {
    return(
      <div className="card" key={product.id}>
        <img src={product.img} alt='img-product-card'/>
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        <button onClick={()=> comprarProducto(product)}>Comprar</button>
      </div>
    )
  })
};

export default Productos;