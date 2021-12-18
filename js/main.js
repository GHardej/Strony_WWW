document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('nav');

	function addShadow() {
		if (window.scrollY >= 200) {
			nav.classList.add('nav-shadow');
		} else {
			nav.classList.remove('nav-shadow');
		}
	}

	window.addEventListener('scroll', addShadow);
});
