/*Default Setting Function*/
/*Highlight the demo-1 button and show demo-1 area, hide all other demo areas*/


let allButtons = document.getElementsByClassName("demo-button");//Return an array storing all buttons
let allDemoAreas = document.getElementsByClassName("demo-box");//Return an array storing all demo boxes
let demoAreaColor = ["xml1", "json1", "rss1", "jsonfile1"];// array based on the div id's. 
function showDemo(index) {
	//Set all buttons to white color
	for (let i=0; i < allButtons.length; i++) {
		allButtons[i].style.backgroundColor = "white";
		allDemoAreas[i].style.display = "none";
	}
	
	//Set the background color of the demo-button-1 to orange
	allButtons[index].style.background = "#FF9633";
	allDemoAreas[index].style.display = "block";
	allDemoAreas[index].style.backgroundColor = demoAreaColor[index];
}