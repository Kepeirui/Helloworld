var response;
var xhr = new XMLHttpRequest();
xhr.open("get", "https://copperay.github.io/res/ZRM_Aux-code_2.0.txt", true);
xhr.send();
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4 && xhr.status == 200) {
		response = xhr.responseText;
		console.log("table ready");
		inpChar.value = "柯";
		outputBox.value = "· m\n· m + k";
	}
}

function query() {
	outputBox.value = null;
	var i = response.indexOf(inputBox.value, i+1);
	while (i != -1) {
		if (response[i+4] == '\n') {
			outputBox.value += "· " + response[i+2] + "\n";
		}
		else {
			outputBox.value += "· " + response[i+2] + " + " + response[i+3] + "\n";
		}
		i = response.indexOf(inputBox.value, i+1);
	}
	inpChar.value = inputBox.value;
}
