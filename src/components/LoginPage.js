import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Dashboard from './Dashboard'

function LoginPage(props) {
const {updateTenant, setErrors, toggleLoggedIn, setIsLoggedIn, isLoggedIn, setCurrentTenant} = props

// sign-in
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [createNewAccount, setCreateNewAccount] = useState(false)
const history = useHistory()

function handleEmailChange(e){
setEmail(e.target.value)
}
function handlePasswordChange(e){
setPassword(e.target.value)
}


function handleSubmit(e){
    e.preventDefault()
    const tenant = {
    email_address: email,
    password: password
}
    setEmail("")
    setPassword("")
    fetchLogin(tenant)
        // fetch("http://localhost:3000/login", {
        //     method:'POST',
        //     headers:{
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        // },
        //     body:JSON.stringify(tenant)
        // })
        // .then (res => {
        //     if(res.ok){
        //         res.json().then(tenant => {
        //             if (localStorage===null){
        //                 localStorage.email = tenant.email_address
        //                 updateTenant
        //             } else {
        //                 history.push('/dashboard')

        //             }
        //         })
        //     } else {
        //         res.json().then(json => setErrors(json.errors))
        //     }
        // })
}

const fetchLogin = (tenant) => {
    fetch("http://localhost:3000/login", {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(tenant)
    })
    .then(res => res.json())
    .then(r => {
        if (r.email_address) {
            localStorage.removeItem('error')
            localStorage.email = r.email_address
            setCurrentTenant(r)
            setIsLoggedIn(true)
        } else {
            localStorage.error = "invalid email/password combination"
        }
        toggleLoggedIn()
    })
    
}

console.log(localStorage.email)
// localStorage? console.log('true') : console.log('false')

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
            toggleForm()
        } else {
            res.json().then(json => setErrors(json.errors))
        }
    })
}

    // Switches between create account form and login form 
const toggleForm = () => {
    setCreateNewAccount(!createNewAccount)
}


    return (
       
        <div>
            <h1>Welcome To Edison Lofts</h1>

            {createNewAccount ? 
            // CREATE NEW ACCOUNT
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

            :
            
            // LOGIN FORM
            <form className='login-form' onSubmit={handleSubmit}>
            <label>Email:</label>
                <input 
                type="text" 
                name="Email"
                value={email}
                onChange={handleEmailChange}
                />

                <label>Password:</label>
                <input 
                type="password" 
                name="password"
                value={password}
                onChange={handlePasswordChange}
                />
                <br></br>
                <br></br>
                <input type="submit" value="Login"/>
                <br></br>
                <br></br>
                <p onClick={toggleForm}>Don't have an account? Click here to register!</p>
            </form>
            
            
            }

            {isLoggedIn ? history.push('/dashboard') : history.push('/')}
        </div>
    )
}

export default LoginPage