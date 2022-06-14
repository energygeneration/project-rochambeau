//* my main.js
function tva(){
    let prixHT = Number(document.getElementById("ht").value);
    let prixTva = prixHT*0.2;
    let prixTTC = prixHT+prixTva;
    document.getElementById("prix").innerHTML = "Votre prix avec tva est de " + prixTTC + " FCFA";
}