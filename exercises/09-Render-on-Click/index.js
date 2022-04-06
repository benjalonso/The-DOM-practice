let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let container = document.createElement("div");
	container.innerHTML("<p>Hello World</p>");
	container.style.background = "yellow";
	document.body.appendChild(container);
});