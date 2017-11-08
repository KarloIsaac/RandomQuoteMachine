
function mycallback(jsonObject) {
    document.getElementById("change_holder").innerHTML = jsonObject.quoteText;
}


function requestQuote() {
    var s = document.createElement("script");
    s.src = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=mycallback";
    document.body.appendChild(s);
}
