import React, { useState } from 'react'

function Formulario() {
    const [campos, setCampos]=useState({
        usuario:'',
        contrasenia:''
    })

    const procesarLogin=(event)=>{
        event.preventDefault();
        console.log("Se envia el formulario...")
    }

  return (
    <form className="form" onSubmit={procesarLogin}>
        <input type="text" placeholder="Usuario"
        onChange={(e)=>setCampos({...campos,usuario:e.target.value})} />
        <input type="password" placeholder="Contraseña"
         onChange={(e)=>setCampos({...campos,contrasenia:e.target.value})} />
        <button type="submit" >Ingresar</button>
    </form>
  )
}

export default Formulario