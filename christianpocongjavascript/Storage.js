function SaveItem() {

	var name = document.forms.ListOfDebt.name.value;
	var data = [];
    data.push(document.forms.ListOfDebt.data.value);
	data.push(document.forms.ListOfDebt.commend.value);
	data.push(document.forms.ListOfDebt.borrowed.value);
	data.push(document.forms.ListOfDebt.payment.value);
	localStorage.setItem(name, JSON.stringify(data));
	doShowAll();

}

function ModifyItem() {
	var name = document.forms.ListOfDebt.name.value;
	document.forms.ListOfDebt.data.value = JSON.parse(localStorage.getItem(name))[0];
	document.forms.ListOfDebt.commend.value = JSON.parse(localStorage.getItem(name))[1];
	document.forms.ListOfDebt.borrowed.value = JSON.parse(localStorage.getItem(name))[2];
	document.forms.ListOfDebt.payment.value = JSON.parse(localStorage.getItem(name))[3];
	doShowAll();
}

function RemoveItem() {
	var name = document.forms.ListOfDebt.name.value;
	localStorage.removeItem(name);
	doShowAll();
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

// dynamically draw the table

function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Full name</th><th>Address</th><th>Value</th><th>Date Borrowed</th><th>Promise Payment</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ JSON.parse(localStorage.getItem(key))[0] + "</td><td>"+ JSON.parse(localStorage.getItem(key))[1]
					+ "</td><td>"+ JSON.parse(localStorage.getItem(key))[2] + "</td><td>"+ JSON.parse(localStorage.getItem(key))[3] +"</td></tr>\n";
		}
		if (list == "<tr><th>Full name</th><th>Address</th><th>Value</th><th>Date Borrowed</th><th>Promise Payment</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store ListOfDebt as your browser do not support local storage');
	}
}


/*
 * Checking the browser compatibility.
 *
 * Alternately can use Modernizr scripts- JavaScript library that helps us to
 * detect the browser support for HTML5 and CSS features Example - <script
 * type="text/javascript" src="modernizr.min.js"></script>
 *
 * if (Modernizr.localstorage) { //use localStorage object to store data } else {
 * alert('Cannot store user preferences as your browser do not support local
 * storage'); }
 */
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}