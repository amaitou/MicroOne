
import React, {Component} from 'react'
import './Contact.css'
import contact_pic from '../../images/pics/contact.svg'
import {contact} from '../helpers/Data'

class Contact extends Component
{
	display_contact_items = _ =>
	{
		let items = contact.map(item =>
		{
			return (
				<div className = {item.type} key = {Math.random()}>
					<p className = 'ps-3'>
						{item.info}
						<i className={`${item.icon} ms-1`}></i>
					</p>
				</div>
			)
		})
		return items
	}

	render()
	{
		return (
			<section className = 'contact py-5 mb-5' id = 'contact'>
				<div className = 'container'>
					<div className = 'title'>
						<h2 className = 'text-capitalize text-center mb-5 position-relative p-3'>contact us</h2>
					</div>

					<div className = 'row align-items-center'>
						<div className = 'c col-md-7 col-12'>
							<div className = 'left-side mb-lg-0 mb-5'>
								<div className = 'info'>
									{this.display_contact_items()}
								</div>
							</div>
						</div>
						<div className = 'c col-md-5 col-12'>
							<div className = 'right-side text-lg-end text-center'>
								<img className = 'img-fluid w-75 shadow-lg' src = {contact_pic} alt = 'contact_pic' />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Contact