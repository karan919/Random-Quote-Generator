$(document).ready( function(){
	let text = '';
	let author = '';
	function  getQuote(){
		$.get('https://talaikis.com/api/quotes/random/', function(response){ 
		text = "--"+ response.quote;
		author = response.author;
     	$("#quote").html(response.quote);
     	$("#author").html("--"+response.author);
     	});
	}

			
	//$("#tweet").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes/&related=freecodecamp&text=' + encodeURIComponent('"' + text + '" ' + author));
	$("#tweet").attr("href", 'https://twitter.com/intent/tweet?text=' + text);

	getQuote();

	$("#random").click(getQuote);
	//$("#tweet").click(tweet);

	
	
});
