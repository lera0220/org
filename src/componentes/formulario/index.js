import React, { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor]=useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        console.log("Manejar nuevo equipo")
        
        let datosAEnviar = {
            titulo,
            colorPrimario:color
        }
        crearEquipo(datosAEnviar)
        console.log(datosAEnviar)
    }

    return <section className="formulario">
         
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            
            <Boton
                texto="Crear"
            />
            
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para registrar el equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo del equipo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Seleccione el color en hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton
                texto="Registrar Equipo"
            />
            </form>
    </section>
}

export default Formulario