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

var song = new Audio("IWannaBeSedated_solo.wav");

// Class Arrow
function Arrow(direction, target) {

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

	this.target = target;

	$('.stage').append(this.image);

}// ends CLASS Arrow

// To enable animating the arrows
Arrow.prototype.step = function() {

	// Controls the speed of the arrows

	var pos = 300 * ( this.target - (Date.now() - start)/1000 );
	this.image.css("top",  700 - pos + "px");
	//this.image.css("top", "+=4px")

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

var times = [2.956643991, 3.254195011, 3.698888889, 4.072380952, 4.443650794, 4.815079365, 5.196099773, 5.603673469, 5.959909297, 6.238798186, 6.629637188, 7.009954649, 7.198911565, 7.380136054, 7.558095238, 7.74585034, 8.103401361, 8.433287982, 8.83537415, 9.501950113, 9.918163265, 10.284013605, 10.669387755, 11.007346939, 11.382857143, 11.731655329, 11.906938776, 12.074557823, 12.289410431, 12.470861678, 12.636371882, 12.810634921, 12.97154195, 13.215464853, 13.392539683, 13.699478458, 13.980521542, 14.297324263, 14.645238095, 15.015487528, 15.354807256, 15.736485261, 16.118594104, 16.490657596, 16.850362812, 17.257959184, 17.614829932, 17.818095238, 18.011473923, 18.202471655, 18.37739229, 18.571043084, 18.752154195, 18.958367347, 19.22122449, 19.444603175, 19.653650794, 19.814353741, 19.986281179, 20.16829932, 20.325827664, 20.535419501, 20.744217687, 20.927777778, 21.10446712, 21.283877551, 21.466281179, 21.636371882, 21.799705215, 22.02122449, 22.349954649, 22.531609977, 22.690612245, 22.861972789, 23.033061224, 23.211360544, 23.417777778, 23.601496599, 23.780839002, 23.97414966, 24.168185941, 24.363446712, 24.536984127, 24.738888889, 24.944988662, 25.124897959, 25.297188209, 25.481156463, 25.671791383, 25.860249433, 26.030136054, 26.205056689, 26.387120181, 26.5538322, 26.737868481, 26.924557823, 27.103219955, 27.276099773, 27.44723356, 27.628662132, 27.825487528, 28.010657596, 28.196417234, 28.384943311, 28.5569161, 28.738435374, 28.905555556, 29.108684807, 29.284829932, 29.474353741, 29.660090703, 29.843650794, 30.042947846, 30.222040816];
var steps = ['left', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'left', 'down', 'down', 'right', 'right', 'right', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'up', 'up', 'up', 'up', 'up', 'up', 'up', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'down', 'down', 'down', 'down', 'down', 'down', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'left', 'left', 'left', 'left', 'left', 'left'];
//var times = [2.956643991, 3.254195011, 3.698888889, 4.072380952];
//var steps = ['left', 'right', 'up', 'down'];

var idx = 0;

var start = Date.now();

// Render function //
function render() {
	// frame++;
	if ((Date.now() - start)/1000 - times[idx] < 2) {

		notes.push(new Arrow(steps[idx], times[idx]));
		idx++;
		// randomGen();


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
	song.pause();
	song.play();

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

	var top_margin = 650;
	var bottom_margin = 800;
	for (var i = 0; i < notes.length; i++) {
	
			// console.log(notes[i].image.position().top);

		if (event.keyCode == 37 && notes[i].direction == "left") {
			if (notes[i].image.position().top > top_margin && notes[i].image.position().top < bottom_margin) {

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

			if (notes[i].image.position().top > top_margin && notes[i].image.position().top < bottom_margin) {
				
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

			if (notes[i].image.position().top > top_margin && notes[i].image.position().top < bottom_margin) {
				
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

			if (notes[i].image.position().top > top_margin && notes[i].image.position().top < bottom_margin) {
				
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




