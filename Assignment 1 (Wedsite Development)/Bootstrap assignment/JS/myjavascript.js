//CURTAIN MENU
function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";			
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}	

//button to google form.

function openGoogleForm() {
	document.getElementById("googleform1").innerHTML;
}

// Creating an array to store data in it.
let technoforms=[];

// Creating a function 
const addForm = (ev)=>{
	ev.preventDefault();// To stop the form submitting
	let technoform={
		firstname: document.getElementById('exampleFirstName1').value,
		lastname: document.getElementById('exampleLastName1').value,
		address: document.getElementById('exampleLine1').value,
		suburban: document.getElementById('exampleLine2').value,
		city: document.getElementById('exampletown/city').value,
		gender: document.getElementById('inputState2').value,
		phonetype: document.getElementById('inputState1').value,
		mobileprovider: document.getElementById('inputState').value,
		explain: document.getElementById('exampleFormControlTextarea1').value


	}

	// pushing the object to the array.
	technoforms.push(technoform);
	document.querySelector('form').reset(); // to clear the form for the next entries


	//saving to local storage.
	localStorage.setItem('MyTechnoList' , JSON.stringify(technoforms) );

}
// to load everything before clicking the button.
document.addEventListener('DOMContentLoaded', ()=>{
	document.getElementById('submit1').addEventListener('click', addForm);

	
});
// Javascript file will be loaded in application in browser under local storage.
