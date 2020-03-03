import React,{Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav class="navbar navbar-dark bg-primary">
                <a class="navbar-brand" href="#">{this.props.nombre} {this.props.fecha} </a>
                <a href="/Login" className="item-menu">Iniciar sesión</a>
                <a href="/Registro" className="item-menu">Registrar</a>
                <a href="/Pokemon" className="item-menu">Pokemon</a>
            </nav>
        )
    }
}

export default Header;