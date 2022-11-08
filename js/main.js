const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const navLinks = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

navLinks.forEach(e =>
	e.addEventListener('click', () => {
		navMobile.classList.remove('nav-mobile--active')
	})
)

navBtn.addEventListener('click', handleNav)
handleCurrentYear()
