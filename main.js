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