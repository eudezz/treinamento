function saida() {
    var tex= document.getElementById("tex")
    var saida= document.getElementById("saida")
   

    if (tex.value.trim() ) {
        saida.innerHTML +=`<p id="item" tabindex="0">

         <input type="checkbox">${tex.value}

         <span class="material-symbols-outlined"  id="botaoclose"  onclick="limpar(this)">close</span>
         
        </p>`
        tex.value=""

    }else if (tex2.value.trim() ) {
        saida.innerHTML +=`<p id="item" tabindex="0">                    
        <img src="${tex2.value}" alt="Imagem" class="imagem" >
        
        <span class="material-symbols-outlined"  id="botaoclose"  onclick="limpar(this)">close</span>
        </p>`
        tex2.value=""
    }else{
        alert("Digite algo para adicionar na lista")
    }

}

    function limpar(element) {
        var item = element.parentElement
        item.remove()
}
