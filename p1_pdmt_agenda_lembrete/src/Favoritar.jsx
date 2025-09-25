import React from 'react'
import CoracaoCheio from './CoracaoCheio'
import CoracaoVazio from './CoracaoVazio'

export default function Favoritar({ favorito, onAlternar }) {
  return (
    <button 
      onClick={onAlternar} 
      style={{background: 'none', border: 'none', cursor: 'pointer'}}
    >
      {favorito ?  <CoracaoCheio tamanho='1x' />  : <CoracaoVazio tamanho='1x' />}
    </button>
  )
}