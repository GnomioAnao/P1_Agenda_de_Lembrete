import React, { Component } from 'react'

export class LembreteEntrada extends Component {
   state = {
    texto: "" //lembrete que o usuário digitou 
  }

  escreveLembrete = (escreveu) => {
    this.setState({ texto: escreveu.target.value });
  }

   adicionaLembrete = () => {
    if (this.state.texto.trim() == "") return
    this.props.onAdicionar(this.state.texto) 
    this.setState({ texto: "" })            
  }

  render() {
    return (
        <div>
        <div>
          <input 
            type="text"
            className="form-control"
            placeholder="Digite um lembrete..."
            value={this.state.texto}
            onChange={this.escreveLembrete}
          />
            <button 
            onClick={this.adicionaLembrete}
            className="btn btn-outline-primary w-100 mt-3">
            Adicionar 
            </button>
        </div>
      </div>
    )
  }
}

export default LembreteEntrada