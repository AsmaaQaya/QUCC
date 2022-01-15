//	Function called when add new task button is clicked
let AddTableEntry = ({ title, deadline, priority }) => {

	//	Sanitise inputs
	title = title.replace('<', '').replace('>', '');
	deadline = deadline.replace('<', '').replace('>', '');
	priority = priority.replace('<', '').replace('>', '');

	//	Create a new container element
	let row = document.createElement('tr');
	row.className = 'row';

	//	Generate row html
	let html = `
		<tr class='row'>

			<td class='tiny'>
				
				<div class='checkbox'><label><input type='checkbox'/><i class='fa fa-check'></i></label></div>

			</td>

			<td class='big'>${title}</td>

			<td class='small'>${deadline}</td>

			<td class='small'>${priority}</td>

			<td class='tiny'><i class='button fa fa-ellipsis-v'></i></td>

		</tr>
	`;

	//	Add html to row element
	row.innerHTML = html;

	//	Add to table body
	document.querySelector('.finished_product .list .table .rows').appendChild(row);

}

//	Function called when add new task button is clicked
let ClickAddEntry = () => {

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

}

//	Function called to cancel add entry
let CancelAddEntry = () => {

	//	Delete add entry
	document.getElementById('add_entry').remove();

}

//	Function called to confirm add entry
let ConfirmAddEntry = () => {

	//	Get add entry element
	let element = document.getElementById('add_entry');

	//	Get title, deadline and priority
	let title = element.children[1].children[0].value;
	let deadline = element.children[2].children[0].value;
	let priority = element.children[3].children[0].value;

	//	Exit if there are any empty inputs
	if (!title || !deadline || !priority) return;

	//	Create a new entry
	AddTableEntry({ title, deadline, priority });

	//	Delete add entry
	document.getElementById('add_entry').remove();

}