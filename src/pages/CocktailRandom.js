import React, { useState,useEffect } from "react";
import Swal from "sweetalert2";

function CocktailRandom(){
    const [datos,setDatos]=useState([]);
    const [obteniendoDatos,setObteniendoDatos]=useState(false)

    useEffect(()=>{
        obtenerCocktail();
    },[]);

    const obtenerCocktail=async ()=>{
        setObteniendoDatos(true);
        try{
            const resultado = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            if(!resultado.ok){
                console.log(resultado);
                return Swal.fire({
                    title: 'Error',
                    icon: 'Error',
                    text: 'Ha ocurrido un error'
                })
            }
            const cocktails = await resultado.json();
            console.log([cocktails.drinks])
            setDatos(cocktails.drinks)
        }catch(error){
            console.log(error); 
        }finally{
            setObteniendoDatos(false);
        }
    }
    return(
        (obteniendoDatos)?
        (<>
            <h3>Cargando...</h3>
        </>):
            (
                <>
                    <h3>Cocktail conseguido</h3>

                    {datos.map((elcocktail)=>
                    <>
                        <h4>{elcocktail.strDrink}</h4>
                        <h2>categoria: {elcocktail.strCategory}</h2>
                        <img src={elcocktail.strDrinkThumb} />
                        <ul>
                            <h2>Ingredientes</h2>
                            <li>{elcocktail.strIngredient1}</li>
                            <li>{elcocktail.strIngredient2}</li>
                            <li>{elcocktail.strIngredient3}</li>
                            <li>{elcocktail.strIngredient4}</li>
                        </ul>
                        </>
                    )}

                </>
            )
    )
    
}

export default CocktailRandom