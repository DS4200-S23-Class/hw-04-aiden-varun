// create function that displays last point clicked
function lastPoint(select) {
	console.log("new point was clicked");

	let point = select.getAttribute('point'); 

	// Display the last coordinate
	let newText = "Last point clicked: " + point;

	// select the element
	let lastPoint = document.getElementById("last-point");

	// update the displayed text
	lastPoint.innerHTML = newText;

}

function addPointClick() {

	// get dropdowns by ID
	let xDrop = document.getElementById("xDropdown");
	let yDrop = document.getElementById("yDropdown");

	// get text from dropdown selection
	let x = xDrop.options[xDrop.selectedIndex].text;
	let y = yDrop.options[yDrop.selectedIndex].text;

	// convert y coordinate graph coordinate by subtracting from 10
	let yConverted = String(10 - Number(y));

	// convert coordinates to percentages to plot
	let xPercent = x + "0%";
	yPercent = yConverted + "0%";

	// get frame from ID and add circle
	let frame = document.getElementById("frame");
	let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")

	// add attributes
	circle.setAttribute('cx', xPercent);
	circle.setAttribute('cy', yPercent);
	circle.setAttribute('r', 10);
	circle.setAttribute("class", "point");
	circle.setAttribute("point", "("+x+","+y+")");
	
	// add click event listeners
	circle.addEventListener("click", () => lastPoint(circle));
	circle.addEventListener("click", () => addborder(circle));
	
	frame.appendChild(circle);
}

document.getElementById("addPoint").addEventListener("click", addPointClick);


// Create array of every point on graph
circles = Array.from(document.getElementsByClassName('circ'))

// Adds event listener for point that is clicked
circles.forEach(c => {
	c.addEventListener("click", () => addborder(c));
})

// Toggles border for circle selected
function addborder(c) {
	c.classList.toggle("addborder");
}