
import React, {Component} from 'react'
import './Blogs.css'
import {top_blogs, recent_blogs} from '../helpers/Data'

class Blogs extends Component
{
	display_top_blogs = _ =>
	{
		let items = top_blogs.map(item =>
		{
			return (
				<div className = 'c col-lg-6 col-12 mb-4' key = {Math.random()}>
					<div className = 'card shadow-lg'>
						<img className = 'card-img-top' src = {item.img.default} alt = {item.alt}/>
						<div className = 'card-body'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
							<button className = 'btn btn-outline-success btn-sm text-capitalize'>read more<i className="ms-2 fas fa-chevron-right"></i></button>
						</div>
					</div>
				</div>
			)
		})
		return items
	}

	display_recent_blogs = _ =>
	{
		let items = recent_blogs.map(item =>
		{
			return (
				<div className = {`c col-12 ${item.mar}`} key = {Math.random()}>
					<div className = 'card shadow-lg'>
						<img className = 'card-img-top' src = {item.img.default} alt = {item.alt}/>
						<div className = 'card-body'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
							<button className = 'btn btn-outline-success btn-sm text-capitalize'>read more<i className="ms-2 fas fa-chevron-right"></i></button>
						</div>
					</div>
				</div>
			)
		})
		return items
	}

	render()
	{
		return (
			<section className = 'blogs py-5' id = 'blogs'>
				<div className = 'container'>
					<div className = 'title'>
						<h2 className = 'text-capitalize text-center mb-5 position-relative p-3'>blogs</h2>
					</div>

					<div className = 'row'>
						<div className = 'c col-lg-8 col-12'>
							<div className = 'row'>
								<div className = 'left-side-title mb-3'>
									<h3 className = 'title text-center position-relative p-3 text-capitalize'>top blogs</h3>
								</div>
								{this.display_top_blogs()}
							</div>
						</div>

						<div className = 'c col-lg-4 col-12'>
							<div className = 'row'>
								<div className = 'right-side-title mb-3'>
									<h3 className = 'title text-center position-relative p-3 text-capitalize'>recent blogs</h3>
								</div>
								{this.display_recent_blogs()}
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Blogs