import React, {useState} from 'react';
import './App.css';
import LoginPage from './components/LoginPage';

function App() {
  const [currentTenant, setCurrentTenant] = useState(false)
  const [errors, setErrors] = useState(false)
  
  const updateTenant = (tenant) => setCurrentTenant(tenant)


console.log(currentTenant)



  return (
    <div className="App">
      <LoginPage updateTenant={updateTenant} setErrors={setErrors}/>
    </div>
  );
}

export default App;
