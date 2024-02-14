const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "vari myVar;",
        "v myVar;",
        "var myVar;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método correto para imprimir 'Hello World' na janela de console?",
      respostas: [
        "console.print('Hello World');",
        "print('Hello World');",
        "console.log('Hello World');"
      ],
      correta: 2
    },
    {
      pergunta: "Como você comenta no JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "'Este é um comentário'"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de escrever um array em JavaScript?",
      respostas: [
        "var colors = 'red', 'green', 'blue';",
        "var colors = (1:'red', 2:'green', 3:'blue');",
        "var colors = ['red', 'green', 'blue'];"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função correta para gerar um número aleatório entre 1 e 100 em JavaScript?",
      respostas: [
        "Math.random(1, 100);",
        "randomNumber(1, 100);",
        "Math.floor(Math.random() * 100) + 1;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual operador é usado para atribuir um valor a uma variável em JavaScript?",
      respostas: [
        "=",
        "*",
        "=="
      ],
      correta: 0
    },
    {
      pergunta: "Como você chama uma função chamada 'myFunction'?",
      respostas: [
        "call myFunction();",
        "myFunction();",
        "call.function(myFunction);"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop while em JavaScript?",
      respostas: [
        "while (i <= 10) {}",
        "loop (i = 0; i <= 10; i++) {}",
        "for (i = 0; i <= 10) {}"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retorna esse elemento?",
      respostas: [
        "pop()",
        "shift()",
        "slice()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos JavaScript converte uma string em uma matriz?",
      respostas: [
        "split()",
        "join()",
        "concat()"
      ],
      correta: 0
    }
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size +' de ' + totalDePerguntas
  
   
  
  
  // loop ou laço de repetição
  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    //Adicionar a função para permitir que cada pergunta, tenha a sua resposta com o botão rádio
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) 
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if (estaCorreta) {
       corretas.add(item)
     }
     mostrarTotal.textContent = corretas.size +' de ' + totalDePerguntas
    }
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
   //colocar as perguntas na tela
   quiz.appendChild(quizItem)
  }
  