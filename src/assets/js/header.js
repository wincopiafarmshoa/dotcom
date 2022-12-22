

window.addEventListener("load", function(event) {
	let burger = document.querySelector('.wf-burger-menu')
	let nav = document.querySelector('.wf-header-navigation-list')
	burger.addEventListener('click', function () { 
		nav.classList.toggle('open')
	})
});