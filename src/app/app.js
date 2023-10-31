// Detecta quando o usuário clica no botão "Enviar"
const btnSendMessage=document.querySelector(".btn-send");
const inputMessage=document.querySelector(".input-message");




async function enviarPerguntaBot(prompt){
    await fetch("http://localhost:3001/chat",{
        method:"POST",
        headers: {

            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            prompt:prompt
        })
        
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
}
btnSendMessage.addEventListener("click",()=>{
    let mensagem = inputMessage.value;
    enviarPerguntaBot(mensagem)
})