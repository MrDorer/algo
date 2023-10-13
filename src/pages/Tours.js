import React, {useEffect, useState} from 'react'
import {dbFirebase} from '../db/firebaseConfig'
import {collection, addDoc} from "@firebase/firestore"

function Tours() {
    const [nombre,setNombre] = useState("");
    const [descripcion,setDescripcion] = useState("");
    const [precio,setPrecio] = useState(0);
    const ToursCollection = collection(dbFirebase,'tours');
    const [listaTours,setListaTours] = useState([])

    const crearTour = async() => {
        await addDoc(ToursCollection,{Nombre:nombre,Descripcion:descripcion,Precio:precio})
        console.log('El tour ha sido agregado correctamente')
    }   

    useEffect(() => {
      obtenerTours
    },[])
    
      const obtenerTours = async() =>{
        const datos = await getDocs(ToursCollection)
        setListaTours(datos.docs.map(
          (registro) => ({
            ...registro.data(),id:registro.id
          })))
      }
    

  return (
    <>
        {listaTours.map(eltour => {
          <>
            <p>{eltour.Nombre}</p>
            <p>{eltour.Descripcion}</p>
          </>
        })}
    
        <form onSubmit={crearTour}>
            <input type='text' placeholder='Nombre del tour: ' onChange={(e) => {setNombre(e.target.value)}}/>
            <input type='text' placeholder='Descripcion del tour: ' onChange={(e) => {setDescripcion(e.target.value)}}/>
            <input type='text' placeholder='Precio del tour: ' onChange={(e) => {setPrecio(e.target.value)}}/>
            <button type="submit">enviar</button>
        </form>
    </>
  )
}

export default Tours