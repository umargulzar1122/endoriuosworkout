import React from 'react'
import Alert from 'react-bootstrap/Alert';

/**
 * 
 {[
		  'primary',
		  'secondary',
		  'success',
		  'danger',
		  'warning',
		  'info',
		  'light',
		  'dark',
		]
 */
const AlertComponent = ({ errorMessage, variant }) => {
	//debugger
	return (
		<div>
			{
				errorMessage &&
				<Alert key={variant} variant={variant} style={
					{
						position: "absolute",
						right: "10px",
						padding: "5px",
						fontSize: "16px",
						top: "11px",
						transition: "all 0.5s"
					}
				}>
					{errorMessage}
				</Alert>
			}

		</div>
	)
}

export default AlertComponent