import React, { Component } from 'react'
import Banner from './Banner'
import Footer from './Footer'
import HotNews from './HotNews';

// const particlesOptions = {
//     particles: {
//       number: {
//         value: 80,
//         density: {
//           enable: true,
//           value_area: 800
//         },
//         interactivity: {
//           detect_on: "window",
//           events: {
//             onhover: {
//               enable: true,
//               mode: "repulse"
//             }
//           }
//         }
//       }
//     }
//   }

export default class Home extends Component {
    render() {
        return (
            
            <div className='homediv'>
                <Banner />
                <HotNews/>
                {/* <Particles className='particles' params={particlesOptions} /> */}
                <Footer/>
            </div>
        )
    }
}
