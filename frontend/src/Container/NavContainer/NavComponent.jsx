import React from 'react'
import "./NavComponent.css";
const NavComponent = () => {
	return (
		<>
			<div className='nav__container'>
				<ul>
					<li><button onClick={() => { }}>Home</button></li>
					<li><button>Classes</button></li>
					<li><button>Trainers</button></li>
					<li><button>Blog</button></li>
					<li><button>Gallery</button></li>
					<li><button>Contact us</button></li>
					<li><button className='button'>Login</button></li>
					<li><button className='button'>Sign Up</button></li>
				</ul>
			</div>
		</>
	)
}

export default NavComponent