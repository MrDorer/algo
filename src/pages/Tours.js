import React, {useEffect, useState} from 'react'
import {dbFirebase} from '../db/firebaseConfig'
import {collection, addDoc, getDocs, getDoc, deleteDoc, doc, updateDoc} from "@firebase/firestore"

function Tours() {
    const [nombre,setNombre] = useState("");
    const [descripcion,setDescripcion] = useState("");
    const [precio,setPrecio] = useState(0);

    const ToursCollection = collection(dbFirebase,'tours');
    const [listaTours,setListaTours] = useState([])
    const [edicion, setEdicion] = useState(false)
    const [elId,setId] = useState('')

    const crearTour = async(e) => {
        e.preventDefault()
    if(!edicion){
      await addDoc(ToursCollection,{Nombre:nombre,Descripcion:descripcion,Precio:Number(precio)})
      console.log('El tour ha sido agregado correctamente')
    } else{
      const TourDoc = doc(dbFirebase,"tours",elId)
      await updateDoc(TourDoc,{Nombre:nombre,Descripcion:descripcion,Precio:Number(precio)})
    }
    }
    useEffect(() => {
      obtenerTours()
    },)
    
      const obtenerTours = async() =>{
        const datos = await getDocs(ToursCollection)
        setListaTours(datos.docs.map(
          (registro) => ({
            ...registro.data(),id:registro.id
          })))
      }
      const eliminarTour = async(id) =>{
        const tourDoc = doc(dbFirebase,"tours",id)
        await deleteDoc(tourDoc)
      }

      const actualizar = async(id) =>{
        const tourDoc = doc(dbFirebase, "tours", id);
        const datos = await getDoc(tourDoc);
        const elTour = datos.data();
        console.log(elTour)
        setNombre(elTour.Nombre)
        setDescripcion(elTour.Descripcion)
        setPrecio(elTour.precio)
        setEdicion(true)
        setId(id)
      }
    const cancelar = () => {
      setEdicion(false);
      setNombre('')
      setDescripcion('')
      setPrecio('')
    }

  return (
    <>
      <div className="m-4"></div>
        <form onSubmit={crearTour}>
          <div >
            <input type='text' placeholder='Nombre del tour: ' onChange={(e) => {setNombre(e.target.value)}} value={nombre} className="border-2 rounded-md border-slate-700 mr-1"/>
            <input type='text' placeholder='Descripcion del tour: ' onChange={(e) => {setDescripcion(e.target.value)}} value={descripcion} className="border-2 rounded-md border-slate-700 "/>
            <input type='text' placeholder='Precio del tour: ' onChange={(e) => {setPrecio(e.target.value)}} value={precio} className="w-20 border-2 rounded-md border-slate-700 m-1"/>
          </div>
            {
              edicion ? (
                <>
                  <button type="submit">Editar</button>
                  <button onClick={cancelar}>cancelar</button>
                </>
              ) : (
                <button type="submit" className="block font-normal border-2 rounded-md px-5 border-[#0066b2] text-[#0066b2] hover:text-[#007FFF] hover:border-[#007FFF] hover:bg-[#007FFF] hover:bg-opacity-20 transition-all ease-in-out focus:ring focus:ring-[#00FFFF] focus:text-[#00FFFF]">Enviar</button>
              )

            }

            
        </form>

        {listaTours.map((elTour) => {
            return (
              <div key={elTour.id} >
                <div className="bg-zinc-700   w-52 pt-5 mt-5 rounded-md min-w-40 text-white p-4">
                <p>{elTour.Nombre}</p>
                <p>{elTour.Descripcion}</p>
                <p>{elTour.Precio}</p>
                <div className='block'>
                  <button onClick={() => eliminarTour(elTour.id)} className=" font-normal border-2 border-[#C70039] text-[#C70039] rounded-md px-2 hover:text-[#D80032] hover:border-[#D80032] hover:bg-[#D80032] hover:bg-opacity-20 transition-all ease-in-out focus:ring focus:ring-[#ff0000] m-1">Eliminar</button>
                  <button onClick={() => actualizar(elTour.id)} className="font-normal border-2 rounded-md px-5 border-[#14C38E] text-[#14C38E] hover:text-[#00ff00] hover:border-[#00ff00] hover:bg-[#00ff00] hover:bg-opacity-20 transition-all ease-in-out focus:ring focus:ring-[#00FFAB] m-1">Editar</button>
                </div>
                </div>
              </div>
               
    );
  })}
    
    </>
  )
}

export default Tours