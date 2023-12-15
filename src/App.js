import React, {Component} from "react";

import './style.css'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            numero:0,
            txtBtn: 'VAI'
        }
        this.timer = null; //Recebe a hora que vai aparecer no cronometro
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){

        let state = this.state;

        if(this.timer !== null){ //função para pausar o cronometro
            clearInterval(this.timer);
            this.timer = null;
            state.txtBtn = 'VAI'
        }else{ //função para iniciar o cronometro/despausar
            this.timer = setInterval(()=>{
                let copState = this.state;
                copState.numero += 0.1;
                this.setState(copState);
            },100)
            state.txtBtn = 'PAUSAR'
        }

        this.setState(state);

    }

    limpar(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }

        let copState = this.state;
        copState.numero = 0;
        copState.txtBtn = 'VAI';
        this.setState(copState);
    }

    render(){
        return(
            <div className="container">
                <img src={require('./assets/cronometro.png')} className="img"/>
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                
                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.txtBtn}</a>
                    <a className="botao" onClick={this.limpar}>LIMPAR</a>
                </div>

            </div>
        );
    }
}

export default App;