var fakeNewsBuster = {};
fakeNewsBuster.profileLinkString = "profileLink";

// verify profiles every 5 seconds
fakeNewsBuster.verifyInterval = 5000;

// background color for the correct news anchor tags
fakeNewsBuster.validNewsAnchorBackgroundColor = "green";

// background color for the fake news anchor tags
fakeNewsBuster.fakeNewsAnchorBackgroundColor = "red";

// gets all news sources from facebook feed
fakeNewsBuster.getAllNewsSources = function () {
    var newsSources = document.querySelectorAll('[data-hovercard-referer="NEWSFEED"]');
    return newsSources;
}

// gets whether the link is valid or not
fakeNewsBuster.checkValidityOfLinkOrSource = function (anchorElement) {
    return true;
}

fakeNewsBuster.updateUserInterfaceBasedOnValidityOfNewsSources = function () {
    var newsSourcesInPage = fakeNewsBuster.getAllNewsSources();
    if (newsSourcesInPage && newsSourcesInPage.length > 0) {
        for (var i = 0; i < newsSourcesInPage.length; i++) {
            var anchorElement = newsSourcesInPage[i];           
            var isSourceValid = fakeNewsBuster.checkValidityOfLinkOrSource(anchorElement);

            if (isSourceValid) {
                anchorElement.style.backgroundColor = fakeNewsBuster.validNewsAnchorBackgroundColor;
            } else {
                anchorElement.style.backgroundColor = fakeNewsBuster.fakeNewsAnchorBackgroundColor;
            }
        }
    }
}

fakeNewsBuster.updateUserInterfaceBasedOnValidityOfNewsSources();

window.setInterval(fakeNewsBuster.updateUserInterfaceBasedOnValidityOfNewsSources, fakeNewsBuster.verifyInterval);


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

