import React from 'react'

function Paises ({paises}) {
    return paises.map ((pais, index) => (
        <h1 key={index}>{pais.nome}</h1>
    ))
}

export default Paises