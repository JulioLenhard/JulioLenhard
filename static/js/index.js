/*
	a = ai
	e = enter
	i = imes
	o = ober
	u = ufat

	//aceitar somente letras minúsculas 
	//impedir caracteres especiais e letras com acentos
	//criptografar e decriptografar textos


	Extras:
	- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.

	Temos um período de tempo de quatro semanas para desenvolver o projeto e vamos trabalhar com o sistema ágil de desenvolvimento, utilizando o Trello da seguinte forma:

	A coluna Pronto pra iniciar apresenta os cartões com os elementos ainda não desenvolvidos.
	Já na coluna Desenvolvendo ficarão os elementos que você estiver desenvolvendo no momento. Ao iniciar uma tarefa, você poderá mover o cartão que contém a tarefa para esta coluna.
	No Pausado estarão os elementos que você começou a desenvolver, mas precisou parar por algum motivo.
	Por fim, a coluna Concluído terá os elementos já concluídos.

	*/
function Encriptografia(){

	var textValue = document.getElementById("textAreaEncripto").value
	var textValueEncripted = document.getElementById("textAreaDecripto")
	var encriptedWord = ""

	for(let x = 0; x < textValue.length ; x++) {

		console.log(textValue[x])

		if (textValue[x] === "a") {encriptedWord += "ai"}
		else if (textValue[x] === "e") {encriptedWord += "enter"}
		else if (textValue[x] === "i") {encriptedWord += "imes"}
		else if (textValue[x] === "o") {encriptedWord += "ober"}
		else if (textValue[x] === "u") {encriptedWord += "ufat"}
		else { encriptedWord += textValue[x]}

	}

	console.log(encriptedWord)
	textValueEncripted.value = encriptedWord
	
}

function Decriptografia(){

	/* 
	pairaibenterns 
	poberr 
	enterncairair 
	enterssenter 
	dentersaifimesober 
	enter 
	tenterr 
	fimesnailimeszaidober 
	enterlenter 
	coberm 
	sufatcenterssober
	*/

	var textValue = document.getElementById("textAreaDecripto").value
	var textValueDecripted = document.getElementById("textAreaEncripto")

	var decriptedText = textValue.replace(/ai/g, 'a')
	decriptedText = decriptedText.replace(/enter/g, 'e')
	decriptedText = decriptedText.replace(/imes/g, 'i')
	decriptedText = decriptedText.replace(/ober/g, 'o')
	decriptedText = decriptedText.replace(/ufat/g, 'u')

	textValueDecripted.value = decriptedText

}

//Proibir caracteres especiais

function blockCharacter(idClass) {
    document.getElementById(idClass).onkeypress = function(e) {
        var chr = String.fromCharCode(e.which);
        if (" é1234567890qwertyuioplkjhgfdsazxcvbnm".indexOf(chr) < 0)
          return false;
      };
}

blockCharacter("textAreaDecripto");
blockCharacter("textAreaEncripto");

//efeitos adicionais no titulo do texto



const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["solucionar problemas", "um estilo de vida", "trasformar projetos em resultados", "meu trabalho!!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

