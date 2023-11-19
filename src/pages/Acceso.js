import React, { useState,useEffect } from 'react'


function Acceso() {
    const [datos,setDatos]=useState({
        usuario: "",
        contrasena: "",
        tipo_usuario: "",
        autenticado: false
    })
    
    useEffect(() => {
        console.log(datos.autenticado); // This will show the updated value
      }, [datos.autenticado]);

    const enviarFormulario=(e)=>{
        e.preventDefault();
        console.log("Enviando formularios")
        //console.log(datos.usuario)
        //console.log(datos.contrasena)

        //Almacen local
        
        localStorage.setItem('Usuario',datos.usuario);
        localStorage.setItem('Status',true);
        setDatos({...datos,autenticado:true})
        
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
