import './tabs.style.css'

const buttons = document.querySelectorAll('.tabs__button');
const contents = document.querySelectorAll('.tabs__content');

const onClick = (e) => {
	const currentButton = e.currentTarget;
	const dataKey = currentButton.getAttribute('data-tabs-button');

	contents.forEach((c) => {
		const key = (c.getAttribute('data-tabs-content') || '') == dataKey ? 'add' : 'remove';
		c.classList[key]('tabs__content_active');
	})

	buttons.forEach((b) => {
		const key = (b.getAttribute('data-tabs-button') || '') == dataKey ? 'add' : 'remove';
		b.classList[key]('tabs__button_active');
	})
}

buttons.forEach(b => b.addEventListener('click', onClick));