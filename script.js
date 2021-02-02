const buttonadd = document.getElementById("buttonadd");

function addtarefa() {
  var li = document.createElement("li");
  var valortxt = document.getElementById("inputboxtxt").value;
  var t = document.createTextNode(valortxt);
  li.appendChild(t);
  li.setAttribute('class', 'mdl-list__item');
  li.setAttribute('title', 'Marque essa Tarefa como Feita');

  if (valortxt.length <= 1 || valortxt.length > 50) {
    return alert("Seus itens da lista devem ter mais que 1 caractere, e menos que 50!")
     } 
    else {
     document.getElementById("lista").appendChild(li);
    }
    
document.getElementById("inputboxtxt").value = "";

var spam = document.createElement("spam");
var txt = document.createTextNode("delete_forever");
spam.setAttribute('title', 'Excluir Tarefa');
spam.className = "lixeira material-icons";
spam.appendChild(txt);
li.appendChild(spam);

for (i = 0; i < lixo.length; i++) {
    lixo[i].onclick = function() {
      var div = this.parentElement;
      div.parentNode.removeChild(div);
    }
}

if (EXlista.hasAttribute("disabled")){
    EXlista.removeAttribute("disabled");
    }
}

var lixo = document.getElementsByClassName("lixeira");
lixo.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
}