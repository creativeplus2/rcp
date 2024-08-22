function initCheckScrollUpDown() {
	var lastScrollTop = 0;
	var threshold = 0;
	const navbar = document.querySelector(".header");

	/**
	 * Native Scroll up or Down
	 */
	function startCheckScroll() {
		var nowScrollTop = window.scrollY;

		if (Math.abs(lastScrollTop - nowScrollTop) >= threshold) {
			if (nowScrollTop > lastScrollTop) {
				navbar.classList.add("scroll-direction-down");
				navbar.classList.remove("scroll-direction-up");
			} else {
				navbar.classList.remove("scroll-direction-down");
				navbar.classList.add("scroll-direction-up");
			}
			lastScrollTop = nowScrollTop;
			if (nowScrollTop > threshold) {
				navbar.classList.add("scroll-scrolled");
				navbar.classList.remove("scroll-on-the-top");
			} else {
				navbar.classList.remove("scroll-scrolled");
				navbar.classList.add("scroll-on-the-top");
			}
		}
	}
	window.addEventListener("scroll", startCheckScroll);
}

function toogleHamburgerButton(isActive, hamburger) {

	if (isActive) {
		// document.querySelector("body").classList.add("overflow-hidden");
		hamburger.classList.add("active");
		document.querySelector(".mobile-nav").classList.add("active");
	} else {
		// document.querySelector("body").classList.remove("overflow-hidden");
		hamburger.classList.remove("active");
		document.querySelector(".mobile-nav").classList.remove("active");


	}
}
function hamburgerButton() {
	let hamburger = document.querySelector(".hamburger");
	let isActive = false;
	hamburger.addEventListener("click", function () {
		isActive = !isActive;
		toogleHamburgerButton(isActive, hamburger);
	});
}

export { initCheckScrollUpDown, hamburgerButton };
