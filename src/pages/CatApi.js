import React, { useState, useEffect } from "react";

function CocktailRandomStripped() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    obtenerCocktail();
  },[]);

  const obtenerCocktail = async () => {
    try {
      const resultado = await fetch('https://api.thecatapi.com/v1/images/search?limit=12');
      const data = await resultado.json();
        setDatos(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-wrap">
  <h3 className="w-full text-center text-white m-6 text-2xl">Gatos</h3>
  {datos.map((gato, index) => (
    <div key={index} className="w-[18%] h-[200px] border-2 border-zinc-400 relative m-auto my-2">
      {/* Use 'relative' to create a stacking context for the container */}
      <img
        src={gato.url}
        className="object-cover w-full h-full" // Use 'object-contain' to fit the image inside the container
      />
    </div>
  ))}
</div>

  );
}

export default CocktailRandomStripped;
