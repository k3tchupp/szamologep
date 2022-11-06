function osszeadas() {
    var elso = document.getElementById("elso").value;
    var masodik = document.getElementById("masodik").value;
    document.getElementById("eredmeny").innerHTML = parseFloat(elso) + parseFloat(masodik);
}

function kivonas() {
    var elso = document.getElementById("elso").value;
    var masodik = document.getElementById("masodik").value;
    document.getElementById("eredmeny").innerHTML = parseFloat(elso) - parseFloat(masodik);
}

function szorzas() {
    var elso = document.getElementById("elso").value;
    var masodik = document.getElementById("masodik").value;
    document.getElementById("eredmeny").innerHTML = parseFloat(elso) * parseFloat(masodik);
}

function osztas() {
    var elso = document.getElementById("elso").value;
    var masodik = document.getElementById("masodik").value;
    document.getElementById("eredmeny").innerHTML = parseFloat(elso) / parseFloat(masodik);
}