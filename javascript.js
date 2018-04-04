$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("https://talaikis.com/api/quotes/random/");
    });
});
function sendDoc(){
	document.getElementById("demo").innerHTML="hello";
}

//https://api.twitter.com/1.1/statuses/update.json
/*
function sendDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("quote").innerHTML =
            this.responseText;
       }
    };
    xhttp.open("GET", "http://api.forismatic.com/api/1.0/", true);
    xhttp.send(); 
}
*/