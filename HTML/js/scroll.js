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
			body.classList.add('unlocked');

		}
		else if (i == 1) {

			//	Get events section and navbar
			let section = document.querySelector('.events');

			//	Set section to active
			section.classList.add('active', 'preloaded');

		}
		else if (i == 2) {

			//	Get elements section and navbar
			let section = document.querySelector('.elements');

			//	Set section to active
			section.classList.add('active', 'preloaded');

		}
		else if (i == 3) {

			//	Get finished product section and navbar
			let section = document.querySelector('.finished_product');

			//	Set section to active
			section.classList.add('active', 'preloaded');

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
	if (scrollY > 30) {

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
	if (scrollY >= 0) {

		//	If not already visible
		if (activeIndex < 0) {

			//	Set section, body and navbar to active
			section.classList.add('active');
			navbar.classList.add('active');
			setTimeout(() => body.classList.add('unlocked'), 5500);

			//	Update active index
			activeIndex = 0;

			//	Save to session storage
			sessionStorage.setItem('activeIndex', activeIndex);

		}
		else if (document.querySelector('.events').getBoundingClientRect().top > 200) {

			//	Switch active section to this
			document.querySelector('.navbar .active.link').classList.remove('active');
			document.querySelector('#landing_link').classList.add('active');

		}

	}

}

//	Function called to check if events section should be visible
let CheckEvents = () => {

	//	Get events section
	let section = document.querySelector('.events');

	//	Check if past events section
	if (section.getBoundingClientRect().top <= 200) {

		//	If not already visible
		if (activeIndex < 1) {

			//	Set section to active
			section.classList.add('active');

			//	Update active index
			activeIndex = 1;

			//	Save to session storage
			sessionStorage.setItem('activeIndex', activeIndex);

		}
		else if (document.querySelector('.elements').getBoundingClientRect().top > 200) {

			//	Switch active section to this
			document.querySelector('.navbar .active.link').classList.remove('active');
			document.querySelector('#events_link').classList.add('active');

		}

	}

}

//	Function called to check if elements section should be visible
let CheckElements = () => {

	//	Get elements section
	let section = document.querySelector('.elements');

	//	Check if past elements section
	if (section.getBoundingClientRect().top <= 200) {

		//	If not already visible
		if (activeIndex < 2) {

			//	Set section to active
			section.classList.add('active');

			//	Update active index
			activeIndex = 2;

			//	Save to session storage
			sessionStorage.setItem('activeIndex', activeIndex);

		}
		else if (document.querySelector('.finished_product').getBoundingClientRect().top > 200) {

			//	Switch active section to this
			document.querySelector('.navbar .active.link').classList.remove('active');
			document.querySelector('#elements_link').classList.add('active');

		}

	}

}

//	Function called to check if finished product section should be visible
let CheckFinishedProduct = () => {

	//	Get current scroll position
	let scrollY = window.scrollY;

	//	Get finished product section
	let section = document.querySelector('.finished_product');

	//	Check if past finished product section
	if (section.getBoundingClientRect().top <= 200) {

		//	If not already visible
		if (activeIndex < 3) {

			//	Set section to active
			section.classList.add('active');

			//	Update active index
			activeIndex = 3;

			//	Save to session storage
			sessionStorage.setItem('activeIndex', activeIndex);

		}
		else {

			//	Switch active section to this
			document.querySelector('.navbar .active.link').classList.remove('active');
			document.querySelector('#finished_product_link').classList.add('active');

		}

	}

}

//	Subscribe to event listeners
document.addEventListener('scroll', UpdateHeader);
document.addEventListener('scroll', CheckLanding);
document.addEventListener('scroll', CheckEvents);
document.addEventListener('scroll', CheckElements);
document.addEventListener('scroll', CheckFinishedProduct);
document.addEventListener('DOMContentLoaded', LoadState);
document.addEventListener('DOMContentLoaded', CheckLanding);