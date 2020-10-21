import React from 'react'

function Personagens({personagens}) {
    return <div>
        {personagens.map((personagem) => (
       <p key={personagem.id} > {personagem.nome}</p>
        ))}
    </div>
}

export default Personagens