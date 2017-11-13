
function mycallback(jsonObject) {
    document.getElementById("quote_holder").innerHTML = "\"" + jsonObject.quoteText + "\"";
    document.getElementById("author").innerHTML = jsonObject["quoteAuthor"];
}


function requestQuote() {
    var jsonpRequesterScript = document.getElementById("jsonpRequester");
    document.body.removeChild(jsonpRequesterScript);
    jsonpRequesterScript = document.createElement("script");
    jsonpRequesterScript["src"] = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=mycallback";
    jsonpRequesterScript.id = "jsonpRequester";
    document.body.appendChild(jsonpRequesterScript);
}


function postToTwitter() {
    var twitterWebIntentUrl = "https://twitter.com/intent/tweet?text=";
    var quote = document.getElementById("quote_holder").textContent;
    var author = document.getElementById("author").innerHTML;
    twitterWebIntentUrl = twitterWebIntentUrl + quote + author;
    twitterWebIntentUrl = encodeURI(twitterWebIntentUrl);
    window.open(twitterWebIntentUrl);
}
