import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'



const SearchBar = () => {
  const iconStyle = {
    color: '#ffcd00', // Change this to the desired color
    fontSize: '24px', // You can adjust the size if needed
  };

  return (
    <div className='search-container'>
        <span className='form-title'>FIRST CLASS FREE</span>
        <p className='form-note'>*Available at Participating Studios.</p>
        <div className="location-dropdown-container">

            <div className="loca-icon-container">
                <FontAwesomeIcon icon={faLocationDot} style={iconStyle}   />
            </div>

            <div className="loca-infor-container">
                <span className='loca-infor-title'>YOUR LOCATION</span>
                <br></br>
                <select className='location-select' name="location" id="loaction">
                <option value="" selected="selected">Chelsea</option>
                  </select>
                  <br/>
                <span className='local-infor-note'> Change City or Zip Code</span>
            </div>

        </div>
    </div>
  )
}

export default SearchBar