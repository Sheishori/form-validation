const form = document.querySelector('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const button = document.querySelector('button');
const success = document.getElementById('success');
const countryRegExp = /^[A-Za-z]+$/;
const zipCodeRegExp = /^\d{2,5}(?:-\d{3,4})?$/;
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{5,}$/;

function resetValidity() {
	this.setCustomValidity("");
	this.checkValidity();
};

function checkEmailValidity() {
	if (email.value === "") {
		email.setCustomValidity("Email can't be empty!");
	} else if (email.validity.typeMismatch) {
		email.setCustomValidity("Value must me an e-mail address!");
	};
};

function checkCountryValidity() {
	if (country.value === "") {
		country.setCustomValidity("Country can't be empty!");
	} else if (!countryRegExp.test(country.value)) {
		country.setCustomValidity("Country can only contain letters!");
	};
};

function checkZipCodeValidity() {
	if (zipCode.value === "") {
		zipCode.setCustomValidity("Zip Code can't be empty!");
	} else if (!zipCodeRegExp.test(zipCode.value)) {
		zipCode.setCustomValidity("Zip Code can only contain numbers!");
	};
};

function checkPasswordValidity() {
	if (password.value === "") {
		password.setCustomValidity("Password can't be empty!");
	} else if (!passwordRegExp.test(password.value)) {
		password.setCustomValidity("Password must contain minimum five characters, at least one letter and one number.");
	};
};

function checkConfrimPasswordValidity() {
	if (confirmPassword.value === "") {
		confirmPassword.setCustomValidity("Please confirm your password!");
	} else if (!(password.value === confirmPassword.value)) {
		confirmPassword.setCustomValidity("Passwords must match!");
	};
};

email.addEventListener('input', resetValidity);
country.addEventListener('input', resetValidity);
zipCode.addEventListener('input', resetValidity);
password.addEventListener('input', resetValidity);
confirmPassword.addEventListener('input', resetValidity);

email.addEventListener('blur', checkEmailValidity);
country.addEventListener('blur', checkCountryValidity);
zipCode.addEventListener('blur', checkZipCodeValidity);
password.addEventListener('blur', checkPasswordValidity);
confirmPassword.addEventListener('blur', checkConfrimPasswordValidity);

email.addEventListener('invalid', checkEmailValidity);
country.addEventListener('invalid', checkCountryValidity);
zipCode.addEventListener('invalid', checkZipCodeValidity);
password.addEventListener('invalid', checkPasswordValidity);
confirmPassword.addEventListener('invalid', checkConfrimPasswordValidity);

button.addEventListener('click', () => {
	success.textContent = ""
});

form.addEventListener('submit', (event) => {
	event.preventDefault();
	checkEmailValidity();
	checkCountryValidity();
	checkZipCodeValidity();
	checkPasswordValidity();
	checkConfrimPasswordValidity();
	if (form.checkValidity()) {
		success.textContent = "Form successfully submitted!"
	};
});