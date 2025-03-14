const inputDay = document.getElementById("dayIn");
const inputMouth = document.getElementById("monthIn");
const inputYear = document.getElementById("yearIn");

let spanYear = document.getElementById("yearOut");
let spanMouth = document.getElementById("monthOut");
let spanDay = document.getElementById("dayOut");

const buttonCalculat = document.getElementById("calculateBtn");

inputDay.addEventListener("input", () => {
	const valeurDay = Number(inputDay.value);

	if (valeurDay >= 1 && valeurDay <= 31) {
		console.log(valeurDay);
	} else {
		inputDay.value = "";
	}
});

inputMouth.addEventListener("input", () => {
	const valeurMouth = Number(inputMouth.value);

	if (valeurMouth >= 1 && valeurMouth <= 12) {
		console.log(valeurMouth);
	} else {
		inputMouth.value = "";
	}
});

inputYear.addEventListener("input", () => {
	const valeurYear = Number(inputYear.value);

	if (valeurYear >= 1 && valeurYear <= 2025) {
		console.log(valeurYear);
	} else {
		inputYear.value = "";
	}
});

buttonCalculat.addEventListener("click", () => {
	if (inputDay.value >= 1 && inputMouth.value >= 1 && inputYear.value >= 1) {
		let jour = new Date().getDate() - inputDay.value;

		spanDay.textContent = Math.floor(jour);
		console.log(Math.floor(jour));

		let mois = new Date().getMonth() + 1 - inputMouth.value;

		spanMouth.textContent = Math.floor(mois);
		console.log(Math.floor(mois));

		let anne = new Date().getFullYear() - inputYear.value;

		spanYear.textContent = Math.floor(anne);
		console.log(Math.floor(anne));
	} else {
	}
});
