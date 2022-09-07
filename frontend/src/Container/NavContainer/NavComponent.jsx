import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { LOGOUT_USER } from "../../utils/Constant";
import "./NavComponent.css";

import { UserContext } from '../../index';

const NavComponent = () => {

	const userData = useContext(UserContext);
	const logout = async () => {
		try {
			await axios.get(LOGOUT_USER);
			window.location.href = "/";
		} catch (error) {

		}
	}
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
					<li>
						<Link to='/exercises'>
							<button>Exercises</button>
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
								<Link to="profile">
									<button className='button'>
										Profile
									</button>
								</Link>
							</li>
							<li>
								<button className='button' onClick={logout}>
									Logout
								</button>
							</li>
						</>
					}
				</ul>
			</div>
		</>
	)
}

export default NavComponent