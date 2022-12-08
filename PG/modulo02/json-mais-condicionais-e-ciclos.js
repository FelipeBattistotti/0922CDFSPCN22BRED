//Métodos de Strings
//Exercicio
function dominio(url) {
	return 'http://' + url;
}

 //_____________________________________________________
//Arrow Functions
//Exercício 1

let cincoNumeros = () => [1, 2, 3, 4, 5];

let multiplicarPorDois = () => 123 * 2;

let mostrarNome = () => 'Meu nome é Ryan Dahl';

 //_____________________________________________________
//Condicionais IF ternário / Switch
//Exercicio 1
const dado = true;

if (dado) {
	console.log('É verdadeiro!');
} else {
	console.log('É falso!');
}
 //_____________________________________________________
//Exercicio 2
let dia = "sabado";

function fimDeSemana(dia) {
	switch (dia) {
		case "segunda":
			console.log("você tem aulas");
			break;
		case "quarta":
			console.log("você tem aulas");
			break;
		case "sexta":
			console.log("você tem aulas");
			break;
		default:
			console.log("você não tem aulas");
	}
}

fimDeSemana(dia);
 //_____________________________________________________
//Exercicio 3
let dia = 'sexta-feira';
function fimDeSemana(dia) {
    switch (dia) {
        case 'sexta-feira':
            console.log('Bom fim de semana!');
            break;
        case 'segunda-feira':
            console.log('Boa semana!');
            break;
        default:
            console.log('Bom dia!');
    }
}
 //_____________________________________________________
//Ciclo For
//Exercício 1
function papagaio(texto) {
	for (let i = 1; i <= 5; i++) {
			console.log(texto);
	}
}