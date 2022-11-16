import React, { useState }  from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from "react-scroll-to-top";

import './App.css';

function App() {
	const [modalService, setModalService] = useState(false)
	const [modalPortfolio, setModalPortfolio] = useState(false)
	const [navigation, setNavigation] = useState(true)

	const handleModalService = ( state ) => {
		setModalService(state)
	}
	const handleModalPortfolio = ( state ) => {
		setModalPortfolio(state)
	}

	const handleNavigation = ( state ) => {
		setNavigation(state)
	}

  return (
    <div className="App">
			<ScrollToTop smooth component={<AiOutlineArrowUp className='scroll-icon'/>}/>
			<Header navigation={navigation} handleNavigation={handleNavigation}/>
			<Home/>
			<About/>
			<Skills/>
			<Services handleModalService={handleModalService} modalService={modalService}/>
			<Portfolio handleModalPortfolio={handleModalPortfolio} modalPortfolio={modalPortfolio}/>
			<Contact/>
			<Footer/>
    </div>
  );
}

export default App;
