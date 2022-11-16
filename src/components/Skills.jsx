import React from 'react'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { SiTailwindcss} from 'react-icons/si'
import { FaCss3Alt, FaReact, FaBootstrap } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { ImGit } from 'react-icons/im'

import './Skills.css'

const Skills = () => {
	return (
		<div>
			<div className="skills section" id="skills">
				<div className="container flex-center">
					<h2 className="section-title-01">Skills</h2>
					<h3 className="section-title-02">Skills</h3>
					<div className="content">
						<div className="skills-description">
							<h4>Education & Skills</h4>
							<p>For more than 5 years our experts have been accomplishing enough with modern WebDevelopment, new generation web and ap programming language.</p>
						</div>
						<div className="skills-info education-all">
							<div className="education">
								<h4><label>Education</label></h4>
								<ul className="edu-list">
									<li className="item">
										<span className="year">2021-2022</span>
										<p><span>FreeCodeCamp</span> Org teach Web Development</p>
									</li>
									<li className="item">
										<span className="year">2021-2022</span>
										<p><span>Alura Latam</span> Educational Tech Company</p>
									</li>
								</ul>
							</div>
							<div className="education">
							<h4><label>Skills</label></h4>
							<ul className="skills-list flex-center">
								<li className="skill">
									<h4>HTML</h4>
									<AiFillHtml5 className='icon'/>
								</li>
								<li className="skill">
									<h4>CSS</h4>
									<FaCss3Alt className='icon'/>
								</li>
								<li className="skill">
									<h4>JAVASCRIPT</h4>
									<DiJavascript1 className='icon'/>
								</li>
								<li className="skill">
									<h4>REACT</h4>
									<FaReact className='icon'/>
								</li>
								<li className="skill">
									<h4>BOOTSTRAP</h4>
									<FaBootstrap className='icon'/>
								</li>
								<li className="skill">
									<h4>TAILWIND</h4>
									<SiTailwindcss className='icon'/>
								</li>
								<li className="skill">
									<h4>GITHUB</h4>
									<AiFillGithub className='icon'/>
								</li>
								<li className="skill">
									<h4>GIT</h4>
									<ImGit className='icon'/>
								</li>
							</ul>
						</div>
						</div> 
						<div className="skills-description experiences">
							<h4>Work & Experience </h4>
							<div className="skills-info experiences-set">
								<div className="experience-card">
									<div className="upper">
										<h3>Portfolio Web Page</h3>
										<h5>Olam Dev</h5>
										<span>2022</span>
									</div>
									<div className="hr"></div>
									<h4><label>Developer</label></h4>
									<p>I built and developed a fully responsive web portfolio with modern and minimalist design.</p>
								</div>
								<div className="experience-card">
									<div className="upper">
										<h3>Portfolio Web Page</h3>
										<h5>Lening Photographer</h5>
										<span>2021</span>
									</div>
									<div className="hr"></div>
									<h4><label>Photographer</label></h4>
									<p>I built and developed a personal portfolio website for my client to present his projects. </p>
								</div>
								<div className="experience-card">
									<div className="upper">
										<h3>Sr. Graphic Dashboard</h3>
										<h5>Local Bussiness</h5>
										<span>2022</span>
									</div>
									<div className="hr"></div>
									<h4><label>Bussines</label></h4>
									<p>I design and develop a dashboard using react.js to manage bussiness data</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills