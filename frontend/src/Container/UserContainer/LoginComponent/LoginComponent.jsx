import React from 'react';
import "./LoginComponent.css";
const LoginComponent = () => {
	return (
		<>
			<div className='login__container'>
				<form onSubmit={() => {

				}}>
					<input type="text" placeholder="Enter Email or Username  " name="uname" required />
					<input type="password" placeholder="Enter Password" name="psw" required />
					<div className='buttons__container'>
						<button type="submit" className=''>Login</button>
						{/* <button type="button" className="" style={{}}>Cancel</button> */}
					</div>
					<div>
						<label>
							<input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
						</label>
						<span className="psw"> <a href='#'>Forgot password?</a></span>
					</div>
				</form>
			</div>
		</>
	)
}

export default LoginComponent