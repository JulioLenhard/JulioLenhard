function telaSemTexto () {
    let output = document.getElementById('output')
    let botaoCopiar = document.getElementById('button-copiar')
    
    output.style.display = 'none'
    botaoCopiar.style.display = 'none'

    document.querySelector('.coluna-direita').classList.add('coluna-direita-sem-mensagem')
}

function telaComTexto() {
    let semTexto = document.getElementById('sem-texto')
    let output = document.getElementById('output')
    let botaoCopiar = document.getElementById('button-copiar')

    semTexto.style.display = 'none'
    output.style.display = 'block'
    botaoCopiar.style.display = 'block'
}

function criptografar () {

    let resultado = ''

    for (let i = 0; i < input.value.length; i++) {

        if (input.value[i] == 'e') {
            resultado = resultado + 'enter'
        } else if (input.value[i] == 'i') {
            resultado = resultado + 'imes'
        } else if (input.value[i] == 'a') {
            resultado = resultado + 'ai'
        } else if (input.value[i] == 'o') {
            resultado = resultado + 'ober'
        } else if (input.value[i] == 'u') {
            resultado = resultado + 'ufat'
        }else {
            resultado = resultado + input.value[i]
        }
        
    }
   
    output.innerHTML = resultado

    telaComTexto()
}

//Funções para verificar cada letra da chave de criptografia

function verificaE (parametro) {
    var resultado = parametro.replaceAll('enter', 'e')
    return resultado
}

function verificaI (parametro) {
    var resultado = parametro.replaceAll('imes', 'i')
    return resultado
}

function verificaA (parametro) {
    var resultado = parametro.replaceAll('ai', 'a')
    return resultado
}

function verificaO (parametro) {
    var resultado = parametro.replaceAll('ober', 'o')
    return resultado
}

function verificaU (parametro) {
    var resultado = parametro.replaceAll('ufat', 'u')
    return resultado
}

function descriptografar () {

    let resultado = verificaE(input.value)
    resultado = verificaI(resultado)
    resultado = verificaA(resultado)
    resultado = verificaO(resultado)
    resultado = verificaU(resultado)

    output.innerText = resultado
    telaComTexto()

}

function copiar() {

    let recebeCopia = document.getElementById('texto-criptografado').innerHTML

    navigator.clipboard.writeText(recebeCopia)

    .then(() => {
        alert('Texto copiado com sucesso!')
    })

}

var input = document.getElementById('input-text')
var output = document.getElementById('texto-criptografado')
var resultado

telaSemTexto()

var buttonCripto = document.getElementById('button-criptografar')
buttonCripto.onclick = criptografar

var buttonDescripto = document.getElementById('button-descriptografar')
buttonDescripto.onclick = descriptografar

var buttonCopiar = document.getElementById('button-copiar')
buttonCopiar.onclick = copiar



