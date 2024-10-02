document.onreadystatechange = updateClock();

function updateClock() {
	const username = "Tiago";
	const date = new Date();
	document.getElementById("current-time-text").innerText =
		date.toLocaleTimeString([], { hourCycle: "h23" });
	const hour = date.getHours();

	if (hour < 5 || hour >= 18) {
		document.getElementById(
			"time-greeting-text"
		).innerText = `Good evening ${username}`;
	} else if (hour < 12) {
		document.getElementById(
			"time-greeting-text"
		).innerText = `Good morning ${username}`;
	} else {
		document.getElementById(
			"time-greeting-text"
		).innerText = `Good afternoon ${username}`;
	}
}

function doSearch() {
	const query = document.getElementById("search-input").value;
	switch (document.getElementById("search-engine-select").value) {
		case "google":
			window.location.href = `https://www.google.com/search?q=${query}`;
			break;
		case "bing":
			window.location.href = `https://www.bing.com/?q=${query}`;
			break;
		case "ddg":
			window.location.href = `https://www.duckduckgo.com/?q=${query}`;
	}
}

document.querySelector("#search-button").addEventListener("click", doSearch);

document
	.getElementById("search-input")
	.addEventListener("keypress", function onEvent(event) {
		if (event.key === "Enter") {
			document.getElementById("search-button").click();
		}
	});

document
	.getElementById("search-engine-select")
	.addEventListener("change", () => {
		const value = document.getElementById("search-engine-select").value;
		localStorage.setItem("search-engine", value);
	});

document.addEventListener("DOMContentLoaded", () => {
	const searchEngine = localStorage.getItem("search-engine");
	if (searchEngine) {
		document.getElementById("search-engine-select").value = searchEngine;
	}
});

setInterval(updateClock, 1000);
