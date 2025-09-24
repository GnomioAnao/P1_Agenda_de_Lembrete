import React from 'react'
import CoracaoCheio from './CoracaoCheio'
import CoracaoVazio from './CoracaoVazio'

export default function Favoritar() {

  const [favorito, setFavorito] = React.useState(false)

  const toggleFavorito = () => {
    setFavorito(!favorito)
  }

  return (
    <button onClick={toggleFavorito} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
        {favorito ? ( <CoracaoCheio tamanho='1x' />) : (<CoracaoVazio tamanho='1x' />)}
    </button>
  )
}
