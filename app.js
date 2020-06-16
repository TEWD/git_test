let btn = document.querySelector("#useless");
let bup = document.querySelector("#bup");

btn.addEventListener('click',()  => {
	let date = new Date();
	bup.innerHTML = date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds()
})