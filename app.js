//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const nomeDoAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const arrayNomes = [];

function adicionarAmigo() {
	if (nomeDoAmigo.value.trim()) {
		arrayNomes.push(nomeDoAmigo.value.trim());

		nomeDoAmigo.value = "";

		preencherLista(arrayNomes);
	} else {
		alert("Por favor, insira um nome neste campo.");
	}
}

function preencherLista(arrayNomes) {
	listaAmigos.innerHTML = "";

	arrayNomes.forEach((nome) => {
		const li = document.createElement("li");
		li.textContent = nome;
		listaAmigos.appendChild(li);
	});
}

function sortearAmigo() {
	if (arrayNomes.length > 0) {
		const gerarNumeroBaseadoNoArray = Math.floor(
			Math.random() * arrayNomes.length
		);

		console.log(arrayNomes[gerarNumeroBaseadoNoArray]);

		resultado.innerHTML = `<p>O amigo secreto sorteado é: <b>${arrayNomes[gerarNumeroBaseadoNoArray]}</b></p>`;

		document.getElementById("btnReset").style.display = "flex";
	} else {
		alert("A lista está vazia, Coloque pelomenos um nome na lista.");
	}
}

function resetarJogo() {
	arrayNomes.length = 0;
	listaAmigos.innerHTML = "";
	resultado.innerHTML = "";
	nomeDoAmigo.value = "";
	document.getElementById("btnReset").style.display = "none";
}
