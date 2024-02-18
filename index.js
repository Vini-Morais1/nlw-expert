const perguntas = [
  {
    pergunta: "Quantos títulos de campeão brasileiro o Palmeiras possui?",
    resposta: [
      "8",
      "10",
      "12",
    ],
    correta: 2
  },
  {
    pergunta: "Qual foi o primeiro estádio utilizado pelo Palmeiras como sua casa?",
    resposta: [
      "Allianz Parque",
      "Pacaembu",
      "Parque Antarctica",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o maior artilheiro da história do Palmeiras?",
    resposta: [
      "Ademir da Guia",
      "Evair",
      "Heitor Marcelino Domingues",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o apelido do Palmeiras?",
    resposta: [
      "Peixão",
      "Porco",
      "Gigante da Colina",
    ],
    correta: 1
  },
  {
    pergunta: "Qual foi o ano de fundação do Palmeiras?",
    resposta: [
      "1912",
      "1920",
      "1932",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o técnico que mais vezes comandou o Palmeiras?",
    resposta: [
      "Vanderlei Luxemburgo",
      "Luiz Felipe Scolari",
      "Abel Ferreira",
    ],
    correta: 1
  },
  {
    pergunta: "Qual foi o último título internacional conquistado pelo Palmeiras até 2022?",
    resposta: [
      "Copa Libertadores",
      "Copa Sul-Americana",
      "Copa Mercosul",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome oficial do Palmeiras?",
    resposta: [
      "Sociedade Esportiva Palmeiras",
      "Associação Atlética Palmeiras",
      "Clube Atlético Palmeiras",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o técnico que levou o Palmeiras à conquista da Copa Libertadores de 1999?",
    resposta: [
      "Vanderlei Luxemburgo",
      "Felipão",
      "Luiz Felipe Scolari",
    ],
    correta: 2
},
  {
    pergunta: "Qual jogador é conhecido como 'Divino'?",
    resposta: [
      "Oberdan Cattani",
      "Ademir da Guia",
      "Dudu",
    ],
    correta: 1
  }
]

document.addEventListener("DOMContentLoaded", function() {
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const mostrarTot = document.querySelector('#acertos span')
  const botaoEnviar = document.getElementById('botao')

  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for (let resposta of item.resposta) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }

  botaoEnviar.addEventListener('click', () => {
    const respostasMarcadas = quiz.querySelectorAll('input:checked')
    const numRespostas = respostasMarcadas.length
    
    if (numRespostas < perguntas.length) {
      alert('Por favor, responda todas as perguntas antes de enviar.')
    } else {
      const numRespostasCorretas = Array.from(respostasMarcadas).reduce((acc, input) => {
        const perguntaIndex = parseInt(input.name.split('-')[1])
        const pergunta = perguntas[perguntaIndex]
        if (parseInt(input.value) === pergunta.correta) {
          acc++
          input.parentNode.classList.add('correta')
        } else {
          input.parentNode.classList.add('incorreta')
        }
        return acc
      }, 0)

      const inputs = quiz.querySelectorAll('input')
      inputs.forEach(input => input.disabled = true)
      botaoEnviar.disabled = true

      mostrarResultado(numRespostasCorretas)
    }
  })

  function mostrarResultado(numRespostasCorretas) {
    const result = document.querySelector('#acertos')
    result.innerHTML = `Você acertou ${numRespostasCorretas} de ${perguntas.length} perguntas!`
    result.style.display = 'block'
  }
})