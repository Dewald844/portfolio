/////////////////////////////
// header section
/////////////////////////////
const headingContainer = document.querySelector('.heading-container')
const intro = document.querySelector('.title p')
const name = document.querySelector('.title h1')
const subText = document.querySelector('.title h2')
const brand = document.querySelector('.navbar-brand')
const navChildren = document.querySelectorAll('.nav-item')
const links = document.querySelectorAll('.title svg')

let tl = new TimelineMax()

document.addEventListener('DOMContentLoaded', function () {
	tl.fromTo(headingContainer, 0.7, { height: '0', opacity: 0 }, { height: '300px', opacity: 1 })
		.fromTo(intro, 0.7, { x: 60, opacity: '0' }, { x: 0, opacity: '1', ease: Bounce.easeOut })
		.fromTo(
			name,
			0.7,
			{ x: 100, opacity: '0' },
			{ x: 0, opacity: '1', ease: Back.easeOut.config(1.7) }
		)
		.fromTo(subText, 1, { opacity: '0' }, { opacity: '1' })
		.fromTo(links, 1, { opacity: '0' }, { opacity: '1' }, '-=1')
		.fromTo(brand, 0.7, { x: -30, opacity: '0' }, { x: 0, opacity: '1' }, '-=.5')
		.fromTo(navChildren, 0.7, { x: 30, opacity: '0' }, { x: 0, opacity: '1' }, '-=.7')
})

// end of header section

/////////////////////////////
// about me
/////////////////////////////
const aboutHeadingContainer = document.querySelector('#about .heading-container')
const aboutparagraph = document.querySelector('#about p')
const heading = document.querySelector('.about-me-heading')

const skillsetHeading = document.querySelector('#about .skillHeding')
const skillDev = document.querySelector('#about .dev')
const skillDes = document.querySelector('#about .des')
const tl2 = new TimelineMax()
const tl3 = new TimelineMax()

let aboutVisable = false
$(window).scroll(function () {
	if (checkVisible($('#about'))) {
		if (aboutVisable == false) {
			aboutVisable = true
			tl2
				.fromTo(aboutHeadingContainer, 0.7, { x: -30, opacity: '0' }, { x: 0, opacity: '1' }, '=.1')
				.fromTo(aboutparagraph, 0.7, { x: -30, opacity: '0' }, { x: 0, opacity: '1' }, '-=.5')
		}
	} else {
		if (aboutVisable == true) {
			aboutVisable = false
			tl2
				.fromTo(aboutHeadingContainer, 0.1, { x: 0, opacity: '1' }, { x: -30, opacity: '0' }, '=.1')
				.fromTo(aboutparagraph, 0.1, { x: 0, opacity: '1' }, { x: -30, opacity: '0' }, '-=.5')
		}
	}
})

let skillsetHeadingVisable = false
$(window).scroll(function () {
	if (checkVisible($('#about .skillContainer'))) {
		if (skillsetHeadingVisable == false) {
			skillsetHeadingVisable = true
			tl3
				.fromTo(skillsetHeading, 0.7, { x: -30, opacity: '0' }, { x: 0, opacity: '1' }, '=.1')
				.fromTo(skillDev, 0.7, { x: 30, opacity: '0' }, { x: 0, opacity: '1' }, '-=0.5')
				.fromTo(skillDes, 0.7, { x: 30, opacity: '0' }, { x: 0, opacity: '1' }, '-=0.7')
		}
	} else {
		if (skillsetHeadingVisable == true) {
			skillsetHeadingVisable = false
			tl3
				.fromTo(skillsetHeading, 0.1, { x: 0, opacity: '1' }, { x: -30, opacity: '0' }, '=.1')
				.fromTo(skillDev, 0.1, { opacity: '1' }, { opacity: '0' }, '=.1')
				.fromTo(skillDes, 0.1, { opacity: '1' }, { opacity: '0' }, '=.1')
		}
	}
})

// end of about me
/////////////////////////////
// Experience
/////////////////////////////
const experienceHeadingContainer = document.querySelector('#experience .heading-container')
const experienceparagraph = document.querySelector('#experience .body')
const tl4 = new TimelineMax()

