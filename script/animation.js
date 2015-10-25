
var classes = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

var holder_big= document.createElement('div'),
	holder_small= document.createElement('div'),
	holder_central= document.createElement('div'),
	holder;

window.onload = function() {
	holder = document.getElementsByClassName('holder')[0];

	holder_big.className = "big-circles";
	holder_small.className = "small-circles";
	holder_central.className = "big-squares";

	holder.appendChild(holder_big);
	holder.appendChild(holder_small);
	holder.appendChild(holder_central);

	for(i = 0; i < 8; i++) {
		var child = createBigCircle();
		holder_big.appendChild(child);
		animate(child, classes[i]);
	}

	setTimeout(function() {
		for(i = 0; i < 8; i++) {
			var child;
			if(i % 2 == 0)
				child = createSmallCircle();
			else
				child = createSmallSquare();

			holder_small.appendChild(child);
			child.className += " " + classes[i];
			child.style.opacity = 1;
		}
	}, 2000);

	setTimeout(function() {
		for(i = 0 ; i < 2 ; i++){
			var child = createCentralSquare();
			holder_central.appendChild(child);
			animate(child, classes[i]);
		}
	}, 10000);
}

function animate(div, classname) {
	setTimeout(function() {
		div.className += " " + classname;
		div.style.opacity = 1;
	}, 200);
}

function createBigCircle() {
	var div = document.createElement('div');
	div.className ="big circle";
	return div;
}

function createSmallCircle() {
	var div = document.createElement('div');
	div.className ="small circle";
	return div;
}

function createSmallSquare() {
	var div = document.createElement('div');
	div.className ="small square";
	return div;
}

function createCentralSquare() {
	var div = document.createElement('div');
	div.className ="biggest square";
	return div;
}