import React from 'react'
import { BsInstagram, BsGithub, BsTwitter } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
	return (
		<div>
			<div className="footer">
				<div className="footer-container">
					<div className="about group">
						<h2>martian</h2>
						<p>Front-end Developer</p>
						<a href="#about">About Me</a>
					</div>
					<div className="hr"></div>
					<div className="info group">
						<h3>More</h3>
						<ul>
							<li><a href="#skills">skills</a></li>
							<li><a href="#services">services</a></li>
							<li><a href="#portfolio">portfolio</a></li>
							<li><a href="#contact">contact</a></li>
						</ul>
					</div>
					<div className="hr"></div>
					<div className="follow group">
						<h3>Follow</h3>
						<ul>
							<li><a href=""></a><BsInstagram className='icon'/></li>
							<li><a href=""></a><BsGithub className='icon'/></li>
							<li><a href=""></a><BsTwitter className='icon'/></li>
						</ul>
					</div>
					
				</div>
				<div className="footer-copyright group">
					<p>© Built by Olam - All Rights Reserved</p>
				</div>
			</div>
		</div>
	)
}

export default Footer