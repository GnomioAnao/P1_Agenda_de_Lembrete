import React from "react"
import Cartao from "./Cartao"
import LembreteEntrada from "./LembreteEntrada"
import Lixo from "./Lixo"
import CoracaoCheio from "./CoracaoCheio"
import CoracaoVazio from "./CoracaoVazio"

export default class App extends React.Component {

      state = {
      lembrete: [] //caixa onde vai ficar o que escrevemos 
    } 

//deleteLembrete: nome de possivel função para deletar lembrete salvo

    icones = {
      'Lixeira' : 'trash',
      'Coracao' : 'heart'
    }

  adicionarLembrete = (novoLembrete) => {
    this.setState({
      lembrete: [...this.state.lembrete, novoLembrete]
    })
  }

  render() {
    return (
      <div className="container border border-5 rounded my-7 p-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-xxl-10">
            <Cartao>
              <LembreteEntrada onAdicionar={this.adicionarLembrete} />
            </Cartao>
            {this.state.lembrete.map((textolembrete, indice) => (
              <Cartao key={indice} texto={textolembrete} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}