import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Actividades() {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/listaActividades')
      .then((respuesta) => {
        setActividades(respuesta.data.categorias);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {actividades ? (
        actividades.map((actividad) => (
          <div key={actividad.key} className='bg-zinc-500 m-2 w-56 text-white text-center rounded-md'>
            <h2 className="font-semibold">{actividad.nombre}</h2>
            <img src={actividad.img} alt={actividad.nombre} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
} 

export default Actividades;
