import './modal.style.css'

const modals = document.querySelectorAll('[data-modal="modal"]')

const openModal = (element: HTMLElement) => {
	element.classList.add('modal__content_active')
}

const closeModal = (element: HTMLElement) => {
	element.classList.remove('modal__content_active')
}

for (const modal of modals) {
	const openButtons = modal.querySelectorAll('[data-modal="open"]') as NodeListOf<HTMLButtonElement>
	const closeButtons = modal.querySelectorAll('[data-modal="close"]') as NodeListOf<HTMLButtonElement>
	const popup = modal.querySelector('[data-modal="popup"]') as HTMLElement

	openButtons.forEach(o => o.addEventListener('click', () => openModal(popup)))
	closeButtons.forEach(o => o.addEventListener('click', () => closeModal(popup)))
}