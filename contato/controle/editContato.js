$(document).ready(function() {

    $('.btn-edit').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-footer').empty()
        $('.modal-title').append('Edição de registro cadastrado')


        var url = "contato/modelo/viewContato.php"
        var dados = 'id_cadastro='
        dados += $(this).attr('id')

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: dados,
            url: url,
            success: function(dados) {
                for (var i = 0; dados.length > i; i++) {
                    let contato = `


        <form class="mt-3" id="editContato">
            <div class="form-group">
                <label for="">Nome do contato</label>
                <input type="text" name="nomeContato" id="" class="form-control"  value="` + dados[i].nomeContato + `">
            </div>
            <div class="form-group">
                <label for="">Endereço do contato</label>
                <input type="text" name="enderecoContato" id="" class="form-control"  value="` + dados[i].enderecoContato + `">
            </div>

            <div class="form-group row">
                <div class="col-6">
                    <label for="">Telefone do contato</label>
                    <input type="text" name="telefoneContato" id="" class="form-control"  value="` + dados[i].telefoneContato + `">
                </div>

                <div class="col-6">
                    <label for="">Celular do Contato</label>
                    <input type="text" name="celularContato" id="" class="form-control"  value="` + dados[i].celularContato + `">
                </div>
            </div>

            <div class="form-group">
                <label for="">E-mail do contato</label>
                <input type="text" name="emailContato" id="" class="form-control"  value="` + dados[i].emailContato + `">
            </div>
            <br>
            <input type="hidden" name="id_cadastro" value="` + dados[i].id_cadastro + `">
            <button class="btn btn-outline-warning btn-update"><i class="mdi mdi-content-save"></i> Salvar</button>
            <button class="btn btn-outline-danger"><i class="mdi mdi-content-save"></i>Cancelar</button>

        </form>

                    `


                    $('.modal-body').append(contato)
                }

                $('#modalContato').modal('show')
                $('body').append('<script src="contato/controle/updateContato.js"></script>')

            }
        })

    })
})