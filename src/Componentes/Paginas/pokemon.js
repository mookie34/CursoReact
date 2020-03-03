import React, {Component} from 'react'
import Api from 'axios'
import {FormularioUno, FormularioDos} from '../ComponentesFuncionales'


class Pokemon extends Component{

    constructor(props){
        super(props);
        this.state = {
            registros:[],
            mensaje:""
        }

        this.consumirApi = this.consumirApi.bind(this);
    }

    async consumirApi(){
        try{
        var respuesta =await Api.get("https://pokeapi.co/api/v2/pokemon");
        this.setState({registros: respuesta.data.results})
        this.setState({mensaje:"existoso"});
        console.log(respuesta.data);
        }catch(error){
            console.error(error);
            this.setState({mensaje:"error"});
        }
    }

    render(){
        return(
            <div>
            <div className="col">
                {
            <FormularioUno nombreLabel="Consumir API" nombreInput="Consultar pokemones" consumirApi={this.consumirApi}/>
                }
            </div>
            <div className="col">
                {
            <FormularioDos mensaje={this.state.mensaje}/>
                }
            </div>
            <div>
            {
                this.state.registros.map((item, i) => {
                return <FormularioDos MensajeAlert={item.name} />
                })
            }
            </div>

            </div>
        );
    }
}

export default Pokemon;