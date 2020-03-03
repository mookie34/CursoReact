import React from 'react'

export function Comentario(props){
  return (
    <div>
      <Foto nombre_imagen="Mi fotico"/>
      <label>Nombre del usuario:{props.nombre}</label>
      <button> Enviar </button>
    </div>
  );
}

export const Foto = (props) => {
  return (
    <div className="card">
      <div className="prj-imagen">
        <img alt=""></img>
      </div>
      <span>{props.nombre_imagen}</span>
    </div>
  )
}

export const InformacionPersona = (props) => {
 return(
   <div className="">
     <label>Nombre {props.nombre} </label>
     <label>Correo {props.correo} </label>
     <img alt="" src={props.imagen} ></img>
   </div>
 )
}

export const FormularioUno = (props) => {
  return(
    <div className="card formulario1">
      <label>{props.nombreLabel}</label>
      <button type="submit" onClick={props.consumirApi} class="btn btn-primary">{props.nombreInput}</button>
    </div>
  )
}

export const FormularioDos = (props)=> {
  return(
    <div className="card formulario2">
      <div class="alert alert-success" role="alert">
      <label>{props.mensaje}</label> 
      <label>{props.MensajeAlert}</label>
    </div>
  </div>
  )
}