import React from "react"
import Cartao from "./Cartao"
import LembreteEntrada from "./LembreteEntrada"
import Lixo from "./Lixo"
import CoracaoCheio from "./CoracaoCheio"
import CoracaoVazio from "./CoracaoVazio"
import LembreteLista from "./LembreteLista"

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

  render(){
    return (
    <Cartao>
      <LembreteLista>
        <div className="row">
          <div className="col-12">
            <Cartao>
                <p>Preparar aula de programação</p>
              </Cartao>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
              <Cartao>
                <p>Fazer feira</p>
              </Cartao>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
              <Cartao>
                <p>Preparar marmitas</p>
              </Cartao>
          </div>
        </div>
      </LembreteLista>
    </Cartao>
    )
  }
}