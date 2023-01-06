var dicionario = JSON.parse(localStorage.getItem("db"));
window.onload = function () {
    console.log(dicionario);
    var n = 0;
    var total = 0;
    for (var el in dicionario) {
        n = n + 1;
        $(".table tbody").append('<tr><th scope="row">' + n + '</th><td>' + el + '</td><td>' + dicionario[el] + '€</td><td><i id="' + el + '" onClick="deletar2(this.id)" class="fa fa-trash"></i></td></tr>');
        total = total + dicionario[el];
        $("#Price").val(total);
    };
};

function deletar(chave) {
    console.log(chave);
    console.log(dicionario);
    dicionario = {};
    localStorage.setItem("db", JSON.stringify(dicionario));
    console.log(dicionario);
    location.reload();
}

function deletar2(chave) {
    console.log(chave);
    console.log(dicionario);
    // dicionario = dicionario.delete(chave);
    delete dicionario[chave];
    localStorage.setItem("db", JSON.stringify(dicionario));
    console.log(dicionario);
    location.reload();
}