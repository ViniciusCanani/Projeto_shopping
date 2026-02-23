function realizarLogin(){

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(!email){
        document.getElementById("email").style.borderColor = "tomato";
        return;
    }

    if(!senha){
        document.getElementById("senha").style.borderColor = "tomato";
        return;
    }

    if(email==="senai@gmail.com" && senha==="senai"){

        window.location.href = "./home.html";
    }
    else{
        alert("Credenciais incorretas.");
    }
}

function exibirSenha(){
   var tipo_senha = document.getElementById("senha").type;

    if(tipo_senha === "text"){

        document.getElementById("senha").type = "password"
    }
    else{
        document.getElementById("senha").type = "text"
    }

}

