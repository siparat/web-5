import './validation.style.css'

const validationItems = document.querySelectorAll('[data-validation]')

const validations = {
	email: (email) => email.includes('@'),
	password: (password) => {
		if (password.length < 8) {
			return false;
		}
		if (!(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/.test(password))) {
			return false;
		}
		return true
	}
}

const onInput = (e) => {
	const item = e.currentTarget;
	const type = item.getAttribute('data-validation');
	const input = item.querySelector('input');
	const messageItem = item.querySelector('p');

	const isValid = validations[type](input.value);
	if (!isValid) {
		item.classList.add('validation__item_failed');
		item.classList.remove('validation__item_success');
		messageItem.textContent = `Bad ${type}`
	} else {
		item.classList.remove('validation__item_failed')
		item.classList.add('validation__item_success')
		messageItem.textContent = `${type[0].toUpperCase() + type.slice(1)} is good`
	}
}

validationItems.forEach(item => item.addEventListener('input', onInput))