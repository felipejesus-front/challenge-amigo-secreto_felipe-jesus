//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const nomeDoAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

const getNomesStorage = () => {
	return JSON.parse(localStorage.getItem("amigos")) || [];
};

const setNomesStorage = (nomes) => {
	localStorage.setItem("amigos", JSON.stringify(nomes));
};

function adicionarAmigo() {
	const nome = nomeDoAmigo.value.trim();
	if (nome) {
		const nomes = getNomesStorage();
		nomes.push(nome);
		setNomesStorage(nomes);
		nomeDoAmigo.value = "";
		preencherLista(nomes);
	} else {
		alert("Por favor, insira um nome neste campo.");
	}
}

function preencherLista(arrayNomes) {
	listaAmigos.innerHTML = "";
	arrayNomes.forEach((nome, idx) => {
		const li = document.createElement("li");
		li.className = "amigo-item";

		const nomeSpan = document.createElement("span");
		nomeSpan.textContent = nome;
		nomeSpan.className = "amigo-nome";

		const btnRemove = document.createElement("button");
		btnRemove.textContent = "x";
		btnRemove.className = "remove-amigo";
		btnRemove.title = "Remover";
		btnRemove.onclick = function () {
			const nomes = getNomesStorage();
			nomes.splice(idx, 1);
			setNomesStorage(nomes);
			preencherLista(nomes);
		};

		li.appendChild(nomeSpan);
		li.appendChild(btnRemove);
		listaAmigos.appendChild(li);
	});
}

function sortearAmigo() {
	const nomes = getNomesStorage();
	if (nomes.length > 0) {
		const gerarNumeroBaseadoNoArray = Math.floor(Math.random() * nomes.length);
		resultado.innerHTML = `<p>O amigo secreto sorteado é: <b>${nomes[gerarNumeroBaseadoNoArray]}</b></p>`;
		document.getElementById("btnReset").style.display = "flex";
	} else {
		alert("A lista está vazia, Coloque pelomenos um nome na lista.");
	}
}

function resetarJogo() {
	setNomesStorage([]);
	listaAmigos.innerHTML = "";
	resultado.innerHTML = "";
	nomeDoAmigo.value = "";
	document.getElementById("btnReset").style.display = "none";
}

window.onload = function () {
	preencherLista(getNomesStorage());
};
