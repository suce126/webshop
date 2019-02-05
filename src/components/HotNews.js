import React, { Component } from 'react'


export default class HotNews extends Component {
    render() {
        return (
            <div className='container-hotnews'>

                <div className='col-1-of-3'>
                    <img src="http://vester-moebler.dk/webshop/img/p/6/1/2/4/6124-large_default.jpg" alt=""/>
                </div>


                <div className='col-1-of-3'>
                    <img src="http://vester-moebler.dk/webshop/img/p/7/9/8/8/7988-large_default.jpg" alt=""/>
                </div>


                <div className='col-1-of-3'>
                    <img src="http://vester-moebler.dk/webshop/img/p/9/0/3/3/9033-large_default.jpg" alt=""/>
                </div>

            </div>
        )
    }
}

