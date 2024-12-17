import './slider.style.css'
import { slides } from './slider.consants'
import { Direction, Slide } from './slider.interfaces';

const slider = document.querySelector('.slider');
let slidesWrapper: HTMLDivElement;
let dotsWrapper: HTMLDivElement;
let slideStep = 230;
let currentSlideIndex = 1;
let lastSlide: HTMLDivElement;

const onSelectDot = (e: MouseEvent) => {
	const button = e.target as HTMLButtonElement;
	const index = Array.from(button.parentElement?.childNodes || []).indexOf(button);
	selectSlide(index);
}

const createCard = (slide: Slide, isActive = false): Node => {
	const element = document.createElement('div');
	element.classList.add('slider__slide');
	if (isActive) {
		element.classList.add('slider__slide_active');
		lastSlide = element;
	}
	element.textContent = slide.title;
	return element;
}

const createDot = (): Node => {
	const element = document.createElement('button');
	element.classList.add('slider__dot');
	element.addEventListener('click', onSelectDot)
	return element;
}

const renderSlider = (slides: Slide[], slidesWrapper: Element, dotsWrapper: Element) => {
	slides.forEach((slide, i) => {
		slidesWrapper.appendChild(createCard(slide, i == currentSlideIndex))
		dotsWrapper.appendChild(createDot())
	})
}

const initSlider = (slides: Slide[], parentElement: Element) => {
	slidesWrapper = document.createElement('div');
	slidesWrapper.classList.add('slider__slides');
	dotsWrapper = document.createElement('div');
	dotsWrapper.classList.add('slider__dots');
	parentElement.appendChild(slidesWrapper);
	parentElement.appendChild(dotsWrapper);

	renderSlider(slides, slidesWrapper, dotsWrapper);
	selectSlide(currentSlideIndex);

	const buttons = parentElement.querySelectorAll('.slider__button');
	buttons.forEach(button => button.addEventListener('click', onSwipe(button.getAttribute('data-direction') as Direction || 'left')))
}

const onSwipe = (direction: Direction) => () => {
	selectSlide(currentSlideIndex + (direction == 'left' ? -1 : 1))
}

const selectSlide = (index: number): void => {
	if (index < 0 || index >= slides.length) {
		return;
	}
	currentSlideIndex = index;
	lastSlide.classList.remove('slider__slide_active');

	const slide = slidesWrapper.childNodes[index] as HTMLDivElement;
	slide.classList.add('slider__slide_active');
	lastSlide = slide;
	slidesWrapper.style.transform = `translateX(${-index * slideStep - (slideStep/2 - 9)}px)`;
}

slider && initSlider(slides, slider)