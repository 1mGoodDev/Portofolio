let typed = new Typed('.typed', {
	strings: ['Front-end Dev.', 'Graphic Designer.', 'Photographer.', 'Videographer.', 'friend'],
	typeSpeed: 90,
	backSpeed: 60,
	loop: true,
});

// untuk Scroll-Up button
const scrollup = () => {
	const scrollUpBtn = document.getElementById('scroll-up')

	if(this.scrollY >= 200) {
		scrollUpBtn.classList.remove('-bottom-1/2');
		scrollUpBtn.classList.add('bottom-4');
	} else {
		scrollUpBtn.classList.add('-bottom-1/2');
		scrollUpBtn.classList.remove('bottom-4');
	}
} 
window.addEventListener('scroll', scrollup)

//untuk dark-mode
/* 

const html = document.querySelector('html');
const themeBtn = document.getElementById('theme-toggle');

if(localStorage.getItem('mode') == 'dark') {
	darkMode();
} else {
	lightMode();
}

themeBtn.addEventListener('click', (e) => {
	if(localStorage.getItem('mode') == 'light') {
		darkMode();
	} else {
		lightMode();
	}
})

const darkMode = () => {
	html.classList.add('dark');
	themeBtn.classList.replace('fa-regular fa-moon', 'fa-regular fa-sun');
	localStorage.setItem('mode', 'dark');
}

const lightMode = () => {
	html.classList.remove('dark');
	themeBtn.classList.replace('fa-regular fa-sun', 'fa-regular fa-moon');
	localStorage.setItem('mode', 'light');
}

*/