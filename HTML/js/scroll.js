//	Declare constants
const NAVBAR_THRESHOLD = 30;

//	Function called to update header state on scroll
let UpdateHeader = (e) => {
	
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

//	Subscribe to event listeners
document.addEventListener('scroll', UpdateHeader);