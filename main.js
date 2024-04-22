
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("qual a menina mais linda?");

    
    if (respostaTime.toLowerCase() === "athlético pr") {
      alert("Isso mesmo! a lunara é a mais linda!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("errou!tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
