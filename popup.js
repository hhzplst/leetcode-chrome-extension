let day = document.getElementById('day');
let challenge = document.getElementById('challenge');

function init() {

	const totalChallenge = 65;

	let date = new Date();
    let time = new Date(date.getTime());
    time.setMonth(date.getMonth() + 1);
    time.setDate(0);
    let remain = time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;

	let close = document.querySelector('.select-menu.branch-select-menu.js-menu-container.js-select-menu.float-left');
	if(close) close.classList.add('is-dirty', 'active');
	let branchNum = document.querySelector('[data-filterable-for="context-commitish-filter-field"]').childElementCount;

	close.classList.remove('is-dirty', 'active');
	
	return {
		day: remain,
		challenge:  totalChallenge - branchNum + 1
	}
}

chrome.tabs.executeScript({
	code: `(${init})()`
}, (results) => {
	day.innerHTML = results[0].day;
	challenge.innerHTML = results[0].challenge;
});

