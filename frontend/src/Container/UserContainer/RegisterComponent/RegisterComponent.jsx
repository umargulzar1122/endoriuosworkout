import React from 'react'
import "../LoginComponent/LoginComponent.css";
const RegisterComponent = () => {
	return (
		<div>
			<div className='login__container'>
				<form onSubmit={() => {

				}}>
					<input type="text" placeholder="Enter Email" name="uname" required />
					<input type="text" placeholder="Enter User Name" name="uname" required />
					<input type="password" placeholder="Enter Password" name="psw" required />
					<input type="password" placeholder="Repeat Password" name="psw" required />
					<input type="tel" placeholder="Enter Phone Number" name="psw" required />
					<div className='buttons__container'>
						<button type="submit" className=''>Sign Up</button>
						{/* <button type="button" className="" style={{}}>Cancel</button> */}
					</div>
				</form>
			</div>
		</div>
	)
}

export default RegisterComponent