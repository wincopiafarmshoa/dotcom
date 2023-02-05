

window.addEventListener("load", function(event) {
	let burger = document.querySelector('.wf-burger-menu')
	let nav = document.querySelector('.wf-header-navigation-list')
	let navItems = document.querySelectorAll('.wf-header-navigation-list-item')

	burger.addEventListener('click', function () {
		nav.classList.toggle('open')
	});

	for (let i = 0; i < navItems.length; i++) {
		navItems[i].addEventListener('click', function () {
			navItems[i].classList.toggle('open')
		});
	}
});