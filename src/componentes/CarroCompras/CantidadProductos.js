
const CantidadProductos = ({cantidad}) => {
  return (
    <>
      <p className="counter-button">-</p>
      <p>{cantidad}</p>
      <p className="counter-button">+</p>
    </>
  );
};
export default CantidadProductos;