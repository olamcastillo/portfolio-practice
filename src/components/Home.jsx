import React from 'react'
import { BsInstagram, BsGithub, BsTwitter, BsArrowDown, BsFillArrowRightCircleFill } from 'react-icons/bs'
import './Home.css'

const Home = () => {
	
	return (
		<div>
			<section className="home flex-center" id='home'>
				<div className='home-container'>
					<div className="media-icons">
						<a href="#"><BsInstagram/></a>
						<a href="#"><BsGithub/></a>
						<a href="#"><BsTwitter/></a>
						
					</div>
					<div className="info">
						<h2>Hey, I'm Olam</h2>
						<h3>Frontend Developer</h3>
						<p>Pasionate for built awesome websites with high performance and good design</p>
						<a href="" className='btn '>Contact Me <BsFillArrowRightCircleFill className='icon'/></a>
					</div>
					<div className="home-img">
						<img src="#" alt="profile-photo" />
					</div>
				</div>
				<a href="#about" className='scroll-down'>Scroll Down <BsArrowDown className='icon'/></a>
			</section>
			
		</div>
	)
}

export default Home