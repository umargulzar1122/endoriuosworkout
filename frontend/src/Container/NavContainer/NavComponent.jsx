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
						<Link to="/" href="#home">
							Home
						</Link>
					</li>
					<li>
						<a href='#exercises' className=''>Exercises</a>
					</li>
					<li><a href='#abc'>Classes</a></li>
					<li><a href='#abc'>Trainers</a></li>
					<li><a href='#abc'>Blog</a></li>
					<li><a href='#abc'>Gallery</a></li>
					<li><a href='#abc'>Contact us</a></li>
					{
						!userData &&
						<>
							<li>
								<Link to='/login'>
									Login
								</Link>
							</li>
							<li>
								<Link to="/register">
									Sign Up
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