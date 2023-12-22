import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const tiendaContext = createContext();

const TiendaProvider = ({children}) => {

  const [producto, setProducto] = useState([{
    "id": 1,
    "name": "On The Road",
    "author": "Jack Kerouac",
    "price": 10000,
    "img": "https://imgs.search.brave.com/PG6VRGVRdd1tat50p4zbkf4eZejQVmLSXnyikv6sZfQ/rs:fit:346:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/eGVESlRoNnNFWDZk/VXhhcjJnTkNnSGFL/SiZwaWQ9QXBp",
    "quanty": 1
  },
    {
      "id": 2,
      "name": "The Subterraneans",
      "author": "Jack Kerouac",
      "price": 20000,
      "img": "https://imgs.search.brave.com/PG6VRGVRdd1tat50p4zbkf4eZejQVmLSXnyikv6sZfQ/rs:fit:346:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/eGVESlRoNnNFWDZk/VXhhcjJnTkNnSGFL/SiZwaWQ9QXBp",
      "quanty": 1
    },

    {
      "id": 3,
      "name": "Indian Journals",
      "author": "Allen Ginsberg",
      "price": 27000,
      "img": "https://imgs.search.brave.com/PG6VRGVRdd1tat50p4zbkf4eZejQVmLSXnyikv6sZfQ/rs:fit:346:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/eGVESlRoNnNFWDZk/VXhhcjJnTkNnSGFL/SiZwaWQ9QXBp",
      "quanty": 1
    },
    {
      "id": 4,
      "name": "Iron Horse",
      "author": "Allen Ginsberg",
      "price": 18000,
      "img": "https://imgs.search.brave.com/PG6VRGVRdd1tat50p4zbkf4eZejQVmLSXnyikv6sZfQ/rs:fit:346:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/eGVESlRoNnNFWDZk/VXhhcjJnTkNnSGFL/SiZwaWQ9QXBp",
      "quanty": 1
    }]);
  const [carro, setCarro] = useState([]);
  //console.log("VALIDANDO" + producto);

  return <tiendaContext.Provider value={{producto, carro, setCarro}}>{children}</tiendaContext.Provider>

};

export default TiendaProvider;