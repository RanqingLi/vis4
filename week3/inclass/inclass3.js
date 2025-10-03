let history = []

function updatehistory() {
	let historyContent = '';

	for (var i=0; i < history.length; i++) {
		historyContent += "<li>" + history[i] + "</li>";//<li>item list-for text,div for physical area
	}

    document.querySelector('#historylist').innerHTML = historyContent;
}