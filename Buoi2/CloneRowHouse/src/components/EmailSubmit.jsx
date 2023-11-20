import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const EmailSubmit = () => {
  return (
    <div className='email-submit-container'>
        <label>Email Address</label> <br/>
        <div className="small-form-container">
            <input className='input-email' type='email' ></input>
            <div className="button-container">
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    </div>
  )
}

export default EmailSubmit