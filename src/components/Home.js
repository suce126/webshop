import React, { Component } from 'react'
import Banner from './Banner'
import Footer from './Footer'
import HotNews from './HotNews';


export default class Home extends Component {
    render() {
        return (
            
            <div className='homediv'>
                <Banner />
                <HotNews/>
                <Footer/>
            </div>
        )
    }
}
