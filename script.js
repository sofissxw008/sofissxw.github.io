
let indiceAtual = 0;

function verificarSenha() {
    const senhaCorreta = "1909";
    const senhaDigitada = document.getElementById("senha").value;

    if (senhaDigitada === senhaCorreta) {
        document.getElementById("login").style.display = "none";
        document.getElementById("conteudo").style.display = "block";
    } else {
        alert("Dica: tenta sem o ano, apena o dia e o mês")
    }
}

function proximo() {
    const blocos = document.querySelectorAll(".bloco");
    blocos[indiceAtual].classList.remove("ativo");
    indiceAtual++;
    blocos[indiceAtual].classList.add("ativo");
}


