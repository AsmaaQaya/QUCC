//	Declare constants
const NAVBAR_THRESHOLD = 30;
const LANDING_THRESHOLD = 0;

//	Active index
let activeIndex = -1;

//	Function called to load in state from session storage
let LoadState = () => {

	//	Get list from session storage
	activeIndex = sessionStorage.getItem('activeIndex') || -1;

	//	Loop through each item
	for (let i = 0; i <= activeIndex; i++) {

		//	If landing
		if (i == 0) {

			//	Get landing section and navbar
			let section = document.querySelector('.landing');
			let navbar = document.querySelector('.navbar');
			let body = document.querySelector('body');

			//	Set section, body and navbar to active
			section.classList.add('active', 'preloaded');
			navbar.classList.add('active', 'preloaded');
			body.classList.add('active', 'preloaded');

		}

	}
	
}

//	Function called to update header state on scroll
let UpdateHeader = () => {
	
	//	Get current scroll position
	let scrollY = window.scrollY;

	//	Get navbar
	let navbar = document.querySelector('.navbar');

	//	If scrolled past navbar threshold
	if (scrollY > NAVBAR_THRESHOLD) {

		//	Turn navbar to fixed position
		navbar.classList.add('fixed');

	}
	else {

		//	Revert navbar to normal position
		navbar.classList.remove('fixed');

	}

}

//	Function called to check if landing section should be visible
let CheckLanding = () => {

	//	Get current scroll position
	let scrollY = window.scrollY;

	//	Get landing section and navbar
	let section = document.querySelector('.landing');
	let navbar = document.querySelector('.navbar');
	let body = document.querySelector('body');

	//	Check if past landing section and not already visible
	if (scrollY >= LANDING_THRESHOLD && activeIndex < 0) {

		//	Set section, body and navbar to active
		section.classList.add('active');
		navbar.classList.add('active');
		setTimeout(() => body.classList.add('active'), 5500);

		//	Update active index
		activeIndex = 0;

		//	Save to session storage
		sessionStorage.setItem('activeIndex', activeIndex);

	}

}

//	Subscribe to event listeners
document.addEventListener('scroll', UpdateHeader);
document.addEventListener('DOMContentLoaded', LoadState);
document.addEventListener('DOMContentLoaded', CheckLanding);