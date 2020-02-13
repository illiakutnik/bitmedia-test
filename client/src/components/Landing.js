import React from 'react'
import { Link } from 'react-router-dom'

import Mobile from '../style/img/mobile.png'
import Group_13 from '../style/img/Group_13.png'
import Group_15 from '../style/img/Group_15.png'
import Group_14 from '../style/img/Group_14.png'
import Macbook from '../style/img/Macbook.png'
import undraw_online from '../style/img/undraw_online.png'
import undraw_file from '../style/img/undraw_file.png'
import undraw_quiz from '../style/img/undraw_quiz.png'
import Line from '../style/img/Line.png'

const Landing = () => {
	return (
		<>
			<header className='header'>
				<div className='header__main'>
					<h2>AppCo</h2>
					<h1>
						<b>Brainstorming</b> for desired perfect Usability
					</h1>
					<p>
						Our design projects are fresh and simple and will benefit your
						business greatly. Learn more about our work!
					</p>
					<Link to='/users'>
						<button>View Stats</button>
					</Link>
				</div>
				<div className='header__mobile'>
					<img src={Mobile} alt='mobile'></img>
				</div>
			</header>
			<div className='text-section'>
				<h3>
					Why <span>small business owners love</span> AppCo?
				</h3>
				<p>
					Our design projects are fresh and simple and will benefit your
					business greatly. Learn more about our work!
				</p>
			</div>
			<section className='info'>
				<div className='info__box'>
					<img className='Group_13' src={Group_13} alt='clean design'></img>
					<h3>Clean Design</h3>
					<p>Increase sales by showing true dynamics of your website.</p>
				</div>

				<div className='info__box'>
					<img className='Group_15' src={Group_15} alt='secure data'></img>
					<h3>Secure Data</h3>
					<p>Increase sales by showing true dynamics of your website.</p>
				</div>

				<div className='info__box'>
					<img className='Group_14' src={Group_14} alt='retina ready'></img>
					<h3>Retina Ready</h3>
					<p>
						Realize importance of social proof in customer’s purchase decision.
					</p>
				</div>
			</section>
			<section className='learn'>
				<div className='learn__info'>
					<h2>Start Managing your apps business, more faster</h2>
					<p>
						Objectively deliver professional value with diverse web-readiness.
						Collaboratively transition wireless customer service without
						goal-oriented catalysts for change. Collaboratively.
					</p>
					<button>Learn more</button>
				</div>
				<div className='learn__macbook'>
					<img className='learn__macbook-img' src={Macbook} alt='macbook'></img>
				</div>
			</section>
			<div className='img-container'>
				<div className='text-section'>
					<h3 className='text-section__low-h3'>
						<span>Affordable Pricing and Packages</span> choose your best one
					</h3>
					<p className='text-section__low-p'>
						Monotonectally grow strategic process improvements vis-a-vis
						integrated resources.
					</p>
				</div>
				<section className='info'>
					<div className='info__box info__box-low'>
						<h3>Basic</h3>
						<img
							className='undraw_online'
							src={undraw_online}
							alt='undraw_online'
						></img>
						<h2>$29</h2>
						<img className='info__box-line' src={Line} alt='line'></img>
						<p>Push Notifications</p>
						<p>Data Transfer</p>
						<p>SQL Database</p>
						<p>Search & SEO Analytics</p>
						<p>2 months technical support</p>
						<p>2+ profitable keyword</p>
						<button>Purchase now</button>
					</div>

					<div className='info__box info__box-low info__box-standard'>
						<h3>Standard</h3>
						<img
							className='undraw_file'
							src={undraw_file}
							alt='undraw_file'
						></img>
						<h2>$149</h2>
						<img className='info__box-line' src={Line} alt='line'></img>
						<p>Push Notifications</p>
						<p>Data Transfer</p>
						<p>SQL Database</p>
						<p>Search & SEO Analytics</p>
						<p>2 months technical support</p>
						<p>2+ profitable keyword</p>
						<button>Purchase now</button>
					</div>

					<div className='info__box info__box-low'>
						<h3>Unlimited</h3>
						<img
							className='undraw_quiz'
							src={undraw_quiz}
							alt='Retina ready img'
						></img>
						<h2>$39</h2>
						<img className='info__box-line' src={Line} alt='line'></img>
						<p>Push Notifications</p>
						<p>Data Transfer</p>
						<p>SQL Database</p>
						<p>Search & SEO Analytics</p>
						<p>2 months technical support</p>
						<p>2+ profitable keyword</p>
						<button>Purchase now</button>
					</div>
				</section>
				<div className='contact-us'>
					<p>
						If you need custom services or Need more? <span>Contact us</span>
					</p>
				</div>
			</div>
			<footer className='footer'>
				<div className='footer__input'>
					<input type='email' placeholder='Enter your email'></input>
					<button>Subscribe</button>
				</div>
				<div className='footer__footer'>
					<div className='footer__footer-box'>
						<h3>AppCo</h3>
					</div>
					<div className='footer__footer-box'>
						<p>All rights reserved by ThemeTags</p>
					</div>
					<div className='footer__footer-box'>
						<p>Copyrights © 2019. </p>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Landing
