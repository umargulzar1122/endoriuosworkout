import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import "./NavComponent.css";

import { UserContext } from '../../index';

const NavComponent = () => {

	const userData = useContext(UserContext);

	debugger
	return (
		<>
			<div className='nav__container'>
				<ul>
					<li>
						<Link to="/">
							<button>
								Home
							</button>
						</Link>
					</li>
					<li><button>Classes</button></li>
					<li><button>Trainers</button></li>
					<li><button>Blog</button></li>
					<li><button>Gallery</button></li>
					<li><button>Contact us</button></li>
					{
						!userData &&
						<>
							<li>
								<Link to='/login'>
									<button className='button'>
										Login
									</button>
								</Link>
							</li>
							<li>
								<Link to="/register">
									<button className='button'>
										Sign Up
									</button>
								</Link>
							</li>
						</>
					}
					{
						userData &&
						<>
							<li>
								<Link>
									<button className='button'>
										Profile
									</button>
								</Link>
							</li>
						</>
					}
				</ul>
			</div>
		</>
	)
}

export default NavComponent