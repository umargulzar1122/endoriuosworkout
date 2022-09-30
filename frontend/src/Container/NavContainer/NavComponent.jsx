import React, { useContext, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { LOGOUT_USER } from "../../utils/Constant";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../Container/Context/AuthContext";
import "./NavComponent.css";


const NavComponent = () => {

	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const location = useLocation();
	const { currentUser, logout } = useContext(AuthContext);
	return (
		<>
			<div className="menu" style={{ color: location.pathname === "/" || location.pathname.includes("login") || location.pathname.includes("register") ? "#fff" : "#000" }}>
				{
					!isOpenMenu &&
					< AiOutlineMenu onClick={() => {
						setIsOpenMenu(!isOpenMenu);
					}} />
				}
			</div>
			<div id="myNav" className="overlay" style={{ height: isOpenMenu ? "100%" : "0%" }}>
				{
					isOpenMenu &&
					<div className='closebtn' onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
						<AiOutlineClose></AiOutlineClose>
					</div>
				}
				<div className="overlay-content">
					<Link to="/" onClick={() => { setIsOpenMenu(!isOpenMenu) }}>Home</Link>
					<Link to="/exercises" onClick={() => { setIsOpenMenu(!isOpenMenu) }}>Exercises</Link>
					{
						!currentUser &&
						<>
							<Link to="/login" onClick={() => { setIsOpenMenu(!isOpenMenu) }}>Login</Link>
							<Link to="/register" onClick={() => { setIsOpenMenu(!isOpenMenu) }}>Sign Up</Link>
						</>
					}
					{
						currentUser &&
						<>
							<Link to="/profile" onClick={() => { setIsOpenMenu(!isOpenMenu) }}>Profile</Link>
							<button className='logout__button' onClick={async () => {
								await logout();
								setIsOpenMenu(!isOpenMenu)
							}}
							>Logout</button>
						</>
					}
				</div>
			</div>


			{/* <div className='nav__container'>
				<ul>
					<li>
						<a href='#home' className=''>Home</a>
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
				*/}
		</>
	)
}

export default NavComponent