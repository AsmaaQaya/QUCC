//	Declare constants
const NAVBAR_THRESHOLD = 30;
const LANDING_THRESHOLD = 0;

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

	//	Check if past landing section
	if (scrollY >= LANDING_THRESHOLD) {

		//	Set section, body and navbar to active
		section.classList.add('active');
		navbar.classList.add('active');
		setTimeout(() => body.classList.add('active'), 5500);

	}

}

//	Subscribe to event listeners
document.addEventListener('scroll', UpdateHeader);
document.addEventListener('DOMContentLoaded', CheckLanding);