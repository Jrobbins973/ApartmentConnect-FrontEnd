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
            alert("Account Created Successfully")
        } else {
            res.json().then(json => alert(json.errors))
        }
    })
}
return (
    <div className='modal'  onClick={() => setShowModal(false)}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
            <div className='modal-header'>
                <h4 className='modal-title'>Account Registration</h4>
            </div>
            <div className='modal-body'>
            <form onSubmit={handleCreateAccount} className='login-form'>
            <label>First Name:</label>
            <input
            type='text'
            value={firstName}
            onChange={handleFirstNameChange}
            />
            <label>Last Name:</label>
            <input
            type='text'
            value={lastName}
            onChange={handleLastNameChange}
            />
            <label>Phone Number:</label>
            <input
            type='text'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            />
            <label>Email Address:</label>
            <input
            type='text'
            value={newEmailAddress}
            onChange={handleNewEmailChange}
            />
            <label>Password:</label>
            <input
            type='text'
            value={newPassword}
            onChange={handleNewPasswordChange}
            />
            <input  type="submit" value="Submit"/>
            </form>
            </div>
            <div className='modal-footer'>
                <button onClick={() => setShowModal(false)}>Close</button>
            </div>
        </div>
    </div>
)
}

export default CreateAccountModal