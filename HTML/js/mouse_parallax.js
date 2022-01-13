//	Declare constants
const BACKGROUND_SPEED = 0.01;
const FOREGROUND_SPEED = 0.005;

//	Calculate center x and y
const CENTER_X = window.innerWidth/2;
const CENTER_Y = window.innerHeight/2;

//	Function called to update landing page parallax position
let UpdateParallax = (e) => {

	//	Get current mouse position
	let mouseX = e.clientX;
	let mouseY = e.clientY;

	//	Get reference to landing page elements
	let circle = document.querySelector('.landing .background');
	let title = document.querySelector('.landing .title');

	//	Calculate depths
	let backgroundDepth = `${70 - (mouseX - CENTER_X) * BACKGROUND_SPEED}px, ${-170 - (mouseY - CENTER_Y) * BACKGROUND_SPEED}px`;
	let foregroundDepth = `${-(mouseX - CENTER_X) * FOREGROUND_SPEED}px, ${-(mouseY - CENTER_Y) * FOREGROUND_SPEED}px`;

	//	Update transform positions
	circle.style.transform = `translate(${backgroundDepth})`;
	title.style.transform = `translate(${foregroundDepth})`;

}

//	Add event listeners
document.addEventListener('mousemove', UpdateParallax);