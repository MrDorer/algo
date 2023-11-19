import React, { useState, useEffect } from "react";

function CatApi2() {
    const [datos,setDatos] = useState([])

    const getGatos = async() => {
        const resFetch = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const data = await resFetch.json();
        setDatos(data)
        console.log(data)
    }

    useEffect(() => {
        getGatos()
    },[])

  return (
    <div className='flex flex-wrap'>
        {datos.map((gato, index)=>(
            <div key={index} className="w-[18%] h-[200px] border-2 border-zinc-400 relative m-auto my-2 rounded-md">
                <img src={gato.url} className="object-cover w-full h-full"></img>
            </div>
        ))}
    </div>
  )
}

export default CatApi2