//	Hardcoded list of elements
let elements = [
	{
		name		: '&lt;div&gt;',
		description	: 'Used as a container for other elements, defines a division or section in an <br/>HTML document. Also commonly used as a background or for geometric <br/>shapes when styled correctly with CSS.',
		input		: '&lt;div style="background-color: black"&gt;<br/>&lt;/div&gt;',
		output		: '<div style="background-color: black; width: 100px; height: 100px"></div>'
	},
	{
		name		: '&lt;img&gt;',
		description	: 'This tag is used to embed an image in an HTML page. The source image <br/>must be specified in the src attribute, where it is given the path to that <br/>particular image.',
		input		: '&lt;img src="images/QUCC_Logo.png" style="height: 100px"/&gt;<br/>&lt;img src="images/QU_Logo.webp" style="height: 100px"/&gt;',
		output		: '<img src="images/QUCC_Logo.png" style="height: 100px"/><img src="images/QU_Logo.webp" style="height: 100px"/>'
	},
	{
		name		: '&lt;h1&gt;',
		description	: 'Often used as page headers or section headers. Usually indicates the most <br/>important heading in the page. Browsers usually add big margins before <br/>and after each header tag.',
		input		: '&lt;h1&gt;Header 1&lt;/h1&gt;',
		output		: '<h1>Header 1</h1>'
	},
	{
		name		: '&lt;p&gt;',
		description	: 'Represents a paragraph in HTML, often used for descriptions or captions. <br/>Like the header tag, browsers often add a single line spacing between <br/>each paragraph tag.',
		input		: '&lt;p&gt;this is paragraph one&lt;/p&gt;<br/>&lt;p&gt;this is paragraph two&lt;/p&gt;',
		output		: '<p>this is paragraph one</p><p>this is paragraph two</p>'
	},
	{
		name		: '&lt;a&gt;',
		description	: 'This tag represents a hyperlink, which can be used to redirect the user to <br/>another page, be it internal or external. Can also be used as anchor for <br/>different sections of a page.',
		input		: '&lt;a href="https://quqa.campuslabs.com/engage/organization/computing_club"&gt;Sign Up For QUCC!&lt;/a&gt;',
		output		: '<a href="https://quqa.campuslabs.com/engage/organization/computing_club">Sign Up For QUCC!</a>'
	},
	{
		name		: '&lt;table&gt;',
		description	: 'This tag represents a table, and is often used with other tags such as <br/>&lt;thead&gt; to represent the header, &lt;th&gt; to represent header columns, <br/>&lt;tbody&gt; for a collection of rows, &lt;tr&gt; for a single row, and &lt;td&gt; for a column.',
		input		: '&lt;table&gt;<br/>&lt;tr&gt;<br/>&lt;th&gt;Task&lt;/th&gt;<br/>&lt;th&gt;Deadline&lt;/th&gt;<br/>&lt;th&gt;Priority&lt;/th&gt;<br/>&lt;/tr&gt;<br/>&lt;tr&gt;<br/>&lt;td&gt;Go eat&lt;/td&gt;<br/>&lt;td&gt;24/01/2022&lt;/td&gt;<br/>&lt;td&gt;High&lt;/td&gt;<br/>&lt;/tr&gt;<br/>&lt;/table&gt;',
		output		: '<table><tr><th>Task</th><th>Deadline</th><th>Priority</th></tr><tr><td>Go eat</td><td>24/01/2022</td><td>High</td></tr></table>'
	},
	{
		name		: '&lt;button&gt;',
		description	: 'This tag defines a clickable button. You can place text inside buttons, as <br/>well as other tags like &lt;i&gt;, &lt;b&gt;, &lt;strong&gt;, &lt;img&gt;, etc.',
		input		: '&lt;button&gt;Click Me!&lt;/button&gt;',
		output		: '<button>Click Me!</button>'
	},
	{
		name		: '&lt;form&gt;',
		description	: 'Form tags are used to create HTML forms which can capture user data <br/>and send them to a server. An example of a form is a login screen where <br/>the form captures the username and password and sends it to a server.',
		input		: '&lt;form&gt;<br/>&lt;input type="text" placeholder="Username"/&gt;&lt;br&gt;<br/>&lt;input type="text" placeholder="Password"/&gt;&lt;br&gt;<br/>&lt;input type="submit"/&gt;<br/>&lt;/form&gt;',
		output		: '<form><input type="text" placeholder="Username"/><br/><input type="text" placeholder="Password"/><br/><input type="submit"/></form>'
	},
	{
		name		: '&lt;input&gt;',
		description	: 'This tag specifies an input field where the user can enter data. The type of <br/>input field differs from text, date, color, and even files! &lt;labels&gt; can be <br/>used alongside input tags to give them a name.',
		input		: '&lt;label for="text"&gt;Text&lt;/label&lt;br/&gt;<br/>&lt;input type="text" id="text"/&gt;&lt;br/&gt;<br/>&lt;label for="date"&gt;Date&lt;/label&lt;br/&gt;<br/>&lt;input type="date" id="date"/&gt;&lt;br/&gt;<br/>&lt;label for="color"&gt;Color&lt;/label&lt;br/&gt;<br/>&lt;input type="color" id="color"/&gt;&lt;br/&gt;<br/>&lt;label for="file"&gt;File&lt;/label&lt;br/&gt;<br/>&lt;input type="file" id="file"/&gt;',
		output		: '<label for="text">Text</label><br/><input type="text" id="text"/><br/><label for="date">Date</label><br/><input type="date" id="date"/><br/><label for="color">Color</label><br/><input type="color" id="color"/><br/><label for="file">File</label><br/><input type="file" id="file"/>'
	},
	{
		name		: '&lt;select&gt;',
		description	: 'This tag is used to create dropdown lists and is most often used in HTML <br/>forms. &lt;label&gt; tags can be paired with these just like inputs! The option <br/>tags inside dictate which options are available in the dropdown.',
		input		: '&lt;select&gt;<br/>&lt;option value="Low"&gt;Low&lt;/option&gt;<br/>&lt;option value="Medium"&gt;Medium&lt;/option&gt;<br/>&lt;option value="High"&gt;High&lt;/option&gt;<br/>&lt;/select&gt;',
		output		: '<select><option value="Low">Low</option><option value="Medium">Medium</option><option value="High">High</option></select>'
	},
];