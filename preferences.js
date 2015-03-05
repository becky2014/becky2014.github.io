buttons = document.getElementsByTagName('button');

for (var b = 0; b < buttons.length; b++) {
    buttons[b].addEventListener("click", ClickHandler);
}

var qs = document.location.search.split("&");

// remove leading ?
if (qs.length > 0) {
    qs[0] = qs[0].slice(1);
}

var prefs = [];
var oldpref;

// mark already set preferences and store in prefs array
for (var i = 0; i < qs.length; i++) {
    var elem = qs[i].split("=");
    if (elem[0] == "prefs") {
        prefs = decodeURIComponent(elem[1]).split(",");
        for (var b = 0; b < buttons.length; b++) {
            if (prefs.indexOf(buttons[b].innerHTML) > -1) {
                buttons[b].style.background = "red";
            }
        }
        oldpref = i;
    }
}

// remove old prefs from query string
qs = qs.slice(0, oldpref) + qs.slice(oldpref + 1);

function ClickHandler() {

    if (this.innerHTML == "Save") {
    
        // return new prefs with other query string stuff
        document.location = "index.html?prefs=" + encodeURIComponent(Array.prototype.join.call(prefs, ",")) + "&" + qs;
    
    } else if (this.innerHTML == "Cancel") {
    
        // abort any changes
        document.location = "index.html" + document.location.search;
    
    } else {
    
        // toggle button, store or remove from prefs
        if (prefs.indexOf(this.innerHTML) > -1) {
    	
            var ind = prefs.indexOf(this.innerHTML);
            newprefs = [];
            for (var i = 0; i < prefs.length; i++) {
                if (i != ind) {
                    newprefs.push(prefs[i]);
                }
            }
            prefs = newprefs;
            this.style.background = "antiquewhite";
    
        } else {
    
            prefs.push(this.innerHTML);
            this.style.background = "red";
    
        }
    }

}
