import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

import './Header.css'

const Header = ( { handleNavigation, navigation } ) => {
	const as = document.querySelectorAll('.nav-items a')
	as.forEach(a => {
		a.addEventListener('click', () => {
			console.log(a.innerText);
			handleNavigation(false)
		})
	}) 
	return (
		<div className='header sticky' id='sticky'>
			<div className='nav-bar'>
				<a href="#" className='logo'>Olam</a>
				<div className={navigation ? 'navigation' : 'navigation navigation-show'}>
					<div className="nav-items">
						<div className="nav-close-btn" onClick={() => handleNavigation(true)}>
							<MdClose/>
						</div>
						<a href="#home">Home</a>
						<a href="#about">About</a>
						<a href="#skills">Skills</a>
						<a href="#services">Services</a>
						<a href="#portfolio">Portfolio</a>
						<a href="#contact">Contact</a>
					</div>
				</div>
				<div className="nav-menu-btn" onClick={() => handleNavigation(false)}>
					<BiMenuAltRight className='icon'/>
				</div>
		</div>
		</div>
	)
}

export default Header