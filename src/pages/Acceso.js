import React, { useState } from 'react'


function Acceso() {
    const [datos,setDatos]=useState({
        usuario: "",
        contrasena: "",
        tipo_usuario: "",
        autenticado: false
    })

    const enviarFormulario=(e)=>{
        e.preventDefault();
        console.log("Enviando formularios")
        //console.log(datos.usuario)
        //console.log(datos.contrasena)

        //Almacen local
        
        localStorage.setItem('Usuario',datos.usuario);
        setDatos({...datos,autenticado:true})
        localStorage.setItem('Status',datos.autenticado);
    }

    const cerrarSesion=()=>{
        localStorage.clear();
        setDatos({...datos,autenticado:false})
    }
  return (
    !datos.autenticado ? (
        < >
        <form onSubmit={enviarFormulario}>
            <input type="text" value={datos.usuario} placeholder="Usuario"
            onChange={(e)=>{setDatos({...datos,usuario:e.target.value})}} />

            <input type="text" value={datos.contrasena} placeholder="Contraseña"
            onChange={(e)=>{setDatos({...datos,contrasena:e.target.value})}} />
            <button type="submit">Ingresar</button>
        </form>
        
        </>
    ) : (
    <>
        <button onClick={cerrarSesion}>Salir</button>
    </>
  )
  )

}

export default Acceso
