
function mycallback(jsonObject) {
    document.getElementById("quote_holder").innerHTML = "\"" + jsonObject.quoteText + "\"";
    document.getElementById("author").innerHTML = jsonObject["quoteAuthor"];
}


function requestQuote() {
    var jsonpRequesterScript = document.getElementById("jsonpRequester");
    document.body.removeChild(jsonpRequesterScript);
    jsonpRequesterScript = document.createElement("script");
    jsonpRequesterScript["src"] = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=mycallback";
    jsonpRequesterScript.id = "jsonpRequester";
    document.body.appendChild(jsonpRequesterScript);
}
