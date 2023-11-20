import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
            <div className="footer-infor">
                <div className="company">
                    <ul> Company
                        <li> About</li>
                        <li> Careers</li>
                        <li> Press</li>
                    </ul>
                </div>
                <div className="class">
                    <ul> Class
                        <li>First Timers</li>
                        <li>Why Row</li>
                        <li> The Workout</li>
                        <li>Meter Program</li>
                    </ul>
                </div>

                <div className="find-us">
                 <ul> Find us
                        <li>Locations</li>
                        <li>XPASS</li>
                 </ul>
                </div>

                <div className="opportunity">
                    <ul> Opportunity
                        <li>Corporate Wellness</li>
                        <li> Franchise</li>
                    </ul>
                </div>

                <div className="support">
                    <ul> Support
                        <li>Contact Us</li>
                        <li>COVID Saafety Measures</li>
                    </ul>
                </div>
            </div>

            <div className="footer-copyright">
                <hr></hr>
                <div className="footer-policy1">
                   <p className='policy'> 2023 Row House</p>
                   <p className='policy'> Privacy Policy</p>
                   <p className='policy'> Terms of Service</p>
                   <p className='policy'> Privacy Notice for California Residents</p>
                </div>
                <div className="footer-policy2">
                    <p className='policy'> Your Privacy Choices</p>
                    <p className='policy'> Cookie Policy</p>
                </div>

                
            </div>
    </div>
  )
}

export default Footer