var fakeNewsBuster = {};
fakeNewsBuster.profileLinkString = "profileLink";

// verify profiles every 5 seconds
fakeNewsBuster.verifyInterval = 5000;

fakeNewsBuster.getAllProfileLinks = function () {
    var profileLinks = document.getElementsByClassName(fakeNewsBuster.profileLinkString);
    return profileLinks;
}

fakeNewsBuster.checkValidityOfProfilesLinks = function () {
    var profileLinksInPage = fakeNewsBuster.getAllProfileLinks();
    if (profileLinksInPage && profileLinksInPage.length > 0) {
        for (var i = 0; i < profileLinksInPage.length; i++) {
            profileLinksInPage[i].innerHTML = profileLinksInPage[i].innerHTML + " Anurag";
        }
    }
}

fakeNewsBuster.checkValidityOfProfilesLinks();

window.setInterval(fakeNewsBuster.checkValidityOfProfilesLinks, fakeNewsBuster.verifyInterval);


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

