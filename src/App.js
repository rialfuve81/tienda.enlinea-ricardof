
import Principal from "./componentes/Principal/Principal";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CarroCompras from "./componentes/CarroCompras/CarroCompras";
import TiendaProvider from "./componentes/Context/TiendaContext";

function App() {
    return (
      <TiendaProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Principal/>}/>
            <Route path='/compra' element={<CarroCompras />}/>
          </Routes>
        </BrowserRouter>
      </TiendaProvider>
    )
}

export default App;
