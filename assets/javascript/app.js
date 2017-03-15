document.getElementById("music").loop = true;2

var resultObject = {right: 0, wrong: 0, timeRanOut: 0};

var question1 = {
	line: "\"Mr. and Mrs. Dursley of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.\"",
	rightAns: "Harry Potter and the Sorcerer's Stone",
	wrongAns1: "A Series of Unfortunate Events: The Bad Beginning",
	wrongAns2: "Harry Potter and the Goblet of Fire",
	wrongAns3: "The Fault in Our Stars"
};

var question2 = {
	line: "\"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\"",
	rightAns: "Pride and Prejudice",
	wrongAns1: "Sense and Sensibility",
	wrongAns2: "Persuasion",
	wrongAns3: "Emma"
};

var question3 = {
	line: "\"Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.\"",
	rightAns: "100 Years of Solitude",
	wrongAns1: "Love in the Time of Cholera",
	wrongAns2: "The Library of Babel",
	wrongAns3: "The Master and Margarita"
};

var question4 = {
	line:"\"Happy families are all alike; every unhappy family is unhappy in its own way.\"",
	rightAns: "Anna Karenina",
	wrongAns1: "Crime and Punishment",
	wrongAns2: "War and Peace",
	wrongAns3: "The Brothers Karamazov"
};

var question5 = {
	line: "\"It was a bright cold day in April, and the clocks were striking thirteen.\"",
	rightAns: "1984",
	wrongAns1: "Brave New World",
	wrongAns2: "Animal Farm",
	wrongAns3: "Homage to Catalonia"
};

var questionArray = [question1, question2, question3, question4, question5];

var questionNum = 0;

var randomArray = [];

function randomizer(n) {
	var random = Math.floor(Math.random() * 4) + 1;
	if (randomArray.length == 4) {
		return;
	}
	else if (randomArray.length == 0) {
		document.getElementById(random).textContent = questionArray[n].rightAns;
		randomArray.push(random);
		randomizer(n);
	}
	else if (randomArray.indexOf(random) == -1 && randomArray.length == 1) {
		document.getElementById(random).textContent = questionArray[n].wrongAns1;
		randomArray.push(random);
		randomizer(n);
	}
	else if (randomArray.indexOf(random) == -1 && randomArray.length == 2) {
		document.getElementById(random).textContent = questionArray[n].wrongAns2;
		randomArray.push(random);
		randomizer(n);
	}
	else if (randomArray.indexOf(random) == -1 && randomArray.length == 3) {
		document.getElementById(random).textContent = questionArray[n].wrongAns3;
		randomArray.push(random);
		randomizer(n);
	}
	else {
		randomizer(n);
	}
}


function choice(id, n){
	if (document.getElementById(id).textContent == questionArray[n].rightAns) {
		document.getElementById("result").textContent = "YOU GOT IT RIGHT!";
		document.getElementById("answer").textContent = questionArray[n].rightAns;
		document.getElementById(1).textContent = "";
		document.getElementById(2).textContent = "";
		document.getElementById(3).textContent = "";
		document.getElementById(4).textContent = "";
		resultObject.right++;
		document.getElementById("time").textContent = "Time Remaining: 0";
		setTimeout(newQuestion, 5000);
	}
	else {
		document.getElementById("result").textContent = "YOU GOT IT WRONG!";
		document.getElementById("answer").textContent = questionArray[n].rightAns;
		document.getElementById(1).textContent = "";
		document.getElementById(2).textContent = "";
		document.getElementById(3).textContent = "";
		document.getElementById(4).textContent = "";
		resultObject.wrong++;
		document.getElementById("time").textContent = "Time Remaining: 0";
		setTimeout(newQuestion, 5000);
	}
}

function countdown() {
	setTimeout(function() {
		document.getElementById("timenum").textContent--;
		if (document.getElementById("timenum").textContent == 0) {
			document.getElementById("result").textContent = "Time up!";
			document.getElementById("answer").textContent = question1.rightAns;
			document.getElementById(1).textContent = "";
			document.getElementById(2).textContent = "";
			document.getElementById(3).textContent = "";
			document.getElementById(4).textContent = "";
			resultObject.timeRanOut++;
			setTimeout(newQuestion, 5000);
			return;
		}
		else {
			countdown();
		}
		}, 1000);
}

var questionNumArray = [];

var trigger = "";

function chooseQuestion() {
	questionNum = Math.floor(Math.random() * 5);
	if (questionNumArray.length == 5) {
		document.getElementById("start").textContent = "All done! Here's how you did!";
		document.getElementById("question").textContent = "";
		document.getElementById(1).textContent = "Right: " + resultObject.right;
		document.getElementById(2).textContent = "Wrong: " + resultObject.wrong;
		document.getElementById(3).textContent = "Didn't Answer: " + resultObject.timeRanOut;
		document.getElementById(4).textContent = "Click here to try again";
		document.getElementById(4).onclick = function() {
			questionNumArray = [];
			newQuestion();
			trigger = false;
		}
		trigger = true;
	}
	else if (questionNumArray.indexOf(questionNum) == -1) {
		questionNumArray.push(questionNum);
		trigger = false;
	}
	else {
		chooseQuestion();
	}
}

function newQuestion() {
	document.getElementById("result").textContent = "";
	document.getElementById("answer").textContent = "";
	document.getElementById("start").textContent = "";
	chooseQuestion();
	if (trigger) {
		return;
	}
	else {
		document.getElementById("time").innerHTML = "Time Remaining: <span id=\"timenum\">25</span>";
		document.getElementById("question").textContent = questionArray[questionNum].line;
		randomArray = [];
		randomizer(questionNum);		
		document.getElementById(1).onclick = function() {choice(1, questionNum)};
		document.getElementById(2).onclick = function() {choice(2, questionNum)};
		document.getElementById(3).onclick = function() {choice(3, questionNum)};
		document.getElementById(4).onclick = function() {choice(4, questionNum)};
		countdown();
	}
}

document.getElementById("start").onclick = function() {newQuestion()};