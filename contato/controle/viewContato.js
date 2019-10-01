$(document).ready(function() {

    $('.btn-view').click(function(e) {

        e.preventDefault();

        $('.modal-title').empty();
        $('.modal-body').empty();
        $('.modal-footer').empty();


        var url = "contato/modelo/viewContato.php";
        var dados = 'id_cadastro=';
        dados += $(this).attr('id');

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: dados,
            url: url,
            success: function(dados) {
                for (var i = 0; dados.length > i; i++) {
                    let contato = `
                        
                        <p>Nome ` + dados[i].nomeContato + `</p>
                        <p>Endereço ` + dados[i].enderecoContato + `</p>
                        <p>Telefone ` + dados[i].telefoneContato + `</p>
                        <p>Celular ` + dados[i].celularContato + `</p>
                        <p>Email ` + dados[i].emailContato + `</p>
                    `;

                    $('.modal-title').append(dados[i].nomeContato);
                    $('.modal-body').append(contato);
                }

                $('#modalContato').modal('show');

            }
        });

    });
});