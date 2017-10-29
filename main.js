var quoteList = [
	"When in doubt, twerk it out",
	"A spoonful of sugar makes bad news go down easier",
	"All is fair in love, war, and ice cream",
	"Quoth the raven, party on",
	"Do doves really cry, Prince?",
	"How many Lowes would Rob Lowe Rob?",
	"You win some, you win some"
]

var imageList = [
	"images/benches.jpg",
	"images/climbing.jpg",
	"images/into_the_forest.jpg",
	"images/road.jpg",
	"images/sunset.jpg",
	"images/two-giraffes.jpg",
	"images/wood_fence.jpg"
]

var generateQuote = function(){
 var quote = document.getElementById('quote');
 var index = Math.floor(Math.random() * quoteList.length);
 quote.innerHTML = '"' + quoteList[index] + '"';
}

var generateImage = function(){
	var index = Math.floor(Math.random() * imageList.length);
	document.getElementById('image').setAttribute("src", imageList[index]);
}

var generatePoster = function() {
	generateImage();
	generateQuote();
}