 function   salvo(){
    var Ientre= document.getElementById("iEnter")
    var Saida= document.getElementById("saida")
    if (Ientre.value.trim()){
        Saida.innerHTML +=`<p>  <input type="checkbox">${Ientre.value}</p> `
        Saida.style.backgroundColor = ("#BC6C25")
    }

}