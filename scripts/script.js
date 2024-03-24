let start = Date.now();
let timer = setInterval(function() {
	let timePassed = Date.now() - start;
	if (timePassed >=5060) {
		clearInterval(timer);
		return;
	}
	draw(timePassed);
}, 20);



function draw(timePassed) {
	train.style.left = timePassed / 5 + 'px';
	train.style.top = timePassed / 5 + 'px';
}