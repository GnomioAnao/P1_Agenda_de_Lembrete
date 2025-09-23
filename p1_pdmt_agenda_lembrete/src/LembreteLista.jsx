import React from 'react'

export default function LembreteLista({ children }) {
    return (
        <div className='{estilos.principal}'>{children}</div>
    )
}
const estilos = {
    principal: 'container border rounded my-3 p-3'
    
}
