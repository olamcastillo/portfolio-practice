import React from 'react'
import { BsDownload } from 'react-icons/bs'
import './About.css'
const About = () => {
	return (
		<div>
			<section className='about section' id='about'>
				<div className="container flex-center">
					<h2 className="section-title-01">About Me</h2>
					<h3 className="section-title-02">About Me</h3>
					<div className="content flex-center">
						<div className="about-img">
							<img src="#" alt="about-photo" />
						</div>
						<div className="about-info">
							<div className="description">
								<h3>I'm Olam</h3>
								<h4>I'm <span>Frontend Developer</span> based in <span>Trujillo</span></h4>
								<p>Hello!! I'm Diego, and welcome to my portfolio, I'm an enthusiastic Front-End Developer from LATAM, a developer that tries to work with people around the world and showcase his experience.</p>
							</div>
							<ul className="professional-list">
								<li className="list-item">
									<h4>1+</h4>
									<span>Year's <br/>experience</span>
								</li>
								<li className="list-item">
									<h4>4+</h4>
									<span>Projects <br/>completed</span>
								</li>
							</ul>
							<a href="#" className="btn">Download CV <BsDownload/></a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About