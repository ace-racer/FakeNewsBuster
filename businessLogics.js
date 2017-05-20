var fakeNewsBuster = {};
fakeNewsBuster.profileLinkString = "profileLink";
fakeNewsBuster.facebookUrls = ["https://www.facebook.com", "https://l.facebook.com"];

// verify profiles every 5 seconds
fakeNewsBuster.verifyInterval = 5000;

// background color for the correct news anchor tags
fakeNewsBuster.validNewsAnchorBackgroundColor = "green";

// background color for the fake news anchor tags
fakeNewsBuster.fakeNewsAnchorBackgroundColor = "red";

// checks if the link is internal to Facebook
fakeNewsBuster.isLinkInternalToFacebook = function (linkUrl) {
    if (linkUrl) {
        for (var i = 0; i < fakeNewsBuster.facebookUrls.length; i++) {
            if(linkUrl.startsWith(fakeNewsBuster.facebookUrls[i])){
                return true;
            }
        }
    }

    return false;
}

// gets all news sources from facebook feed
fakeNewsBuster.getAllNewsSources = function () {
    var allAnchorTags = document.querySelectorAll('[target="_blank"]');
    var newsSources = [];
    for (var i = 0; i < allAnchorTags.length; i++) {
        var linkReference = allAnchorTags[i].href;
        if (linkReference) {
            // if the link is an external URL
            if (!fakeNewsBuster.isLinkInternalToFacebook(linkReference)) {
                newsSources.push(allAnchorTags[i]);
            }
        }
    }
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

