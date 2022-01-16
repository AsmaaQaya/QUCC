//	Function called to flip card
let FlipCard = (index) => {

	//	Toggle flipped class
	document.getElementById(`card_${index}`).classList.toggle('flipped');

}