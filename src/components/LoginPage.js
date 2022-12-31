import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Dashboard from './Dashboard'
import CreateAccountModal from './CreateAccountModal'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function LoginPage(props) {
const {updateTenant, setErrors, currentTenant, toggleLoggedIn, setIsLoggedIn, isLoggedIn, setCurrentTenant} = props

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [createNewAccount, setCreateNewAccount] = useState(false)
const history = useHistory()
const [showModal, setShowModal] = useState(false)


// sign-in
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
    .then(res => {
        if(res.ok) {
            res.json()
            .then(tenantData => {
                localStorage.email = tenantData.email_address 
                localStorage.uid = tenantData.id
                setCurrentTenant(tenantData)
                setIsLoggedIn(true)
            })
        } else {
            alert("Incorrect Email / Password Combination")
        }
    } )

    
}



    return (

        <div className='login-page'>
            
            {showModal ? <CreateAccountModal setShowModal = {setShowModal}/> : null}
            {isLoggedIn ? history.push('/dashboard') : null}


        <div className="form">
                <form onSubmit={handleSubmit}>
            <div className="title">Edison Lofts</div>
            <div className="subtitle">Powered by ApartmentConnect</div>
            
            
            <div className="input-container ic1">
                    <input 
                    id="firstname" 
                    className="input" 
                    type="text" 
                    placeholder=" "
                    value={email}
                    onChange={handleEmailChange} 
                    required
                    />

            <div className="cut"></div>
            <label for="firstname" className="placeholder">Email Address</label>
            </div>

            <div className="input-container ic2">
                    <input 
                    id="lastname" 
                    className="input" 
                    type="password" 
                    placeholder=" " 
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    />
                    
            <div className="cut"></div>
            <label for="lastname" className="placeholder">Password</label>
            </div>
                    <br></br>
                    <button type="submit" className="login-page-button">Login</button>
                    <br></br>
                    <br></br>
                    </form>
                    <button className='create-account-button' onClick={() => setShowModal(true)}>Create Account</button>

            </div>
            
            </div>

        
        
    )
}

export default LoginPage