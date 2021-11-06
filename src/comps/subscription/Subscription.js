
import React, {Component} from 'react'
import './Subscription.css'

class Subscription extends Component
{
	render()
	{
		return (
			<section className = 'subscription py-5 text-dark'>
				<div className = 'container shadow-lg'>
					<div className = 'row p-3'>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'left-side text-md-start text-center mb-lg-0 mb-3'>
								<h5 className = 'title text-capitalize'>get weekly news, products of us <i className=" ms-2 fas fa-users"></i></h5>
								<h6 className = 'sub-title text-capitalize'>subscribe via your email <i className="ms-2 fas fa-envelope"></i></h6>
							</div>
						</div>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'row'>
								<div className = 'input col-lg-8 col-12 mb-lg-0 mb-3'>
									<input className = 'w-100 h-100 p-3  text-md-start text-center' type = 'text' placeholder = 'Enter Your Email ...' />
								</div>
								<div className = 'sub-button col-lg-4 col-12'>
									<button className = 'w-100 h-100 btn btn-outline-success'>Subscribe</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Subscription