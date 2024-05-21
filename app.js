import './style.css'

const btnHome = document.getElementById("btnHome");

btnHome.addEventListener('click', function(){
	window.location.href = '../../index.html'
});


const clear 	= document.getElementById("clear");

clear.addEventListener('click', function(){
	clearFields()
});

function clearFields(){
	let clears = document.querySelectorAll('.clear');
	for (let i = 0; i < clears.length; i++) {
	    clears[i].value = ""
	}
	let calcs = document.getElementsByName("calc");
	for (let i = 0; i < calcs.length; i++) {
	    calcs[i].checked = false;
	}

	document.getElementById("show-solving").innerHTML = "";
	document.getElementById("show-result").innerHTML = "0";
}