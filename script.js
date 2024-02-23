fetch('Articles/articles.json')
	.then(response => {
		if (!response.ok) {
			throw new Error(`Failed to fetch JSON file. Status: ${response.status}`);
		}
		return response.json();
	})
	.then(data => {
		// Process the JSON data
		for (articleID in data) {
			processArray(data[articleID]);
		}
	})
	.catch(error => {
		console.error('Error fetching JSON file:', error.message);
	});
var divvy=document.getElementById("articleList")

function processArray(arr) {
	var newElement=document.createElement("div");
	newElement.className='box';
	h2=document.createElement("h2");
	h2.innerHTML=arr["title"];
	p=document.createElement("p");
	p.innerHTML=arr["first_line"];
	hr=document.createElement("hr");
	newElement.appendChild(h2);
	newElement.appendChild(hr);
	newElement.appendChild(p)
	divvy.appendChild(newElement);
}