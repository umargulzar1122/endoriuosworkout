import React from 'react'
import "./HeroContainer.css";

const HeroContainer = () => {
	return (
		<>
			<div className='hero__container' id='home'>
				<div className='heading'>
					<h2>
						INCREASE YOUR MUSCLE POWER
					</h2>
				</div>
				<div className='description'>
					<p>
						A small river named Duden flows by their place and supplies it with the necessary regelialia.
					</p>
				</div>
				<div>
					<button className='tour__button'>Take a tour now</button>
				</div>
			</div>
		</>
	)
}

export default HeroContainer