const themeSwitcher = document.querySelector('input[type=checkbox]')
const rootElement = document.documentElement
const toggleIcon = document.getElementById('toggle-icon')
const header = document.querySelector('header')
const images = document.querySelectorAll('img[id]')
const textBox = document.getElementById('text-box')

const setTheme = (theme) => {
	localStorage.setItem('theme', theme)
	header.style.backgroundColor = theme === 'dark'
		? 'rgb(0 0 0 / 50%)'
		: 'rgb(255 255 255 / 50%)'
	textBox.style.backgroundColor = theme === 'dark'
		? 'rgb(255 255 255 / 50%)'
		: 'rgb(0 0 0 / 50%)'
	toggleIcon.children[0].textContent = `${theme} mode`
	toggleIcon.children[1].className = theme === 'dark'
		? 'fas fa-moon'
		: 'fas fa-sun'
	images.forEach(image => {
		image.src = image.src.replace(/dark|light/gi, theme)
	})
}

const switchTheme = (e) => {
	if (e.target.checked) {
		rootElement.dataset.theme = 'dark'
		setTheme('dark')
	} else {
		rootElement.dataset.theme = 'light'
		setTheme('light')
	}
}

themeSwitcher.addEventListener('change', switchTheme)

const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
	rootElement.dataset.theme = currentTheme
	if (currentTheme === 'dark') {
		themeSwitcher.checked = true
		setTheme(currentTheme)
	}
}