$(document).ready(function(){
    $("#clienteCpf").mask('000.000.000-00');
    $("#clienteDataNascimento").mask('00/00/0000', {placeholder: "__/__/____"});

    $("#formCadastro").validate({
        rules: {
           clienteNome: {
               required: true,
               minlength: 2
           },
           clienteCpf: {
               required: true,
               minlength: 14
           },
           clienteDataNascimento: {
               required:true,
               minlength: 10
           },
           clienteEmail: {
               required: true,
               email: true  
           },
           clienteSenha: {
               required: true,
               minlength:8  
           },
           clienteConfirmSenha: {
               required: true,
               equalTo: "#clienteSenha"
           }
        },
        messages: {
           clienteNome: {
               required: "O nome é obrigatório!",
               minlength: "É necessário digitar {0} caractere."
           },
           clienteCpf: {
               required: "O campo é obrigatório!",
               minlength: "É necessário digitar {0} caractere"
           },
           clienteDataNascimento: {
               required: "O campo é obrigatório!",
               minlength: "É necessário digitar {0} caractere"
           },
           clienteEmail: {
               required: "O campo é obrigatório",
               email: "Esse formato de email não é válido"
           },
           clienteSenha: {
               required: "O campo é obrigatório",
               minlength:"A senha deve ter no mínimo {0} caractere"
           },
           clienteConfirmSenha: {
            required: "Por favor confirme a senha",
            equalTo:"A senha deve ser igual"
           
        }
        },
       submitHandler: function (form) {
           alert('valid form');
           return false;
       }
    });

   });