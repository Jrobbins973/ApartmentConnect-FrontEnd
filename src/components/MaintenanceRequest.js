import React, {useState} from 'react'
import { send } from 'emailjs-com';

function MaintenanceRequest(props) {
    const {currentTenant} = props




    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
        });
        

    
        const onSubmit = (e) => {
            e.preventDefault();
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
                    setToSend({
                        from_name: '',
                        to_name: '',
                        message: '',
                        reply_to: ''
                    })
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
            };


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };





    return (
    <div>
    <form className='login-form' onSubmit={onSubmit}>
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
        value={toSend.to_name}
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
</form>




    </div>



    )
}

export default MaintenanceRequest