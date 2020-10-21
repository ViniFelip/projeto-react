import React from 'react'
import Avatar from '../componentes/avatar'
import Paises from '../componentes/paises'
import Titulo from '../componentes/titulo'
import Personagens from '../componentes/personagens'

const paises = [
    {
        nome: 'Okinawa'
    }, {
        nome: 'yokohama'
    }, {
        nome: 'Minato'
    }
]

const personagens = [
    {
      id: 1,
      nome: 'Gaara',
    },
    {
      id: 2,
      nome: 'Sasori'
      
    }
  ]
    


const p1 = personagens[0]
const p2 = personagens[1]

function Fight() {
    return <div>
        <Titulo texto="Player select" />
        <Paises paises={paises} />
        <Personagens personagens={personagens} />
        <Avatar p1 personagemSelecionado={p1} />
        <Avatar p2 personagemSelecionado={p2} />
    </div>

}

export default Fight
