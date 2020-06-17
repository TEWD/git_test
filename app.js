let btn = document.querySelector("#useless");
const ts = document.querySelector("#timestamp");

btn.addEventListener('click',()  => {
	ts.classList.remove('animate');
	void ts.offsetWidth
	ts.classList.add('animate');

	let date = new Date();
	ts.innerText = date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds()
})