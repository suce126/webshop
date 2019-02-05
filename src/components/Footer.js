import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='container-footer'>
                <footer>
                    <div>
                        <p className='p-footer'>
                            Copyright &copy; by Ce Su.
                        </p>
                    </div>

                    <div className='icons'>
                        <a href="https://www.facebook.com/ce.su.16"><img src="https://upload.wikimedia.org/wikipedia/en/8/8c/Facebook_Home_logo_old.svg"
                            alt="" /></a>
                        <a href="tel:+4588888888"><img src="http://www.coasty.uk/images/footer-icon-phone.png" alt="" /></a>
                        <a href="https://www.youtube.com/"><img src="https://communityhousingnetwork.org/wp-content/uploads/2017/10/youtube-icon-red.png"
                            alt="" /></a>
                        <a href="https://www.linkedin.com/in/ce-su-15628042/"><img src="https://www.crismary.me/img/socialmedia/linkedin200x200.png"
                            alt="" /></a>
                        <a href="mailto:suce126@126.com"><img src="http://www.suitdoctors.com/wp-content/uploads/2015/11/Email-Icon-200x200.png"
                            alt="" /></a>
                    </div>


                </footer>
            </div>
        )
    }
}
