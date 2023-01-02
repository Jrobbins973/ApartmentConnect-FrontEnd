import React, {useState} from 'react'

function LeaseForm(props) {
  const {setShowLeaseFormModal, currentTenant, setCurrentTenant} = props

  const [rentChange, setRentChange] = useState("")
  const [payDate, setPayDate] = useState("")
  const [endDate, setEndDate] = useState("")


  const submitLeaseInfo = e => {
    e.preventDefault()
    const leaseInfo = {
      tenant_id: currentTenant.id,
      rent: rentChange,
      rent_duedate: payDate,
      lease_end: endDate
    }
    fetch('http://localhost:3000/leases', {
      method: "POST",
      headers: {
          "Content-type": 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(leaseInfo)
    })
    .then(res => {
      if(res.ok){
        res.json().then(newLeaseData => setCurrentTenant({...currentTenant, leases: [...currentTenant.leases, newLeaseData]}))
        alert("Lease Information Successfully Added")
        setShowLeaseFormModal(false)
      } else {
        res.json().then(alert("Something went wrong.. please try again"))
      }
      }
    )

  
  }

  const handleRentChange = e => {
    setRentChange(e.target.value)
  }

  const handlePayDateChange = e => {
    setPayDate(e.target.value)
  }

  const handleEndDateChange = e => {
    setEndDate(e.target.value)
  }

  return (
    <div className='modal'  onClick={() => setShowLeaseFormModal(false)}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
            <div className='modal-header'>
            </div>
            <div className='modal-body'>
            <div className="form">

            <form onSubmit={submitLeaseInfo} >

            <div className="title">
              <h1>Lease Information</h1>
            </div>
            <div className="subtitle">  </div>
            
            {/* RENT INPUT */}
            <div className="input-container ic1">
                    <input 
                    id="" 
                    className="input" 
                    type="text" 
                    placeholder=" "
                    value={rentChange}
                    onChange={handleRentChange}
                    required
                    />

            <div className="cut"></div>
            <label for="firstname" className="placeholder">Rent</label>
            </div>

            {/* RENT DUE INPUT */}
            <div className="input-container ic2">
                    <input 
                    id="" 
                    className="input" 
                    type="text" 
                    placeholder=" " 
                    value={payDate}
                    onChange={handlePayDateChange}
                    required
                    />
                    
            <div className="cut"></div>
            <label for="lastname" className="placeholder">Payment Date</label>
            </div>
                
            {/* LEASE END DATE INPUT */}
            <div className="input-container ic2">
                    <input 
                    id="" 
                    className="input" 
                    type="text" 
                    placeholder=" " 
                    value={endDate}
                    onChange={handleEndDateChange}
                    required
                    />
                    
            <div className="cut"></div>
            <label for="lastname" className="placeholder">Lease End</label>
            </div>

            <br></br>
            <button type="submit" className="login-page-button">Submit</button>
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