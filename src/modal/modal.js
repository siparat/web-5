import './modal.style.css'

const modals = document.querySelectorAll('[data-modal="modal"]')

const openModal = (element) => {
	element.classList.add('modal__content_active')
}

const closeModal = (element) => {
	element.classList.remove('modal__content_active')
}

for (const modal of modals) {
	const openButtons = modal.querySelectorAll('[data-modal="open"]')
	const closeButtons = modal.querySelectorAll('[data-modal="close"]')
	const popup = modal.querySelector('[data-modal="popup"]')

	openButtons.forEach(o => o.addEventListener('click', () => openModal(popup)))
	closeButtons.forEach(o => o.addEventListener('click', () => closeModal(popup)))
}