
'use strict'

 const tabItem = document.querySelectorAll('.tabs__btn-item');
 const tabContent = document.querySelectorAll('.tabs__content-item');

 tabItem.forEach(function(element) {
	element.addEventListener('click', open);
 });

 function open(evt) {
	const tabTarget = evt.currentTarget;
	const button = tabTarget.dataset.button;

	tabItem.forEach(function(item){
		item.classList.remove('tabs__btn-item--active');
	});

	tabContent.forEach(function(item){
		item.classList.remove('tabs__content-item--active');
	});

	tabTarget.classList.add('tabs__btn-item--active');
	document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
 }

 const menuBtn = document.querySelector('.menu-btn');
 const menu = document.querySelector('.menu');

 menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu--active');
 });
// new code

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' +blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}

 AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
