import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
    const iconStyle ={
        fontSize:'25px',
    }
  return (
    <div className='social-container'>
        <span className='sub-text'>Follow us on Social</span>
        <div className="social-icons-container">
                <div className="tiwtter">
                    <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
                </div>

                <div className="facebook">
                     <FontAwesomeIcon icon={faSquareFacebook} style={iconStyle} />
                </div>
                <div className="ins">
                    <FontAwesomeIcon icon={faInstagram} style={iconStyle}/>
                </div>
                <div className="linked">
                    <FontAwesomeIcon icon={faLinkedin}  style={iconStyle} />
                </div>

        </div>
    </div>
  )
}

export default SocialMedia