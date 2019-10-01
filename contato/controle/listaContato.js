$(document).ready(function() {

    $('tboby').empty()

    var url = "contato/modelo/listaContato.php"

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: url,
        async: true,
        success: function(dados) {
            for (var i = 0; i < dados.length; i++) {
                let contato = `
                <tr>
                <td class="text-center" width="5%">` + dados[i].id_cadastro + `</td>
                <td class="text-center" width="5%">` + dados[i].nomeContato + `</td>
                <td class="text-center" width="5%">` + dados[i].enderecoContato + `</td>
                <td class="text-center" width="5%">` + dados[i].telefoneContato + `</td>
                <td class="text-center" width="5%">` + dados[i].celularContato + `</td>
                <td class="text-center" width="5%">` + dados[i].emailContato + `</td>
                    <td class="text-center" width="15%">
                        <button id="` + dados[i].id_cadastro + `" class="btn btn-outline-primary btn-sm btn-view"><i class="mdi mdi-eye mdi-18px"></i></button>
                        <button id="` + dados[i].id_cadastro + `" class="btn btn-outline-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                        <button id="` + dados[i].id_cadastro + `" class="btn btn-outline-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                    </td>
                </tr>
                `

                $('tbody').append(contato)
            }
            $('body').append('<script>$(".btn-new").click(function(){ $("#conteudo").load("contato/visao/addContato.html")})</script>')
            $('body').append('<script src="contato/controle/viewContato.js"></script>')
            $('body').append('<script src="contato/controle/editContato.js"></script>')
            $('body').append('<script src="contato/controle/deleteContato.js"></script>')

        }

    })

})