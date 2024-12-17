import './scaler.style.css'

const img = document.querySelector('.scaler__image');
const preview = document.querySelector(".scaler__preview");

const x = preview.offsetWidth / 100;
const y = preview.offsetHeight / 100;

img.addEventListener("mousemove", (e) => {
	preview.style.backgroundImage = `url(${img.src})`;
	preview.style.backgroundSize = img.width * x + "px " + img.height * y + "px";

	const posX = e.offsetX;
	const posY = e.offsetY;

	preview.style.left = `calc(50% + ${posX}px)`;
	preview.style.top = `${posY}px`;
	preview.style.backgroundPosition = "-" + posX * x + "px -" + posY * y + "px";
});

img.addEventListener("mouseout", () => {
	preview.style.backgroundImage = "none";
});