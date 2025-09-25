export default function ListaFavoritos({ mostrarFavoritos, onFiltro }) {
  return (
    <div className="mb-3 text-center">
      <button 
        className={`btn ${!mostrarFavoritos ? 'btn-primary' : 'btn-outline-primary'} me-2`}
        onClick={() => onFiltro(false)}
      >
        Todos
      </button>
      <button 
        className={`btn ${mostrarFavoritos ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => onFiltro(true)}
      >
        Favoritos
      </button>
    </div>
  )
}