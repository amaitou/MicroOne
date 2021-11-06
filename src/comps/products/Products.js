
import React, {Component} from 'react'
import './Products.css'
import {products} from '../helpers/Data'

class Products extends Component
{
	display_products = _ =>
	{
		let items = products.map(item =>
		{
			return (
				<div className = 'c col-lg-3 col-md-6 col-12 mb-3' key = {Math.random()}>
					<div className = 'card shadow-lg product-one'>
						<div className = 'card-header'>
							<h6 className = 'product-name p-1 my-auto text-center'>{item.title}</h6>
							<div className = "stars text-center text-warning">
								<span className = 'fas fa-star me-1'></span>
								<span className = 'fas fa-star me-1'></span>
								<span className = 'fas fa-star me-1'></span>
								<span className = 'fas fa-star me-1'></span>
								<span className = 'fas fa-star me-1'></span>
							</div>
						</div>
						<div className = 'card-body'>
							<img className = 'img-fluid' src = {item.img.default} alt = {item.alt} />
						</div>
						<div className = "card-footer">
							<div className = 'pricing d-flex justify-content-between align-items-center'>
								<div className = 'price'>
									<span className = 'first-price d-block text-danger text-decoration-line-through fst-italic'>{item.oldp}</span>
									<span className = 'second-price'>{item.newp}</span>
								</div>
								<div className = 'shop-btn'>
									<button className = 'btn btn-outline-success text-capitalize btn-sm'>add item</button>
								</div>
							</div>
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
			<section className = 'products py-5' id = 'products'>
				<div className = 'container'>
					<div className = 'title'>
						<h2 className = 'text-capitalize text-center mb-5 p-3 position-relative'>products</h2>
					</div>
					<div className = 'row justify-content-center'>
						{this.display_products()}
					</div>
				</div>
			</section>
		)
	}
}

export default Products