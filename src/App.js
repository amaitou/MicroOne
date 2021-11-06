
import React, {Component} from 'react'
import Header from './comps/header/Header'
import Navbar from './comps/navbar/Navbar'
import About from './comps/about/About'
import Subscription from './comps/subscription/Subscription'
import Products from './comps/products/Products'
import Blogs from './comps/blogs/Blogs'
import Faq from './comps/faq/Faq'
import Contact from './comps/contact/Contact'
import Footer from './comps/footer/Footer'
import './App.css'


class App extends Component
{
    state = {s: false}

    check_scroll = _ =>
    {
        (window.scrollY >= 400) ? this.setState({s: true}): this.setState({s: false})
    }

    handle_click = _ =>
    {
        window.scroll(0, 0)
    }

    componentDidMount()
    {
        window.addEventListener('scroll', event =>
        {
            this.check_scroll()
        })

        document.addEventListener('DOMContentLoaded', event =>
        {
            this.check_scroll()
        })
    }

    render()
    {
        return(
            <>
                <button className = {`btn btn-success rounded-circle btn-sm position-fixed ${this.state.s ? 'd-block': 'd-none'}`} id = 'btn-up' onClick = {this.handle_click}><i class="fas fa-arrow-up"></i></button>
                <div className = '_header'>
                    <Header />
                </div>

                <Navbar />

                <div className = '_body'>
                    <About />
                    <Subscription />
                    <Products />
                    <Blogs />
                    <Faq />
                    <Contact />
                </div>

                <div className = '_footer'>
                    <Footer />
                </div>
            </>
        )
    }
}

export default App;
