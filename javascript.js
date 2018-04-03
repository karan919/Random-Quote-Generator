function loadDoc() {
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