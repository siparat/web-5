import './ranger.style.css'

const rangeMin = document.getElementById("range-min");
const rangeMax = document.getElementById("range-max");
const sliderRange = document.getElementById("ranger-range");
const minValueOutput = document.getElementById("min-value");
const maxValueOutput = document.getElementById("max-value");
const rangeMinLimit = parseInt(rangeMin.min);
const rangeMaxLimit = parseInt(rangeMax.max);

function updateSlider(event) {
	const minValue = parseInt(rangeMin.value);
	const maxValue = parseInt(rangeMax.value);

	if (minValue >= maxValue) {
		if (event.target === rangeMin) {
			rangeMax.value = String(minValue);
		} else {
			rangeMin.value = String(maxValue);
		}
	}

	const newMinValue = parseInt(rangeMin.value);
	const newMaxValue = parseInt(rangeMax.value);

	sliderRange.style.left = ((newMinValue - rangeMinLimit) / (rangeMaxLimit - rangeMinLimit)) * 100 + "%";
	sliderRange.style.width = ((newMaxValue - newMinValue) / (rangeMaxLimit - rangeMinLimit)) * 100 + "%";

	minValueOutput.textContent = String(newMinValue);
	maxValueOutput.textContent = String(newMaxValue);
}

rangeMin.addEventListener("input", updateSlider);
rangeMax.addEventListener("input", updateSlider);
