import React, {useState} from 'react'

function CreateAccountModal(props) {

    const {setShowModal} = props


// CREATE NEW ACCOUNT
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")
const [newEmailAddress, setNewEmailAddress] = useState("")
const [newPassword, setNewPassword] = useState("")


function handleFirstNameChange(e){
    setFirstName(e.target.value)
    }

function handleLastNameChange(e){
    setLastName(e.target.value)
    }

function handlePhoneNumberChange(e){
    setPhoneNumber(e.target.value)
    }

function handleNewEmailChange(e){
    setNewEmailAddress(e.target.value)
    }

function handleNewPasswordChange(e){
    setNewPassword(e.target.value)
    }

const handleCreateAccount = e => {
    e.preventDefault()
    const newTenant = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        email_address: newEmailAddress,
        password: newPassword
    }
    console.log(newTenant)

    fetch("http://localhost:3000/tenants", {
        method:'POST',
        headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body:JSON.stringify(newTenant)
    })
    .then( res => {
        if(res.ok){
            res.json().then(newTenant => console.log(newTenant))
            alert("Account Created Successfully, Don't forget to add your lease information! This can be done by clicking the 'add lease information' button found on your account page.")
            setShowModal(false)
        } else {
            res.json().then(json => alert(json.errors))
        }
    })
}
return (
    <div className='modal'  onClick={() => setShowModal(false)}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
            <div className='modal-header'>
            </div>
            <div className='modal-body'>
            <div className="form">
            <form onSubmit={handleCreateAccount}>
            <div className="title">Create Account</div>
            <div className="subtitle">  </div>
            
            {/* FIRST NAME INPUT */}
            <div className="input-container ic1">
                    <input 
                    id="firstname" 
                    className="input" 
                    type="text" 
                    placeholder=" "
                    value={firstName}
                    onChange={handleFirstNameChange}
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
                    value={lastName}
                    onChange={handleLastNameChange}
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
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
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
                    value={newEmailAddress}
                    onChange={handleNewEmailChange}
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
                    value={newPassword}
                    onChange={handleNewPasswordChange}
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

export default CreateAccountModal