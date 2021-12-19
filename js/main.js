document.addEventListener('DOMContentLoaded', function () {
	// funkcja dodająca cień do paska menu przy scroll

	const nav = document.querySelector('nav');

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('nav-shadow');
		} else {
			nav.classList.remove('nav-shadow');
		}
	}

	window.addEventListener('scroll', addShadow);

	// funkcja ukrywająca mobile menu po kliknięciu na link z menu
	const navbar = document.querySelector('.navbar-collapse')
	const navLinkClick = document.querySelector('.navbar-nav');
	// - alternatywne rozwiązanie
	// const allNavItems = document.querySelectorAll('.nav-link')

	// console.log(allNavItems);

    // allNavItems.forEach(item => item.addEventListener('click', () => navbar.classList.remove('show')))

	function removeMenu() {
		navbar.classList.remove('show');
	}

	navLinkClick.addEventListener('click', removeMenu);
});
