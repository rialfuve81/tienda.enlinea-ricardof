import Navbar from "../Navbar/Navbar";
import Productos from "../Productos/Productos";
const Principal = () => {
  return (
    <>
      <Navbar/>
      <div className="product-card-container">
        <Productos/>
      </div>
    </>
  );
};

export default Principal;