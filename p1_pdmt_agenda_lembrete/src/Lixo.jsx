const Lixo = ({onClick, tamanho}) =>{
    return (
        <i className={`fa-solid fa-trash fa-${tamanho}`}
            onClick={onClick}
            style={{cursor: 'pointer'}}
        ></i>
    )
}

export default Lixo