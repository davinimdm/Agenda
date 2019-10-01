$(document).ready(function() {

    $('.btn-update').click(function(e) {

        e.preventDefault()

        var dados = $('#editContato').serialize()
        var url = "contato/modelo/updateContato.php"

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {

                if (dados.return == true) {

                    $('#modalContato').modal('hide')

                    Swal.fire({
                        title: 'Agenda!',
                        text: 'Alteração efetuado com sucesso!',
                        type: 'success',
                        confirmButtonText: 'Feito!'
                    })

                    function atualizar() {
                        $('#conteudo').load('contato/visao/listaContato.html')
                    }
                    setTimeout(atualizar, 2000)

                } else {
                    Swal.fire({
                        title: 'Agenda!',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tente novamente...'
                    })
                }
                $('#modalContato').modal('hide')
            }
        })

    })
})