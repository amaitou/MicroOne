
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
import Sb from './comps/sb/Sb'

class App extends Component
{
    render()
    {
        return(
            <>
                <Sb />
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
