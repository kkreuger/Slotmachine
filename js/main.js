var winning;
var lightThree;
var winningSound = new Audio('../sounds/winning.mp3');
var startSound = new Audio('../sounds/startsound.mp3');

function startGame() {
	var status 		= document.getElementById('status');
	var handle 		= document.getElementById('handle');

	startSound.play();
	handle.classList.add('pulled');
	clearInterval(winning);
	status.innerHTML = "GAME ON!";

	//Slot 1
	var slotOne = setInterval( function slotOne() {
		var random = Math.ceil(Math.random() * 7);

		slotTileOne = document.getElementById("slot1");
		slotTileOne.className = "a"+ random;
	}, 50);

	setTimeout( function() {
		clearInterval(slotOne);
		winningOne = slotTileOne.className;
	}, 800);

	//Slot 2
	var slotTwo = setInterval( function slotOne() {
		var random = Math.ceil(Math.random() * 7);
		
		slotTileTwo = document.getElementById("slot2");
		slotTileTwo.className = "a"+ random;
	}, 50);

	setTimeout( function() {		
		clearInterval(slotTwo);
		winningTwo = slotTileTwo.className;
	}, 1900);

	//Slot 3
	var slotThree = setInterval( function slotOne() {
		var random = Math.ceil(Math.random() * 7);
		
		slotTileThree = document.getElementById("slot3");
		slotTileThree.className = "a"+ random;
	}, 50);

	setTimeout( function() {
		clearInterval(slotThree);
		winningThree = slotTileThree.className;
		handle.classList.remove('pulled');
		showWinner();
	}, 3000);
}



function showWinner(){
	var slot1 		= document.getElementById("slot1").className
	var slot2 		= document.getElementById("slot2").className
	var slot3 		= document.getElementById("slot3").className
	var status 		= document.getElementById('status');

	if (((slot1 == slot2 && slot2 == slot3) ||
		(slot1 == "a7" && slot2 == "a7" && slot3 == "a7") ||
		(slot1 == slot2 && slot3 == "a7") ||
		(slot1 == slot3 && slot2 == "a7") ||
		(slot2 == slot3 && slot1 == "a7") ||
		(slot1 == slot2 && slot1 == "a7") ||
		(slot1 == slot3 && slot1 == "a7") ||
		(slot2 == slot3 && slot2 == "a7") )){
		status.innerHTML = "YOU WIN!";
		
		winningSound.play();

		var lightOne 	= document.getElementById('lights-one');
		var lightTwo 	= document.getElementById('lights-two');
		var lightThree 	= document.getElementById('lights-three');
		
		winning = setInterval(function(){	
			lightThree.classList.remove('active');
			lightOne.classList.add('active');
	
			setTimeout(function(){
				lightOne.classList.remove('active');
				lightTwo.classList.add('active');
			}, 100);
	
			setTimeout(function(){
				lightTwo.classList.remove('active');
				lightThree.classList.add('active');
			}, 200);

			setTimeout(function(){
				lightThree.classList.remove('active');
			}, 300);
		}, 400);

	} else {
		
		status.innerHTML = "YOU LOSE!"

	}
	
}	


