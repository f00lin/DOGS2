// capture webview
var webview=document.querySelector("webview");




////// VARIABLES


// image sources
var googleBase = "https://www.google.com/search?tbm=isch&q=";
var bingBase = "https://www.bing.com/images/search?q=";
var flickrBase="https://www.flickr.com/search?q=";
var baseURLS = [googleBase, bingBase, flickrBase];


// video sources
var youtubeBase = "https://www.youtube.com/results?search_query=";
var videoBaseURLS = [youtubeBase];


// search terms
var primaryTerm = ["dogs", "puppies"];

var secondaryTerm = ["bad", "good", "dumb", "gif", "greedy", "naughty", "loving", "newborn", "cute",
                     "loyal", "misbehaving", "playing", "running", "swimming", "fetching", "working",
                     "beach", "in clothes", "shaming", "caught", "sleeping", "eating", "being bros",
                     "memes", "playing ball", "chewing", "walkies", "micro", "fancy dress", "teacup",
                     "fat"];





////// RANDOMISERS


// random 50/50 tester
var randomYesNoTest = function() {
    var rand = Math.random();
    if(rand >= 0.5) {
        var answer = 0;
    }
    else {
        var answer = 1;
    }
    return answer
}


// returns a random item from a given array
var randomArrayChoice = function(array) {
    // generate a random number based on length of array
    var rand = Math.random();
    rand *= array.length;
    rand = Math.floor(rand);
    // return that random selection
    return array[rand];
}






////// SEARCHES


// selects a random site and performs a random search
var randomSitePics = function() {
    
    var baseURL = randomArrayChoice(baseURLS);
   
    var searchTerm = randomArrayChoice(primaryTerm) + "+" + randomArrayChoice(secondaryTerm);
    
    webview.src = baseURL + searchTerm;
}


// boston terrier search
var bostonSearch = function() {
    
    var baseURL = randomArrayChoice(baseURLS);
    
    var searchTerm = "boston terrier" + "+" + randomArrayChoice(secondaryTerm);
    
    webview.src = baseURL + searchTerm;
}


// french bulldog search
var bullSearch = function() {
    
    var baseURL = randomArrayChoice(baseURLS);
    
    var searchTerm = "french bulldog" + "+" + randomArrayChoice(secondaryTerm);
    
    webview.src = baseURL + searchTerm;
}


// boxer search
var boxerSearch = function() {
    
    var baseURL = randomArrayChoice(baseURLS);
    
    var searchTerm = "boxer dog" + "+" + randomArrayChoice(secondaryTerm);
    
    webview.src = baseURL + searchTerm;
}

            

// video search
var videoSearch = function() {
    
    var baseURL = randomArrayChoice(videoBaseURLS);
    
    var searchTerm = randomArrayChoice(primaryTerm) + "+" + randomArrayChoice(secondaryTerm);
    
    webview.src = baseURL + searchTerm;
}
    
    






////// HANDLERS
            


// random search handler
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#random').addEventListener('click', function() {
        randomSitePics();
    }, false)
});


// video search handler
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#video').addEventListener('click', function() {
        videoSearch();
    }, false)
});


// breed search handlers
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#boston').addEventListener('click', function() {
        bostonSearch();
    }, false)
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#bull').addEventListener('click', function() {
        bullSearch();
    }, false)
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#boxer').addEventListener('click', function() {
        boxerSearch();
    }, false)
});



// load random site and search at launch
document.addEventListener('DOMContentLoaded', function () {
    randomSitePics();
}, false)
