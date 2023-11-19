import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Perenual() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const res = await axios.get('https://perenual.com/api/species-list?key=sk-yMf16532875ae29172569');
      const resdata = res.data.data;
      setDatos(resdata);
      console.log(resdata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Plantas</h1>
      {datos.map((planta, index) => (
        <div key={index}>
          <h2>{planta.common_name}</h2>
          <h3>{planta.scientific_name}</h3>
          <h6>{planta.watering}</h6>

          {planta.default_image && (
            <img src={planta.default_image.medium_url} alt={planta.common_name} />
            
          )}
        </div>
      ))}
    </div>
  );
}

export default Perenual;
