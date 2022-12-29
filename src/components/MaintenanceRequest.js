import React, {useState} from 'react'
import { send } from 'emailjs-com';

function MaintenanceRequest(props) {
    const {setShowMaintenanceModal, currentTenant, setMaintenanceRequests, maintenanceRequests} = props




    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
        });
        

    
        const onSubmit = (e) => {
            e.preventDefault();
            // const newRequest = {
            //     tenant_id: currentTenant.id,
            //     description: toSend.message,
            // }
            send(
                'service_twl70bl',
                'template_zpfzern',
                toSend,
                '3zIrVqyRLdH5S3J0A'
                )
                // setToSend("")
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Request Sent")
                    setShowMaintenanceModal(false)
                    setToSend({
                        from_name: '',
                        to_name: 'Management',
                        message: '',
                        reply_to: ``
                    })
                })
                .catch((err) => {
                    alert('FAILED...', err);
                });
                // createRequest(newRequest)
            };


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    // const createRequest = (newRequest) => {
    //     fetch('http://localhost:3000/maintenance_requests', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body:JSON.stringify(newRequest)
    //     })
    //     .then( res => res.json)
    //     .then(newRequestData => setMaintenanceRequests([...maintenanceRequests, newRequestData]))
    // }





    return (
    <div>

        <div>
        <div className='modal'  onClick={() => setShowMaintenanceModal(false)}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
            <div className='modal-header'>
            </div>
            <div className='modal-body'>
            <div className="form">

        <form onSubmit={onSubmit}>
            <div style={{fontSize: "28px"}} className="title">Request Maintenance</div>
            <div className="subtitle">  </div>
            
            {/* FIRST NAME INPUT */}
            <div className="input-container ic1">
                    <input 
                    id="firstname" 
                    className="input" 
                    type="text" 
                    name='from_name'
                    placeholder=" "
                    value={toSend.from_name}
                    onChange={handleChange}
                    />

            <div className="cut"></div>
            <label for="firstname" className="placeholder">Full Name</label>
            </div>

            {/* LAST NAME INPUT */}
            {/* <div className="input-container ic2">
                    <input 
                    id="lastname" 
                    className="input" 
                    type="text" 
                    placeholder=" " 
                 
                    />
                    
            <div className="cut"></div>
            <label for="lastname" className="placeholder">Send to:</label>
            </div> */}
                
            {/* Request INPUT */}
            <div className="input-container ic2">
                    <input 
                    id="lastname" 
                    className="input" 
                    type="text" 
                    placeholder=" " 
                    name='message'
                    value={toSend.message}
                    onChange={handleChange}
                    />
                    
            <div className="cut"></div>
            <label for="lastname" className="placeholder">Request</label>
            </div>

            {/* EMAIL INPUT */}
            <div className="input-container ic2">
                    <input 
                    id="lastname" 
                    className="input" 
                    type="text"
                    name='reply_to' 
                    placeholder=" " 
                    value={toSend.reply_to}
                    onChange={handleChange}
                    />
                    
            <div className="cut"></div>
            <label for="lastname" className="placeholder">Email Address</label>
            </div>



            <br></br>
            <button type="submit" className="login-page-button">Submit Request</button>
            <br></br>
            <br></br>
            </form>
            </div>
            </div>
            <div className='modal-footer'>
        
            </div>
        </div>
    </div>
        </div>


    {/* <form className='login-form' onSubmit={onSubmit}>
    <input
        type='text'
        name='from_name'
        placeholder='Your Name'
        value={toSend.from_name}
        onChange={handleChange}
    />
    <input
        type='text'
        name='to_name'
        placeholder='Management'
        value="Management"
        onChange={handleChange}
    />
    <input
        type='text'
        name='message'
        placeholder='Your message'
        value={toSend.message}
        onChange={handleChange}
    />
    <input
        type='text'
        name='reply_to'
        placeholder='Your email'
        value={toSend.reply_to}
        onChange={handleChange}
    />
    <input  type="submit" value="Submit"/>
</form> */}




    </div>



    )
}

export default MaintenanceRequest