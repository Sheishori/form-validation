const form = document.querySelector('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function resetValidity() {
	this.setCustomValidity("");
	this.checkValidity();
};

email.addEventListener('input', resetValidity);
country.addEventListener('input', resetValidity);
zipCode.addEventListener('input', resetValidity);
password.addEventListener('input', resetValidity);
confirmPassword.addEventListener('input', resetValidity);