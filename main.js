var idNbr=0;
function insertjs() {
    //Lors de l'appuie sur le bouton insérer, intégration du contenu
    // du champs de texte dans la list (divlist)
    idNbr++;
    var insert = document.getElementById("inputask").value;
    document.getElementById("divlist").innerHTML += "<p> " + insert + " <button id=\"delbt"+idNbr+"\" type=\"button\" onclick=\"deletejs(this.id)\">X</button></p>";
    document.getElementById("inputask").value = "";
    //version avec le bouton pour barrer la tache ne fonctionne pas pour le moment
    //document.getElementById("divlist").innerHTML += "<p> " + insert + " <button id=\"delbt"+idNbr+"\" type=\"button\" onclick=\"deletejs(this.id)\">X</button><button id=\"strbt"+idNbr+"\" type=\"button\" onclick=\"strikejs(this.id)\">barrer</button></p>";
}

function deletejs(id) {
    //alert(id);
    var deletion = document.getElementById(id);
    var parent = deletion.parentNode;
    parent.parentNode.removeChild(parent);
}

//ne fonctionne pas encore malheureusement
function strikejs(id) {
    //alert("lol");
    var striking = document.getElementById(id);
    var parent = striking.parentNode;
    var newtext = "<strike>"+parent.firstChild.nodeValue+"</strike>";
    parent.firstChild.innerHTML = newtext;
}