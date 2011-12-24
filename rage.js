/* @amosrivera
 * 24 - 12 - 11 
 * emoticons on fb
 *
 * use semicolons to delimit emoticon names like :lol:
 * it should look like http://i.imgur.com/ciRUO.png
 *
 * you can copy and paste this code in the console or 
 * drag this link into your bookmarks and click it
 * when you are in fb: 
 * http://jsfiddle.net/s2pry/embedded/result/
 */

// emoticon list
var rageList = {
    alone:     "http://i.imgur.com/OxT5e.png",
    yeah:      "http://i.imgur.com/j1kjJ.png",
    lol:       "http://i.imgur.com/uZdRQ.png",
    pc:        "http://i.imgur.com/WUDAx.png",
    challenge: "http://i.imgur.com/QSvSy.png",
    yuno:      "http://i.imgur.com/JgIcK.png"
};

// regular expression handler
var rageHandler = function(match,key) {

    // if found in the emoticon list return image html else just return unmodified
    return rageList[key] ? "<img src='"+rageList[key]+"' title='"+key+"' />" : match;

};

// event documentation http://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMNodeInserted
// yes, it is deprecated on dom level 3 spec but works well
document.addEventListener("DOMNodeInserted", function (event) { 
    var message = event.srcElement; // get target element if the event

    // if it has a class and the first one is "fbChatMessage" 
    if( message.className && message.className.split(" ")[0] === "fbChatMessage" ) {
       
        // find any word within semicolons and call the regex handlr
        message.innerHTML = message.innerHTML.replace(/:(\w+):/gm, rageHandler );    
    }
});
