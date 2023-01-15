function showTour(index) {
	// Get all tour sections
	const tourSections = document.querySelectorAll("section");
	
	// Hide all tour sections
	tourSections.forEach(section => {
		section.style.display = "none";
	});
	// Show the random tour section
	tourSections[index].style.display = "block";
	// Scroll to the random tour section
	tourSections[index].scrollIntoView({ behavior: 'smooth' });
}


function showContacts() {
	// hide all of the tour sections
	var sections = document.querySelectorAll('.container section');
	for (var i = 0; i < sections.length; i++) {
		sections[i].style.display = 'none';
	}
	// show the corresponding section
	var tour = document.querySelector('#' + 'contacts');
	tour.style.display = 'block';
	tour.scrollIntoView({ behavior: 'smooth' });
}
function showRandomTour() {
	// Get all tour sections
	const tourSections = document.querySelectorAll("section");
	// Get the number of tour sections
	const numberOfTours = tourSections.length -1;
	// Generate a random number between 0 and the number of tours
	const randomTourIndex = Math.floor(Math.random() * numberOfTours);
	// Hide all tour sections
	tourSections.forEach(section => {
		section.style.display = "none";
	});
	// Show the random tour section
	tourSections[randomTourIndex].style.display = "block";
	// Scroll to the random tour section
	tourSections[randomTourIndex].scrollIntoView({ behavior: 'smooth' });
}
function trackContacts(){
	sessionStorage.setItem("showContactsOnload", "true");
}
function trackTour(index){
	sessionStorage.setItem("showTourOnload", index);	
}
function trackAllTours(){
	 sessionStorage.setItem("showAllToursOnLoad", "true");	
    // Redirect the user to the main page
}

function goToMainPage() {
	
    window.location.href = "../index.html";
    
}
function showAllTours() {
	
	// Get all sections
	const sections = document.querySelectorAll("section");
	const introduction = document.querySelector(".introduction");
	const contact = document.querySelector("#contacts");

	// Show all tour sections
	sections.forEach(section => {
		section.style.display = "block";
	});
	
	// Hide introduction and contact sections
	introduction.style.display = "none";
	contact.style.display = "none";

	// Scroll to the top of the first tour section
	sections[0].scrollIntoView({ behavior: 'smooth' });
}