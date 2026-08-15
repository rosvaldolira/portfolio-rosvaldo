function enviarFormulario() {

    // Captura os valores preenchidos no formulário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // Verifica se algum campo está vazio
    if (nome == "" || email == "" || mensagem == "") {
        alert("Preencha todos os campos!");

    // Verifica se o e-mail possui formato válido    
    }  else if (!email.includes("@") ||  !email.includes(".")) {
        alert("Digite um e-mail válido!");
    }  else {  
         alert("Mensagem enviada com sucesso!");
         
    // Limpa os campos após o envio com sucesso       
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";
    }
    
       
    }
