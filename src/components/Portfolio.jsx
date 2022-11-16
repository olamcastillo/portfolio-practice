import React from 'react';
import { MdClose } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'

import './Portfolio.css'

const Portfolio = ({handleModalPortfolio, modalPortfolio} ) => {
	return (
		<div>
			<div className="portfolio section" id='portfolio'>
				<div className="container flex-center">
					<h1 className="section-title-01">Portfolio</h1>
					<h2 className="section-title-02">Portfolio</h2>
					<div className="content">
						<div className="portfolio-list">
							<div className="img-card-container">
								<div className="img-card" onClick={() => handleModalPortfolio(true)}>
									<div className="overlay"></div>
									<div className="info">
										<h3>Web Design</h3>
										<span>Youtube</span>
									</div>
									<img src="#" alt="image" />
								</div>
								<div className={modalPortfolio ? 'portfolio-model flex-center' : 'portfolio-model flex-center hidden'}>
									<div className="portfolio-model-body">
										<MdClose className='portfolio-close-btn' onClick={() => handleModalPortfolio(false)}/>
										<h3>Web Design</h3>
										<img src="#" alt="image-portfolio"/>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna			aliqua. Ut enim ad minim veniam, quis ostrud exercitation ullamco laboris				nisi ut aliquip ex ea commodo aS TTEeTaAohSo Keb</p>
									</div>
								</div>
							</div>
							<div className="img-card-container">
								<div className="img-card" onClick={() => handleModalPortfolio(true)}>
									<div className="overlay"></div>
									<div className="info">
										<h3>Web Design</h3>
										<span>Youtube</span>
									</div>
									<img src="#" alt="image" />
								</div>
								<div className={modalPortfolio ? 'portfolio-model flex-center' : 'portfolio-model flex-center hidden'}>
									<div className="portfolio-model-body">
										<MdClose className='portfolio-close-btn' onClick={() => handleModalPortfolio(false)}/>
										<h3>Web Design</h3>
										<img src="#" alt="image-portfolio"/>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna			aliqua. Ut enim ad minim veniam, quis ostrud exercitation ullamco laboris				nisi ut aliquip ex ea commodo aS TTEeTaAohSo Keb</p>
									</div>
								</div>
							</div>
							<div className="img-card-container">
								<div className="img-card" onClick={() => handleModalPortfolio(true)}>
									<div className="overlay"></div>
									<div className="info">
										<h3>Web Design</h3>
										<span>Youtube</span>
									</div>
									<img src="#" alt="image" />
								</div>
								<div className={modalPortfolio ? 'portfolio-model flex-center' : 'portfolio-model flex-center hidden'}>
									<div className="portfolio-model-body">
										<MdClose className='portfolio-close-btn' onClick={() => handleModalPortfolio(false)}/>
										<h3>Web Design</h3>
										<img src="#" alt="image-portfolio"/>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna			aliqua. Ut enim ad minim veniam, quis ostrud exercitation ullamco laboris				nisi ut aliquip ex ea commodo aS TTEeTaAohSo Keb</p>
									</div>
								</div>
							</div>
							<div className="img-card-container">
								<div className="img-card" onClick={() => handleModalPortfolio(true)}>
									<div className="overlay"></div>
									<div className="info">
										<h3>Web Design</h3>
										<span>Youtube</span>
									</div>
									<img src="#" alt="image" />
								</div>
								<div className={modalPortfolio ? 'portfolio-model flex-center' : 'portfolio-model flex-center hidden'}>
									<div className="portfolio-model-body">
										<MdClose className='portfolio-close-btn' onClick={() => handleModalPortfolio(false)}/>
										<h3>Web Design</h3>
										<img src="#" alt="image-portfolio"/>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna			aliqua. Ut enim ad minim veniam, quis ostrud exercitation ullamco laboris				nisi ut aliquip ex ea commodo aS TTEeTaAohSo Keb</p>
									</div>
								</div>
							</div>
							<div className="img-card-container">
								<div className="img-card" onClick={() => handleModalPortfolio(true)}>
									<div className="overlay"></div>
									<div className="info">
										<h3>Web Design</h3>
										<span>Youtube</span>
									</div>
									<img src="#" alt="image" />
								</div>
								<div className={modalPortfolio ? 'portfolio-model flex-center' : 'portfolio-model flex-center hidden'}>
									<div className="portfolio-model-body">
										<MdClose className='portfolio-close-btn' onClick={() => handleModalPortfolio(false)}/>
										<h3>Web Design</h3>
										<img src="#" alt="image-portfolio"/>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna			aliqua. Ut enim ad minim veniam, quis ostrud exercitation ullamco laboris				nisi ut aliquip ex ea commodo aS TTEeTaAohSo Keb</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="get-in-touch sub-section">
					<div className='container'>
						<div className="content flex-center">
							<div className="contact-card flex-center">
								<div className="title">
									<h4>Let's Talk</h4>
									<h3>About Your</h3>
									<h2>Next Project</h2>
								</div>
								<div className="contact-btn">
									<a href="#" className="btn">Get In Touch <FaTelegramPlane/></a>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Portfolio