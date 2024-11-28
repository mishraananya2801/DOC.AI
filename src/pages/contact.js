/**
* Author: Ananya Mishra
*/

import React from 'react'
import './css/contact.css'
import Mail from '../Assets/mail.png'

function Contact() {
	return (
		<div className='main'>
			<div className='card'>
				<div className='contact-details'>
					<div>
					<h1 className='heading'>Contact Us</h1>
					<p className='sub-heading'>Get in touch with us for more information.</p>
					<p>Email: support@doc.ai</p>
					<p>Phone: +1 (123) 456-7890</p>
					<p>Address: 123 Main St, City, State, Zip</p>
					</div>
				</div>
				<img src={Mail} alt='' className='image' />
			</div>
		</div>
	)
}

export default Contact
