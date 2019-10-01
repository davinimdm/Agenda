$(document).ready(function() {
    $(".addContato").click(function() { $("#conteudo").load("contato/visao/addContato.html") });
    $(".listaContato").click(function() { $("#conteudo").load("contato/visao/listaContato.html") });
    $(".dados-Usuario").click(function() { $("#conteudo").load("Usuario/visao/adUsuario.html") });

});