let experienceVisable = false
$(window).scroll(function () {
	if (checkVisible($('.experience-con'))) {
		if (experienceVisable == false) {
			experienceVisable = true
			tl4
				.fromTo(
					experienceHeadingContainer,
					0.7,
					{ x: -30, opacity: '0' },
					{ x: 0, opacity: '1' },
					'=.1'
				)
				.fromTo(experienceparagraph, 0.7, { x: -30, opacity: '0' }, { x: 0, opacity: '1' }, '-=.5')
		}
	} else {
		if (experienceVisable == true) {
			experienceVisable = false
			tl4
				.fromTo(
					experienceHeadingContainer,
					0.1,
					{ x: 0, opacity: '1' },
					{ x: -30, opacity: '0' },
					'=.1'
				)
				.fromTo(experienceparagraph, 0.1, { x: 0, opacity: '1' }, { x: -30, opacity: '0' }, '-=.5')
		}
	}
})
// end of experience
/////////////////////////////
// Experiece certification
/////////////////////////////
const certHeading = document.querySelector('#experience .cert-heading')
const one = document.querySelector('#experience .one')
const two = document.querySelector('#experience .two')
const three = document.querySelector('#experience .three')

const tl5 = new TimelineMax()

let certVisable = false
$(window).scroll(function () {
	if (checkVisible($('.cert-con'))) {
		if (certVisable == false) {
			certVisable = true
			tl5
				.fromTo(certHeading, 0.7, { x: -30, opacity: '0' }, { x: 0, opacity: '1' }, '=.1')
				.fromTo(one, 0.1, { y: 30, opacity: '0' }, { y: 0, opacity: '1' }, '-=.4')
				.fromTo(two, 0.1, { y: 30, opacity: '0' }, { y: 0, opacity: '1' })
				.fromTo(three, 0.1, { y: 30, opacity: '0' }, { y: 0, opacity: '1' })
		}
	} else {
		if (certVisable == true) {
			certVisable = false
			tl5
				.fromTo(certHeading, 0.1, { x: 0, opacity: '1' }, { x: -30, opacity: '0' })
				.fromTo(one, 0.1, { opacity: '1' }, { opacity: '0' }, '-=.1')
				.fromTo(two, 0.1, { opacity: '1' }, { opacity: '0' }, '-=.1')
				.fromTo(three, 0.1, { opacity: '1' }, { opacity: '0' }, '-=.1')
		}
	}
})
// end of Experiece certification
/////////////////////////////
// Experiene projects
/////////////////////////////
const projHeading = document.querySelector('#experience .proj-heading')
const four = document.querySelector('#experience .four')
const five = document.querySelector('#experience .five')
const six = document.querySelector('#experience .six')

const tl6 = new TimelineMax()

let projVisable = false
$(window).scroll(function () {
	if (checkVisible($('.project-con'))) {
		if (projVisable == false) {
			projVisable = true
			tl6
				.fromTo(projHeading, 0.7, { x: -30, opacity: '0' }, { x: 0, opacity: '1' }, '=.1')
				.fromTo(four, 0.1, { y: 30, opacity: '0' }, { y: 0, opacity: '1' }, '-=.4')
				.fromTo(five, 0.1, { y: 30, opacity: '0' }, { y: 0, opacity: '1' })
				.fromTo(six, 0.1, { y: 30, opacity: '0' }, { y: 0, opacity: '1' })
		}
	} else {
		if (projVisable == true) {
			projVisable = false
			tl6
				.fromTo(projHeading, 0.1, { x: 0, opacity: '1' }, { x: -30, opacity: '0' })
				.fromTo(four, 0.1, { opacity: '1' }, { opacity: '0' }, '-=.1')
				.fromTo(five, 0.1, { opacity: '1' }, { opacity: '0' }, '-=.1')
				.fromTo(six, 0.1, { opacity: '1' }, { opacity: '0' }, '-=.1')
		}
	}
})
// end of Experiene projects
/////////////////////////////
// Helper functions
/////////////////////////////

function checkVisible(elm, eval) {
	eval = eval || 'visible'
	var vpH = $(window).height(), // Viewport Height
		st = $(window).scrollTop(), // Scroll Top
		y = $(elm).offset().top,
		elementHeight = $(elm).height()

	if (eval == 'visible') return y < vpH + st && y > st - elementHeight
	if (eval == 'above') return y < vpH + st
}

// end of Helper functions
