chrome.runtime.onMessage.addListener(function (status, sender, sendResponse) {
	changeFontSize();
})
function customiseCss() {
	document.getElementById('f_r1').remove();
	document.getElementById('lft0').style.width = '100%';
	document.getElementById('bnav').style.width = '100%';
}
customiseCss();


function changeFontSize() {
	let textElement = document.getElementById('lft')
	let answer = confirm('Do you want to change font size?');
	if(answer) {
		let size = prompt('Please write the size of text', "100%");
		if (size.includes('%') || size.includes('px')){
			textElement.style.fontSize = size;
		} else {
			textElement.style.fontSize = size + 'px';
		}
	}
}