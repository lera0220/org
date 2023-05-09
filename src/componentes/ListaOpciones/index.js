import "./ListaOpciones.css"
import React from "react"
const ListaOpciones=(props)=>{
    //map ->nombrearreglo.map((equipo, index)=>{
   // return <option><option/>})
   const manejarCambio = (e) => {
    console.log("cambio", e.target.value)
    props.actualizarEquipo(e.target.value)
}
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map((equipo,index)=> <option key={index} value={equipo}>{equipo}</option>)}  
        </select>
    </div>
}
export default ListaOpciones;