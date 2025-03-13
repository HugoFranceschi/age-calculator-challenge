const inputDay = document.getElementById("dayIn");
const inputMouth = document.getElementById("monthIn");
const inputYear = document.getElementById("yearIn");

let spanYear = document.getElementById("yearOut");
let spanMouth = document.getElementById("monthOut");
let spanDay = document.getElementById("dayOut");

const buttonCalculat = document.getElementById("calculateBtn");

let jour = new Date();

inputDay.addEventListener("input", () => {
	const valeur = inputDay.value;

	console.log(valeur);
});
