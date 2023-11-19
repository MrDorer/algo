import React, { useState, useEffect } from "react";
import DriveUploader from "../components/google";

function CocktailRandomStripped() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    obtenerCocktail();
  },[]);

  const obtenerCocktail = async () => {
    try {
      const resultado = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await resultado.json();
        setDatos(data.drinks);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      
      <h3>Cocktail conseguido</h3>
      {datos.map((elcocktail, index) => (
        <div key={index}>
          <h4>{elcocktail.strDrink}</h4>
          <h2>Categoría: {elcocktail.strCategory}</h2>
          <img src={elcocktail.strDrinkThumb} alt={elcocktail.strDrink} />
          <ul>
            <h2>Ingredientes</h2>
            <li>{elcocktail.strIngredient1}</li>
            <li>{elcocktail.strIngredient2}</li>
            <li>{elcocktail.strIngredient3}</li>
            <li>{elcocktail.strIngredient4}</li>
          </ul>
        </div>
      ))}


        <div className="w-40 h-40 bg-white"><DriveUploader/></div>
    </div>






  );
}

export default CocktailRandomStripped;
