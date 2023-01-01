import React from 'react'

function LeaseForm(props) {
  const {setShowLeaseFormModal} = props

  return (
    <div className='modal'  onClick={() => setShowLeaseFormModal(false)}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
            <div className='modal-header'>
            </div>
            <div className='modal-body'>
            <div className="form">
            <form >
            <div className="title">Lease</div>
            <div className="subtitle">  </div>
            
            {/* FIRST NAME INPUT */}
            <div className="input-container ic1">
                    <input 
                    id="firstname" 
                    className="input" 
                    type="text" 
                    placeholder=" "
                    // value={firstName}
                    // onChange={handleFirstNameChange}
                    required
                    />

            <div className="cut"></div>
            <label for="firstname" className="placeholder">First Name</label>
            </div>

            {/* LAST NAME INPUT */}
            <div className="input-container ic2">
                    <input 
                    id="lastname" 
                    className="input" 
                    type="text" 
                    placeholder=" " 
                    // value={lastName}
                    // onChange={handleLastNameChange}
                    required
                    />
                    
            <div className="cut"></div>
            <label for="lastname" className="placeholder">Last Name</label>
            </div>
                
            {/* PHONE NUMBER INPUT */}
            <div className="input-container ic2">
                    <input 
                    id="lastname" 
                    className="input" 
                    type="text" 
                    placeholder=" " 
                    // value={phoneNumber}
                    // onChange={handlePhoneNumberChange}
                    required
                    />
                    
            <div className="cut"></div>
            <label for="lastname" className="placeholder">Phone Number</label>
            </div>

            {/* EMAIL INPUT */}
            <div className="input-container ic2">
                    <input 
                    id="lastname" 
                    className="input" 
                    type="text" 
                    placeholder=" " 
                    // value={newEmailAddress}
                    // onChange={handleNewEmailChange}
                    required
                    />
                    
            <div className="cut"></div>
            <label for="lastname" className="placeholder">Email Address</label>
            </div>

            {/* PASSWORD INPUT */}
            <div className="input-container ic2">
                    <input 
                    id="lastname" 
                    className="input" 
                    type="text" 
                    placeholder=" " 
                    // value={newPassword}
                    // onChange={handleNewPasswordChange}
                    required
                    />
                    
            <div className="cut"></div>
            <label for="lastname" className="placeholder">Password</label>
            </div>


            <br></br>
            <button type="submit" className="login-page-button">Create</button>
            <br></br>
            <br></br>
            </form>
            </div>
            </div>
            <div className='modal-footer'>
        
            </div>
        </div>
    </div>
    

  )
}

export default LeaseForm