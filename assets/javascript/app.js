document.getElementById("music").loop = true;

var question1 = {
	line: "\"Mr. and Mrs. Dursley of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.\"",
	rightAns: "Harry Potter and the Sorcerer's Stone",
	wrongAns1: "A Series of Unfortunate Events: The Bad Beginning",
	wrongAns2: "Harry Potter and the Goblet of Fire",
	wrongAns3: "The Fault in Our Stars"
}

var randomArray = [];

function randomizer() {
	var random = Math.floor(Math.random() * 4) + 1;
	if (randomArray.length == 4) {
		return;
	}
	else if (randomArray.length == 0) {
		document.getElementById(random).textContent = question1.rightAns;
		randomArray.push(random);
		randomizer();
	}
	else if (randomArray.indexOf(random) == -1 && randomArray.length == 1) {
		document.getElementById(random).textContent = question1.wrongAns1;
		randomArray.push(random);
		randomizer();
	}
	else if (randomArray.indexOf(random) == -1 && randomArray.length == 2) {
		document.getElementById(random).textContent = question1.wrongAns2;
		randomArray.push(random);
		randomizer();
	}
	else if (randomArray.indexOf(random) == -1 && randomArray.length == 3) {
		document.getElementById(random).textContent = question1.wrongAns3;
		randomArray.push(random);
		randomizer();
	}
	else {
		randomizer();
	}
}

document.getElementById("start").onclick = function() {
	document.getElementById("start").textContent = "";
	document.getElementById("question").textContent = question1.line;
	randomArray = [];
	randomizer();
};