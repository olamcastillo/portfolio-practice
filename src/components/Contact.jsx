import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';

import './Contact.css'

const Contact = () => {
	return (
		<div>
			<div className="contact section" id="contact">
				<div className="container flex-center">
					<h1 className="section-title-01">Contact Me</h1>
					<h2 className="section-title-02">Contact Me</h2>
						<div className="content">
							<div className="contact-left">
								<h2>Let's discuss your new project</h2>
								<ul>
									<li className="contact-list">
										<div className="contact-list-item-title">
											<BsEnvelopeFill className='icon'/>
											<h3 className="item-title">Email Adress</h3>
										</div>
										<span>name@dfsdf.com</span>
									</li>
								</ul>
							</div>
							<div className="contact-right">
								<p>Lorem ipsum dolor sit amet<br/><span>adipisicing elit</span>Quia incidunt itaque minus.</p>
								<form action='' className="contact-form">
									<div className="first-row">
										<input type="text" placeholder="Name"/>
									</div>
									<div className="second-row">
										<input type="email" placeholder="Email"/>
										<input type="text" placeholder="Subject"/>
									</div>
									<div className="third-row">
										<textarea name="message" id="" rows="7" placeholder='Message'></textarea>
									</div>
									<button className="btn" type="submit">Send Message <FaTelegramPlane className='icon'/></
									button> 
								</form>
							</div>
						</div>
				</div>
			</div>
		</div>
	)
}

export default Contact