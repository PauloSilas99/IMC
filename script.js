const botao = document.querySelector('#botao');
function clicar(e){
    e.preventDefault();
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const calculo = (peso/(altura*altura)).toFixed(2);
    const hidden = document.querySelector('#areatexto');
    if(hidden.style.display==='none'){
        hidden.style.display='block';
    }else{
        hidden.style.display='none'
    }
    let textopeso = ""
    if(calculo<18.5){
        textopeso="Você está abaixo do peso"
    }else if(calculo<24.9){
        textopeso="Seu peso está saudável"
    }else if(calculo<29.9){
        textopeso="Você está com sobrepeso, cuidado  com sua alimentação  e procure fazer atividade física."
    }else if(30.0<=calculo){
        textopeso="Você está obeso,cuidado  com sua alimentação  e procure fazer atividade física."
    }
    document.querySelector('#areatexto').innerHTML= nome+', Seu IMC é: '+ calculo +","+ textopeso;
}
botao.addEventListener('click',clicar);