import React from 'react';
import './Sass/main.scss';
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Main from './Componentes/Paginas/Main'


const miFucnion = (valor) => {
  return valor*2
}
 var  fecha = new Date()
 var formato = fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear()


function App() {
  return (
    <div className="App">
      {/* <Comentario nombre="juan"/>
      <Comentario nombre="daniel"/>
      <Inicio multiplicar={miFucnion}/> */}
      <Header nombre="El negro del swimg" fecha={formato} />
      <Main />|
      <Footer />
    </div>
  );
}

export default App;
