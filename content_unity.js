function toggleVisibility(hide){
    document.querySelectorAll('.ifont-favorite-border')
        .forEach(x=>x.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.hidden = hide)
}

// Listen for messages from the extension
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "toggleVisibility") {
            toggleVisibility(request.hide);
        }
    }
);