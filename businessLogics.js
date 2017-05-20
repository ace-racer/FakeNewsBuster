var fakeNewsBuster = {};
fakeNewsBuster.hyperfeedString = "hyperfeed";

fakeNewsBuster.getAllDivs = function () {
    var divs = document.getElementsByTagName("div");
    alert("Div count: " + divs.length);
}

var divsInPage = fakeNewsBuster.getAllDivs();
if (divsInPage && divsInPage.length > 0) {
    for (var i = 0; i < divsInPage.length; i++) {
        var divId = divsInPage[i].id;
        if (divId) {
            if (divId.indexOf(fakeNewsBuster.hyperfeedString) !== -1) {
                console.log("Found div: " + divId);
                divsInPage[i].style.backgroundColor = "red";
            }
        }
    }
}

//var fakeNewsBuster = {};
//fakeNewsBuster.alexaRankingUrl = "http://data.alexa.com/data?cli=10&dat=snbamz&url=";
//fakeNewsBuster.checkUrl = function () {
//    // TODO: Get div from Facebook new feed and find out the URL
//    var url = "";
//    if(url)
//    {
//        var alexaRequestUrl = fakeNewsBuster.alexaRankingUrl + url;
//        $.ajax(alexaRequestUrl).
//            done(function(response){

//    }).fail(function(){
//    })
//    }
//}

