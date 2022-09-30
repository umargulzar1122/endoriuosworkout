import React from 'react';
import { motion } from "framer-motion"
import "./HeroContainer.css";

const HeroContainer = () => {
	return (
		<>
			<div className='hero'>
				<div className='hero__container' id='home'>
					<motion.div
						initial={{ opacity: 0, scale: 0.3 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8 }}>
						<div>
							<h2 className='heading'>
								INCREASE YOUR MUSCLE POWER
							</h2>
						</div>
						<div className='description'>
							<p style={{ fontSize: "30px" }}>
								Be strong Training hard
							</p>
						</div>
						<div>
							<button className='tour__button'>Take a tour now</button>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	)
}

export default HeroContainer