$(document).ready( function(){
	let text = '';
	let author = '';
	function  getQuote(){
		$.get('https://talaikis.com/api/quotes/random/', function(response){ 
		text =  response.quote;
		author = "--"+ response.author;
     	$("#quote").html(text);
     	$("#author").html(author);
     	});
	}
  function  tweet(){
    //$("#tweet").attr("href", 'https://twitter.com/intent/tweet?text=' + text);
    	$("#tweet").attr('href', 'https://twitter.com/intent/tweet?hashtags=jsForLife&related=freecodecamp&text=' + encodeURIComponent('"' + text + '" ' + author));
  }

	getQuote();

	$("#random").click(getQuote);
  $("#tweet").click(tweet);

});
