import React, {Component} from 'react'
import {InformacionPersona} from '../ComponentesFuncionales'
import Api from 'axios'

class Registro extends Component{

    constructor(props){
        super(props);
        this.state = {
            registros:[],
            nombre:"",
            correo:""
        }

        this.llenarCampo = this.llenarCampo.bind(this);
        this.nuevoItem = this.nuevoItem.bind(this);
    }

        
    llenarCampo = (e) =>{
        console.log(e.target.id)
        let id = e.target.id;
        if (id == "correo"){
            this.setState({correo:e.target.value});
        }else{
            this.setState({nombre:e.target.value});
        }
    }

    nuevoItem = (e) =>{
        e.preventDefault();
        let item ={
            correo: this.state.correo,
            nombre: this.state.nombre,
            imagen: ""
        }
        this.setState({registros: this.state.registros.push(item)})
    }

    async consumirApi(){
        var respuesta =await Api.get("https://pokeapi.co/api/v2/pokemon");
        console.log(respuesta.data);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="card formulario col">
                        <button onClick={this.consumirApi} className="btn btn-primary"> consumir Api</button>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email: </label>
                                <input type="email" onChange={this.llenarCampo} class="form-control" id="correo" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Nombre: </label>
                                <input type="text" onChange={this.llenarCampo} class="form-control" id="nombre" />
                            </div>
                            <button type="submit" onClick={this.nuevoItem} class="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                    <div className="col">
                        {
                            this.state.registros.map((item, i) => {
                                return <InformacionPersona nombre={item.nombre} correo={item.correo} />
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        
        );
    }
}

export default Registro;