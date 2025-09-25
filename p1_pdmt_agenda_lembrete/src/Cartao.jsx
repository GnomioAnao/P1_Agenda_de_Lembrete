const Cartao = (props) => {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        {props.texto || props.children}
      </div>
    </div>
  )
}

export default Cartao