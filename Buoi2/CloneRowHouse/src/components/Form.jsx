import React from 'react'

function Form() {
  return (
    <form className='form-infor'>

        <label>First name</label><br></br>
        <input type='text' placeholder='First name'></input><br></br>
        <label>Last name</label><br></br>
        <input type='text' placeholder='Last name'></input><br></br>
        <label>Last name</label><br></br>
        <input type='email' placeholder='Email'></input><br></br>
        <label>Phone number</label><br></br>
        <input type='number' placeholder='Phone number'></input><br></br>

        <p className='form-term'> By clicking “Try Row House,” you agree to our Terms and to receive automated marketing calls or texts from 
        or on behalf of Row House at the phone number provided above. Consent is not a condition of purchase. 
        Message and data rates may apply. </p>

        <button className='try-btn' type='submit'>TRY ROW HOUSE</button>

    </form>
  )
}

export default Form