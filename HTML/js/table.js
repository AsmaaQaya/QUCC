//	Counter
let count = 0;

//	List of entries
let entries = [];

//	Function called when add new task button is clicked
let AddTableEntry = ({ title, deadline, priority }) => {

	//	Sanitise inputs
	title = title.replace('<', '').replace('>', '');
	deadline = deadline.replace('<', '').replace('>', '');
	priority = priority.replace('<', '').replace('>', '');

	//	Create a new container element
	let row = document.createElement('tr');
	row.className = 'active row entry';
	row.id = `row_${count}`;

	//	Generate row html
	let html = `
		<td class='tiny'></td>
		<td class='big'>${title}</td>
		<td class='small'>${deadline}</td>
		<td class='small'>${priority}</td>
		<td class='tiny actions' id='actions_${count}'><i onclick='ClickActionsButton(${count})' class='button fa fa-ellipsis-v'></i></td>
	`;

	//	Add html to row element
	row.innerHTML = html;

	//	Add to table body
	document.querySelector('.finished_product .list .table .rows').appendChild(row);

}

//	Function called to remove an entry
let RemoveTableEntry = (index) => {

	//	Find entry
	let entry = document.getElementById(`row_${index}`);

	//	Extract data from entry
	let data = {
		title		: entry.children[1].innerHTML.replace('<', '').replace('>', ''),
		deadline	: entry.children[2].innerHTML.replace('<', '').replace('>', ''),
		priority	: entry.children[3].innerHTML.replace('<', '').replace('>', ''),
	};

	//	Remove from list of entries
	for (let i = 0; i < entries.length; i++) {

		//	Get element at this index
		let elem = entries[i];

		//	If this element is getting removed
		if (elem.title == data.title && elem.deadline == data.deadline && elem.priority == data.priority) {

			//	Delete this entry
			entries.splice(i, 1);

			//	Save entries list to local storage
			localStorage.setItem('entries', JSON.stringify(entries));
			localStorage.setItem('count', count);

			//	Delete element
			setTimeout(() => entry.remove(), 150);

		}
	
	}

	//	Return the element being deleted
	return entry;

}

//	Function called to load in entries from local storage
let LoadEntries = () => {

	//	Parse json and set it as entries
	entries = JSON.parse(localStorage.getItem('entries')) || [];

	//	Set count
	count = parseInt(localStorage.getItem('count')) || 0;

	//	Loop through each entry and add it to the table
	entries.forEach(entry => {

		//	Create a new table entry
		AddTableEntry(entry);

	})

}

//	Function called when the actions button is clicked
let ClickActionsButton = (index) => {

	//	Find actions button
	let button = document.getElementById(`actions_${index}`);

	//	Create a new container element
	let menu = document.createElement('div');
	menu.className = 'menu';

	//	Generate menu html
	let html = `
		<button onclick='CompleteTask(${index})'>Complete</button>
		<button onclick='RemoveTask(${index})'>Delete</button>
	`;

	//	Add html to menu element
	menu.innerHTML = html;

	//	Add to actions button
	button.appendChild(menu);

	//	Play animation
	document.querySelector('.menu').classList.add('active');

	//	Add event listener
	setTimeout(() => document.addEventListener('click', CheckMenuClick), 10);

}

//	Function called to check if user clicks outside of menu
let CheckMenuClick = (e) => {
	
	//	Get menu
	let menu = document.querySelector('.menu');

	//	Delete menu element
	menu.remove();

	//	Unsubscribe from event
	document.removeEventListener('click', CheckMenuClick);

}

//	Function called to complete task
let CompleteTask = (index) => {

	//	Delete entry and get element being deleted
	let entry = RemoveTableEntry(index);

	//	Play animation
	entry.classList.replace('active', 'complete');

}

//	Function called to remove task
let RemoveTask = (index) => {
	
	//	Delete entry and get element being deleted
	let entry = RemoveTableEntry(index);

	//	Play animation
	entry.classList.remove('active');

}

//	Function called when add new task button is clicked
let ClickAddEntry = () => {

	//	If already adding then exit
	if (document.getElementById('add_entry')) return;

	//	Create a new container element
	let row = document.createElement('tr');
	row.className = 'row';
	row.id = 'add_entry';

	//	Generate row html
	let html = `
		<td class='tiny'><i onclick='CancelAddEntry()' class='negative button fa fa-times'></i></td>
		<td class='big'><input type='text' placeholder='Enter task name...'/></td>
		<td class='small'><input type='date' placeholder='Enter task deadline...'/></td>
		<td class='small'>
			<select placeholder='Enter task priority...'>
				<option value='Low'>Low</option>
				<option value='Medium'>Medium</option>
				<option value='High'>High</option>
			</select>
		</td>
		<td class='tiny'><i onclick='ConfirmAddEntry()' class='positive button fa fa-check'></i></td>
	`;

	//	Add html to row element
	row.innerHTML = html;

	//	Add to table body
	document.querySelector('.finished_product .list .table .rows').appendChild(row);

	//	Play animation
	setTimeout(() => document.getElementById('add_entry').classList.add('active'), 150);

}

//	Function called to cancel add entry
let CancelAddEntry = () => {

	//	Get entry
	let entry = document.getElementById('add_entry');

	//	Play animation
	entry.classList.remove('active');

	//	Delete add entry
	setTimeout(() => entry.remove(), 150);

}

//	Function called to confirm add entry
let ConfirmAddEntry = () => {

	//	Get add entry element
	let entry = document.getElementById('add_entry');

	//	Get title, deadline and priority
	let title = entry.children[1].children[0].value;
	let deadline = entry.children[2].children[0].value;
	let priority = entry.children[3].children[0].value;

	//	Exit if there are any empty inputs
	if (!title || !deadline || !priority) return;

	//	Add to list of entries
	entries.push({ title, deadline, priority });

	//	Increment count
	count++;

	//	Save entries list to local storage
	localStorage.setItem('entries', JSON.stringify(entries));

	//	Save count to local storage
	localStorage.setItem('count', count);

	//	Create a new entry
	AddTableEntry({ title, deadline, priority });

	//	Delete add entry
	entry.remove();

}

//	Subscribe event listener
document.addEventListener('DOMContentLoaded', LoadEntries);