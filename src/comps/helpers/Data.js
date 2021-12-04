
let navbar_items = [
	{
		name: 'Home',
		icon: 'fas fa-home',
		link: ''
	},
	{
		name: 'About',
		icon: 'fas fa-address-card',
		link: 'about'
	},
	{
		name: 'Products',
		icon: 'fas fa-tv',
		link: 'products'
	},
	{
		name: 'Blogs',
		icon: 'fas fa-blog',
		link: 'blogs'
	},
	{
		name: 'FAQ',
		icon: 'fas fa-question-circle',
		link: 'faq'
	},
	{
		name: 'Contact',
		icon: 'fas fa-phone-alt',
		link: 'contact'
	}
]

let navbar_accounts = [
	{
		link: 'https://www.facebook.com/',
		icon: 'fab fa-facebook'
	},
	{
		link: 'https://www.instagram.com/',
		icon: 'fab fa-instagram'
	},
	{
		link: 'https://twitter.com/',
		icon: 'fab fa-twitter'
	}
]

let products = [
	{
		img   : require('../../images/pics/products/1.png'),
		alt   : 'product 1' ,
		title : 'TCL Smart TV',
		oldp  : '7999 DH' ,
		newp  : '6500 DH'
	},
	{
		img   : require('../../images/pics/products/2.png'),
		alt   : 'product 2',
		title : 'Toshiba Smart TV',
		oldp  : '9000 DH' ,
		newp  : '8500 DH'
	},
	{
		img   : require('../../images/pics/products/3.png'),
		alt   : 'product 3',
		title : 'Toshiba Full HD Smart TV',
		oldp  : '10000 DH' ,
		newp  : '9500 DH'
	},
	{
		img   : require('../../images/pics/products/5.png'),
		alt   : 'product 4',
		title : 'Toshiba HD Smart TV',
		oldp  : '9500 DH' ,
		newp  : '8500 DH'
	},
	{
		img   : require('../../images/pics/products/6.png'),
		alt   : 'product 5',
		title : 'Samsung TV Full HD Smart TV',
		oldp  : '7999 DH' ,
		newp  : '6500 DH'
	},
	{
		img   : require('../../images/pics/products/7.png'),
		alt   : 'product 6',
		title : 'Panasonic 4K Smart TV',
		oldp  : '9000 DH' ,
		newp  : '8000 DH'
	},
	{
		img   : require('../../images/pics/products/9.png'),
		alt   : 'product 7',
		title : 'Toshiba HD Smart TV',
		oldp  : '7500 DH' ,
		newp  : '7000 DH'
	}
]

let top_blogs = [
	{
		img: require('../../images/pics/blogs/1.jpg'),
		alt: 'blog 1'
	},
	{
		img: require('../../images/pics/blogs/2.jpg'),
		alt: 'blog 2'
	},
	{
		img: require('../../images/pics/blogs/3.jpg'),
		alt: 'blog 3'
	},
	{
		img: require('../../images/pics/blogs/5.jpg'),
		alt: 'blog 4'
	},
	{
		img: require('../../images/pics/blogs/4.jpg'),
		alt: 'blog 5'
	}
]

let recent_blogs = [
	{
		img: require('../../images/pics/blogs/6.jpg'),
		alt: 'blog 6',
		mar: 'mb-3'
	},
	{
		img: require('../../images/pics/blogs/7.jpg'),
		alt: 'blog 7',
		mar: ''
	}
]

let faq_items = [
	{
		id_one: 'headingOne',
		data_bs_target: '#collapseOne',
		aria_controls: 'collapseOne',
		id_two: 'collapseOne',
		aria_labelledby: 'headingOne',
		title: 'ullam corporis suscipit',
		show: true
	},
	{
		id_one: 'headingTwo',
		data_bs_target: '#collapseTwo',
		aria_controls: 'collapseTwo',
		id_two: 'collapseTwo',
		aria_labelledby: 'headingTwo',
		title: 'Lorem ipsum dolor sit amet',
		show: false
	},
	{
		id_one: 'headingThree',
		data_bs_target: '#collapseThree',
		aria_controls: 'collapseThree',
		id_two: 'collapseThree',
		aria_labelledby: 'headingThree',
		title: 'sed quia consequuntur',
		show: false
	}
]

let contact = [
	{
		type: 'e-mail',
		info: 'support@microone.com',
		icon: 'fas fa-envelope'
	},
	{
		type: 'phone-number',
		info: '608-357-2697',
		icon: 'fas fa-phone-alt'
	},
	{
		type: 'address-location',
		info: '255 Alphatonia Road, Lambells Lagoon NT 0822, Australia',
		icon: 'fas fa-map-marker-alt'
	}
]

export
{
	navbar_items,
	navbar_accounts,
	products,
	top_blogs,
	recent_blogs,
	faq_items,
	contact
}