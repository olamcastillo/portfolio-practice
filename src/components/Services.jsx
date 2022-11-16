import React from 'react';
import { FaPencilRuler } from 'react-icons/fa'
import { BsArrowRight, BsPatchCheckFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

import './Services.css'

const Services = ( {handleModalService, modalService} ) => {

	return (
		<div>
			<div className="services section" id="services">
				<div className="container flex-center">
					<h1 className="section-title-01">Services</h1>
					<h2 className="section-title-02">Services</h2>
					<div className="content">
						<div className="services-description">
							<h3>What I provide</h3>
						</div>
						<ul className="service-list">
							<li className="service-container">
								<div className="service-card">
									<FaPencilRuler className='icon'/>
									<h3>UI/UX Consultancy</h3>
									<div className="learn-more-btn"  onClick={() => handleModalService(true)}>Learn More
										<BsArrowRight className='icon'/>
									</div>
								</div>
								<div className={modalService ? 'service-modal flex-center' : 'service-modal flex-center hidden'}>
									<div className="service-modal-body">
										<MdClose className='modal-close-btn' onClick={() => handleModalService(false)}/>
										<h3>UI/UX Consultancy</h3>
										<h4>Design</h4>
										<p>Let's talk about your ideas, sugestions, and more. I will take your project on the correct way</p>
										<h4>Lorem, ipsum dolor.</h4>
										<ul>
											<li><BsPatchCheckFill className='icon'/><p>Lorem ipsum dolor sit amet consectetur.</p></li>
											<li><BsPatchCheckFill className='icon'/><p>Lorem ipsum dolor sit amet consectetur.</p></li>
											<li><BsPatchCheckFill className='icon'/><p>Lorem ipsum dolor sit amet consectetur.</p></li>
											<li><BsPatchCheckFill className='icon'/><p>Lorem ipsum dolor sit amet consectetur.</p></li>
										</ul>
									</div>								
								</div>
							</li>
							
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services