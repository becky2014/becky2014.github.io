var buttons = document.getElementsByTagName('button');

for (var b = 0; b < buttons.length; b++) {
	buttons[b].addEventListener("click", ClickHandler);
}

function ClickHandler() {

	var current_state = document.location.search;

	if (this.innerHTML == "More") {

		this.innerHTML = "Preferences";
		var other_selectors = document.getElementsByClassName("selectors");
		for (var b = 0; b < other_selectors.length; b++) {
			other_selectors[b].style.visibility = "visible";
		}

	} else if (this.innerHTML == "Less") {

		var other_selectors = document.getElementsByClassName("selectors");
		for (var b = 0; b < other_selectors.length; b++) {

			if (other_selectors[b].className.indexOf("more") > -1) {
				other_selectors[b].style.visibility = "hidden";

			} else if (other_selectors[b].innerHTML == "Preferences") {
				other_selectors[b].innerHTML = "More";

			}
		}

	} else if (this.innerHTML == "Scan Food") {

		document.location = "scan.html" + current_state;

	} else if (this.innerHTML == "Search Food") {

		document.location = "food_search.html" + current_state;

	} else if (this.innerHTML == "Pick a store") {

		document.location = "pick_store.html" + current_state;

	} else if (this.innerHTML == "Preferences") {

		document.location = "preferences.html" + current_state;

	} else if (this.innerHTML == "Favorites") {

		document.location = "favorites.html" + current_state;

	} else if (this.innerHTML == "History") {

		document.location = "history.html" + current_state;

	}
}
