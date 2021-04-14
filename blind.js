//Initial value for blur level
var blurLevel = "5";
//Just to throw the person off, the blur only appears sometimes.
if (Math.random() > 0.5) {
    //The content script asks the background script for the value of the blur and retrieves it.
    chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
        blurLevel = response.farewell.toString();
	//Sets filter to the retrieved blur, causing confusion about status of vision.
        document.body.style.filter = "blur(" + (parseFloat(blurLevel) * 0.1).toString() + "px)";
    });
} else {}