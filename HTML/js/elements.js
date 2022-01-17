//	Which index is the carousel on
let index = parseInt(localStorage.getItem('carouselIndex')) || 0;

//	Function called on startup to initialise carousel
let InitialiseCarousel = () => {

	//	Get carousel element
	let carousel = document.querySelector('.carousel');

	//	Loop through each element
	elements.forEach((element, i) => {

		//	Create container element
		let card = document.createElement('div');
		card.className = `${i < index ? 'left ' : i > index ? 'right ' : ''}card`;
		card.id = `element_${i}`;

		//	Generate card html
		let html = `
			<h1 class='header'>${element.name}</h1>\
			<p class='description'>${element.description}</p>
			<h1 class='meta'>Example Usage</h1>
			<div class='showcase'>
				<div class='input'>${element.input}</div>
				<div class='output'>${element.output}</div>
			</div>
		`;

		//	Add html to container element
		card.innerHTML = html;

		//	Add card to carousel
		carousel.appendChild(card);

	})

}

//	Function called to move carousel to the left
let MoveLeft = () => {

	//	If index is at the border then exit
	if (index <= 0) return

	//	Update current and previous element card
	document.getElementById(`element_${index}`).classList.add('right');
	document.getElementById(`element_${index - 1}`).classList.remove('left');

	//	Decrement index
	index--;

	//	Save index to local storage
	localStorage.setItem('carouselIndex', index);

}

//	Function called to move carousel to the right
let MoveRight = () => {

	//	If index is at the border then exit
	if (index >= elements.length - 1) return

	//	Update current and next element card
	document.getElementById(`element_${index}`).classList.add('left');
	document.getElementById(`element_${index + 1}`).classList.remove('right');

	//	Increment index
	index++;

	//	Save index to local storage
	localStorage.setItem('carouselIndex', index);

}

//	Subscribe to event listeners
document.addEventListener('DOMContentLoaded', InitialiseCarousel);