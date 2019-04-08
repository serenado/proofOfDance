// 'notes' to store Arrows  
var notes = [];

// ==== CLASS FOR ARROWS ==== //

// 1. Direction of arrows
// 2. jQuery img that links to direction bottom
// 3. Destroy when it arrow gets to the 
// 4. Explode when arrow gets to the bottom




//sound effect
var snd1 = new Audio("sounds/beep.wav");
var snd2 = new Audio("sounds/smash.wav");
var snd3 = new Audio("sounds/punch.wav");
var snd4 = new Audio("sounds/hornii.wav");
snd1.volume=0.2;
snd2.volume=0.2;
snd3.volume=0.2;
snd4.volume=0.2;

// Class Arrow
function Arrow(direction) {

	// CSS spacings for the arrows //
	var xPos = null;

	switch(direction) {

		case "left" : xPos = "120px";
		break;

		case "up" : xPos = "186px";
		break;

		case "down" : xPos = "252px";
		break;

		case "right" : xPos = "322px";
		break;

	}

	this.direction = direction;
	this.image = $("<img src='./arrows/" + direction + ".gif'/>");
	this.image.css({

		position: "absolute",
		top: "0px",
		left: xPos

	});

	$('.stage').append(this.image);

}// ends CLASS Arrow

// To enable animating the arrows
Arrow.prototype.step = function() {

	// Controls the speed of the arrows
	this.image.css("top", "+=4px");

};

// Deletes arrows when they get to bottom of page
Arrow.prototype.destroy = function() {

	// removes the image of the DOM
	this.image.remove();

	// Removes the note/arrow from memory/array
	notes.splice(0,1);

};

// Explodes arrow when hit
Arrow.prototype.explode = function() {

	this.image.remove();

};

var score = 0;


// For random arrows
var randNum = 0;

// Frame increasing
var frame = 0;

// Determines the speed of notes
var arrowSpawnRate = 40;


// Random generator for arrows
function randomGen() {

	// Randomizes between 1 and 4
	randNum = Math.floor(Math.random() * 4) + 1;

	if (randNum === 1) {

		notes.push(new Arrow("left"));

	}
	if (randNum === 2) {

		notes.push(new Arrow("right"));

	}
	if (randNum === 3) {

		notes.push(new Arrow("up"));
		
	}
	if (randNum === 4) {

		notes.push(new Arrow("down"));

	}

}// ends randomGen()


// Render function //
function render() {

	if (frame++ % arrowSpawnRate === 0) {

		randomGen();

	}

	// Animate arrows showering down //
	for (var i = notes.length - 1; i >= 0; i--) {

		notes[i].step();

		// Check for cleanup
		if (notes[i].image.position().top > 750) {

			notes[i].destroy();

		}

	}

}// ends render()



// jQuery to animate arrows //
$(document).ready(function () {

	// shim layer with setTimeout fallback
	window.requestAnimFrame = (function() {

		return window.requestAnimationFrame ||

		window.webkitRequestAnimationFrame ||

		window.mozRequestAnimationFrame ||

		function(callback) {

			window.setTimeout(callback, 40 / 75);

		};

	})();

	/*	place the rAF *before* the render() 
		to assure as close to 60fps with the 
		setTimeout fallback.					*/

	// Infinte loop for game play
	(function animloop() {

		requestAnimFrame(animloop);

		render();

	})();// ends (function animloop() )


});// ends $(doc).ready



// Listening for when the key is pressed
$(document).keydown( function(event) {


	for (var i = 0; i < notes.length; i++) {
	
			// console.log(notes[i].image.position().top);

		if (event.keyCode == 37 && notes[i].direction == "left") {
			if (notes[i].image.position().top > 690 && notes[i].image.position().top < 730) {

				snd1.pause();
				snd1.currentTime = 0;
				score = score+1;
				snd1.play();
				console.log("score is: " + score);
				console.log("LEFT! "+notes[i].explode());
				
				pointsForPlayer();
			}
			
		}
		if (event.keyCode == 38 && notes[i].direction == "up") {

			if (notes[i].image.position().top > 690 && notes[i].image.position().top < 730) {
				
				snd2.pause();
				snd2.currentTime = 0;
				score = score+1;
				snd2.play();
				console.log("score is: " + score);
				console.log("UP! "+notes[i].explode());

				pointsForPlayer();

			}

		}
		if (event.keyCode == 40 && notes[i].direction == "down") {

			if (notes[i].image.position().top > 690 && notes[i].image.position().top < 730) {
				
				snd3.pause();
				snd3.currentTime = 0;
				score = score+1;
				snd3.play();
				console.log("score is: " + score);
				console.log("DOWN! "+notes[i].explode());

				pointsForPlayer();
			}

		}
		if (event.keyCode == 39 && notes[i].direction == "right") {

			if (notes[i].image.position().top > 690 && notes[i].image.position().top < 730) {
				
				snd4.pause();
				snd4.currentTime = 0;
				score = score+1;
				snd4.play();
				console.log("score is: " + score);
				console.log("RIGHT! "+notes[i].explode());

				pointsForPlayer();
			}

		}

	}// ends loop

});// ends $(doc).keyup




