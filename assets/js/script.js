const nav = document.querySelector("nav");

window.onscroll = function () {

	let top = window.scrollY;

	if (top >= 100) {
		nav.classList.add("header-scrolled");
	} else {
		nav.classList.remove("header-scrolled");
	}

}

