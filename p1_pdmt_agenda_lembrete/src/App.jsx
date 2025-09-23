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
    'Lixeira': 'trash',
    'Coracao': 'heart'
  }

  adicionarLembrete = (novoLembrete) => {
    this.setState({
      lembrete: [...this.state.lembrete, novoLembrete]
    })
  }

  render() {
    return (
      <div className='align-items-center mt-4 justify-content-center row min-vh-100 '>
        <div  
        className='col-sm-12 col-lg-6'>
          <Cartao>
            <LembreteLista>
              <div className="row">
                <div 
                style={{justifyContent: 'flex-end'}}
                className="col-9 mx-auto">
                  <Cartao>
                    <p style={{ textAlign: 'center', fontSize: '23px' }}>
                      Preparar aula de programação <CoracaoCheio tamanho="1x"/> <Lixo tamanho="1x"/>
                    </p>
                  </Cartao>
                </div>
              </div>
              <div className="row">
                <div className="col-9 mx-auto">
                  <Cartao>
                    <p style={{ textAlign: 'center', fontSize: '23px' }}>
                      Fazer feira <CoracaoVazio tamanho="1x"/> <Lixo tamanho="1x"/> 
                    </p>
                  </Cartao>
                </div>
              </div>
              <div className="row">
                <div className="col-9 mx-auto">
                  <Cartao>
                    <p style={{ textAlign: 'center' , fontSize: '23px' }}>
                      Preparar marmitas <CoracaoVazio tamanho="1x"/> <Lixo tamanho="1x"/>
                    </p>
                  </Cartao>
                </div>
              </div>
            </LembreteLista>
            <button
              style={{fontSize: '23px'}} 
              className='btn btn-outline-primary w-100 mt-3'>
              Adicionar
            </button>
          </Cartao>
        </div>
      </div>
    )
  }
}