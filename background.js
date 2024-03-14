chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: ''
    });
});

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
        // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        // Next state will always be the opposite
        const nextState = prevState === '❤️' ? '' : '❤️';

        // Set the action badge to the next state
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState
        });

        if (nextState === '❤️') {
            chrome.tabs.sendMessage(tab.id, { action: "toggleVisibility", hide: true });
        } else if (nextState === '') {
            chrome.tabs.sendMessage(tab.id, { action: "toggleVisibility", hide: false });
        }

});