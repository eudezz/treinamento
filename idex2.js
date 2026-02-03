 var Ientre= document.getElementById("iEnter")
 var Saida= document.getElementById("saida")
 
 function   salvo(){
    var Ientre= document.getElementById("iEnter")
    
    if (Ientre.value.trim()){
        Saida.innerHTML +=`<p>  <input type="checkbox">${Ientre.value}</p> `
        Saida.style.backgroundColor = ("#BC6C25")
        Ientre.value=""
    }

}
function Limpar() {
    if(Saida.lastElementChild)
   { Saida.lastElementChild.remove()}
}

