// vermelho -> #C11119
// verde -> #26985E
function validar(){
    const primeiraRegex=/^[A-z0-9]*[@]{1}[A-z0-9]*[[.]{1}[com]{3}$/;
    const segundaRegex=/^[A-z0-9]*[@]{1}[A-z0-9]*[[.]{1}[com]{3}[.]{1}[br]{2}$/;
    const emailCampo=document.querySelector("#email");
    const emailValor=document.querySelector("#email").value;
    const resultado1=primeiraRegex.exec(emailValor);
    const resultado2=segundaRegex.exec(emailValor);
    if(resultado1!=null || resultado2!=null){
        emailCampo.style.outlineColor="#26985E";
        emailCampo.style.outlineWidth="2px";
    }else{
        emailCampo.style.outlineColor="#C11119";
        emailCampo.style.outlineWidth="2px";
    }  
}
function validar2(){
    const primeiraRegex=/^[A-z0-9]*[@]{1}[A-z0-9]*[[.]{1}[com]{3}$/;
    const segundaRegex=/^[A-z0-9]*[@]{1}[A-z0-9]*[[.]{1}[com]{3}[.]{1}[br]{2}$/;
    const emailCampo=document.querySelector("#email2");
    const emailValor=document.querySelector("#email2").value;
    const resultado1=primeiraRegex.exec(emailValor);
    const resultado2=segundaRegex.exec(emailValor);
    if(resultado1!=null || resultado2!=null){
        emailCampo.style.outlineColor="#26985E";
        emailCampo.style.outlineWidth="2px";
    }else{
        emailCampo.style.outlineColor="#C11119";
        emailCampo.style.outlineWidth="2px";
    }  
}
//perguntas frequentes
const div=document.querySelectorAll(".perguntas-lista");
div.forEach(div=>{
    div.addEventListener("click",()=>{
        div.classList.toggle("active");
    });
})