import './validation.style.css'

const validationItems = document.querySelectorAll('[data-validation]')

const validations = {
	email: (email: string): boolean => email.includes('@'),
	password: (password: string): boolean => {
		if (password.length < 8) {
			return false;
		}
		if (!(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/.test(password))) {
			return false;
		}
		return true
	}
}

const onInput = (e: Event) => {
	const item = e.currentTarget as HTMLInputElement;
	const type = item.getAttribute('data-validation') as keyof typeof validations;
	const input = item.querySelector('input') as HTMLInputElement;
	const messageItem = item.querySelector('p') as HTMLParagraphElement;

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