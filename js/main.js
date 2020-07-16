fetch("https://api.github.com/users/araiara") //fetch default is GET method
	.then(response => response.json()) 
	.then(function(data) {
		//console.log(data)

		document.getElementById('myImage').src = data['avatar_url']
		document.getElementById('myName').textContent = data['name']
		document.getElementById('myGithubLink').href = data['html_url']
	})

fetch("https://api.github.com/users/araiara/repos")
	.then(response => response.json()) 
	.then(function(data) {
		//console.log(data)

		var tableBody = document.getElementById("tableBody");
		var statusHTML = '';
		data.forEach(Element => {
		    statusHTML += '<tr>';
		    statusHTML += '<td>' + Element['id'] + '</td>';
		    statusHTML += '<td>' + Element['name'] + '</td>';
		    statusHTML += '<td>' + Element['html_url'] + '</td>';
		    statusHTML += '</tr>';
		});
		tableBody.innerHTML = statusHTML;
	})