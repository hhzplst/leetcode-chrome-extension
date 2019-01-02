chrome.runtime.onInstalled.addListener(() => {
	console.log('hello world!');
	chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({	 
          pageUrl: {
          	hostEquals: 'github.com',
          	pathEquals: '/hhzplst/leetcode-js',
          	schemes: ['https']
          }
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});