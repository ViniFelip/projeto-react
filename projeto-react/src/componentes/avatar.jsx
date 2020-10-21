import React from 'react'

function Avatar ({p1, personagemSelecionado}){
    return <div>
        <h2>{p1 ? "p1" : "p2"}</h2>
    <h3>{personagemSelecionado.nome}</h3>
    <img src={personagemSelecionado.imagem} alt={`o personagem selecionado por ${personagemSelecionado.nome} possui uma imagem` } />

    </div>
}

export default Avatar