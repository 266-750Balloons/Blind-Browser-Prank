chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.greeting === "hello")
        if(localStorage.getItem("Bob") === null) {
            localStorage.setItem("Bob", "0");
        } else {
            if(parseInt(localStorage.getItem("Bob"), 10) < 20) {
                localStorage.setItem("Bob", (parseInt(localStorage.getItem("Bob"), 10)+1).toString());
            } else {
                localStorage.setItem("Bob", (Math.floor(Math.random()*10)));
            }
        }
      sendResponse({farewell: localStorage.getItem("Bob")});
    }
  );