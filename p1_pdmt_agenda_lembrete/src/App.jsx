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

  // icones = {
  //   'Lixeira': 'trash',
  //   'Coracao': 'heart'
  // }

  adicionarLembrete = (novoLembrete) => {
    this.setState({
      lembrete: [...this.state.lembrete, novoLembrete]
    })
  }

  render() {
    return (
      <div className='d-flex align-items-center mt-4 justify-content-center min-vh-100 '>
        <div className="col-sm-12 col-lg-6">
          <Cartao>
            <div className="row">
              <div 
                style={{textAlign: 'center' , fontSize: '23px'}}
                className="col-9 col-md-9 mx-auto">
              {this.state.lembrete.map((textolembrete, indice) => (
                <Cartao key={indice}>
                  <div className="row align-items-center">
                    <div className="col text-center">{textolembrete}</div>
                    <div className="col-auto">
                      <CoracaoVazio tamanho='1x'/>
                      <Lixo tamanho='1x'/>
                    </div>
                  </div>
              </Cartao>
              ))}
              <Cartao>
                <LembreteEntrada onAdicionar={this.adicionarLembrete} />
              </Cartao>
              </div>
            </div>
          </Cartao>
        </div>
      </div>
    )
  }
}