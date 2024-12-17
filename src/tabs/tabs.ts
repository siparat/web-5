import './tabs.style.css'

const buttons = document.querySelectorAll('.tabs__button');
const contents = document.querySelectorAll('.tabs__content');

const onClick = (e: any) => {
	const currentButton = e.currentTarget;
	const dataKey: string = currentButton.getAttribute('data-tabs-button');

	contents.forEach((c) => {
		const key: keyof DOMTokenList = (c.getAttribute('data-tabs-content') || '') == dataKey ? 'add' : 'remove';
		c.classList[key]('tabs__content_active');
	})

	buttons.forEach((b) => {
		const key: keyof DOMTokenList = (b.getAttribute('data-tabs-button') || '') == dataKey ? 'add' : 'remove';
		b.classList[key]('tabs__button_active');
	})
}

buttons.forEach(b => b.addEventListener('click', onClick));