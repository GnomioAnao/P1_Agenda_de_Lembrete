import React, { Component } from 'react'

export class LembreteEntrada extends Component {
   state = {
    texto: "" //lembrete que o usuário digitou 
  }

  escreveLembrete = (escreveu) => {
    this.setState({ texto: escreveu.target.value })
  }

   adicionaLembrete = () => {
    if (this.state.texto.trim() == "") return
    this.props.onAdicionar(this.state.texto) 
    this.setState({ texto: "" })            
  }

  render() {
    return (
        <div>
          <input style={{textAlign: 'center' , fontSize: '23px'}}
            type="text"
            className="form-control"
            placeholder="Digite um lembrete..."
            value={this.state.texto}
            icones={this.props.icones}
            onChange={this.escreveLembrete}
          >
          </input>
            <button style={{fontSize: '20px'}} 
            onClick={this.adicionaLembrete}
            className="btn btn-outline-primary w-100 mt-3">
            Adicionar 
            </button>
        </div>
    )
  }
}

export default LembreteEntrada