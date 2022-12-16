import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function LoginPage(props) {
const {updateTenant, setErrors} = props

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
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
// debugger
console.log(tenant)
    setEmail("")
    setPassword("")

        fetch("http://localhost:3000/login", {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
        },
            body:JSON.stringify(tenant)
        })
        .then (res => {
            if(res.ok){
                res.json().then(tenant => {
                    updateTenant(tenant)
                    history.push('/dashboard')
                })
            } else {
                res.json().then(json => setErrors(json.errors))
            }
        })
}

    return (
        <div>
            <h1>Welcome To ApartmentConnect</h1>
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

                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default LoginPage