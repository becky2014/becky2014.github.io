buttons = document.getElementsByTagName('button');

for (var b = 0; b < buttons.length; b++) {
	buttons[b].addEventListener("click", ClickHandler);
}

function ClickHandler() {
	if (this.innerHTML == "More") {
		this.innerHTML = "Preferences";
		var other_selectors = document.getElementsByClassName("selectors");
		for (var b = 0; b < other_selectors.length; b++) {
			other_selectors[b].style.visibility = "visible";
		}
	}
	if (this.innerHTML == "Less") {
		var other_selectors = document.getElementsByClassName("selectors");
		for (var b = 0; b < other_selectors.length; b++) {
			if (other_selectors[b].className.indexOf("more") > -1) {
				other_selectors[b].style.visibility = "hidden";
			} else if (other_selectors[b].innerHTML == "Preferences") {
				other_selectors[b].innerHTML = "More";
			}
		}
	}
}
