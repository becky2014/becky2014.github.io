buttons = document.getElementsByTagName('button');

for (var b = 0; b < buttons.length; b++) {
	buttons[b].addEventListener("click", ClickHandler);
}

var qs = document.location.search.split("&");
var prefs = [];

for (var i = 0; i < qs.length; i++) {
	var elem = qs[i].split("=");
	if (elem[0] == "prefs") {
		prefs = decodeURIComponent(elem[1]).split(",");
	}
}

function ClickHandler() {

	if (this.innerHTML == "Save") {

		document.location = "index.html?prefs=" + encodeURIComponent(Array.prototype.join.call(prefs, ","));

	} else {

		prefs.push(this.innerHTML);
		this.style.background = "red";

	}

}
