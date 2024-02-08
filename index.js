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
      pergunta: "Qual jogador é conhecido como 'Marcador Imortal'?",
      resposta: [
        "Oberdan Cattani",
        "Ademir da Guia",
        "Dudu",
      ],
      correta: 0
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
  ];
  
  //colocou o conteudo HTML na var
  //# por se tratar de uma id
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totPerguntas = perguntas.length
  const mostrarTot = document.querySelector('#acertos span')
  mostrarTot.textContent = corretas.size + ' de ' + totPerguntas
  
  //loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.resposta) {
      //loop ou laço de repetição
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
          mostrarTot.textContent = corretas.size + ' de ' + totPerguntas 
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  //remove o "Resposta A"
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela  
    quiz.appendChild(quizItem)
  }