function saida() {
    var tex= document.getElementById("tex")
    var saida= document.getElementById("saida")
   

    if (tex.value.trim() ) {
        saida.innerHTML +=`<p >  <input type="checkbox">${tex.value} </p> `
        tex.value=""
    }
}