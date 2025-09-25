import React from "react"
import Cartao from "./Cartao"
import LembreteEntrada from "./LembreteEntrada"
import Lixo from "./Lixo"
import Favoritar from "./Favoritar"
import ListaFavoritos from "./ListarFavoritos"

export default class App extends React.Component {

  state = {
    lembrete: [], //caixa onde vai ficar o que escrevemos
    mostrarFavoritos: false
  }

  adicionarLembrete = (texto) => {
    const novoLembrete = { texto, favorito: false }
    this.setState({
      lembrete: [...this.state.lembrete, novoLembrete]
    })
  }

  deleteLembrete = (indice) => {
    const novosLembretes = this.state.lembrete.filter((_, i) => i !== indice)
    this.setState({ lembrete: novosLembretes })
  }

  alternarFavorito = (indice) => {
    const lembretes = [...this.state.lembrete]
    lembretes[indice].favorito = !lembretes[indice].favorito
    this.setState({ lembrete: lembretes })
  }

  setMostrarFavoritos = (valor) => {
    this.setState({ mostrarFavoritos: valor })
  }

  render() {
    return (
      <div className='d-flex align-items-center justify-content-center min-vh-100 '
        style={{backgroundColor: '#FFFDD0'}}>
        <div
          className="border col-sm-12 col-lg-6 rounded-lg p-4"
          style={{backgroundColor: '#7b2cbf', borderRadius: 15, boxShadow: '4px 7px 10px rgba(138, 4, 234, 0.83)'}}>
          <Cartao style={{backgroundColor: '#493327'}}>
            <div className="row">
              <div
                style={{ textAlign: 'center', fontSize: '23px', fontWeight: 'bold'}}
                className="col-9 col-md-9 mx-auto mb-4">
                <ListaFavoritos
                  mostrarFavoritos={this.state.mostrarFavoritos}
                  onFiltro={this.setMostrarFavoritos}
                />
                {this.state.lembrete
                  .filter(l => !this.state.mostrarFavoritos || l.favorito)
                  .map((textoLembrete, indice) => (
                    <Cartao key={indice}>
                      <div className="row align-items-center">
                        <div className="col text-center">{textoLembrete.texto}</div>
                        <div className="col-auto">
                          <Favoritar
                            favorito={textoLembrete.favorito}
                            onAlternar={() => this.alternarFavorito(indice)}
                          />
                          <Lixo tamanho='1x' onClick={() => this.deleteLembrete(indice)} />
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