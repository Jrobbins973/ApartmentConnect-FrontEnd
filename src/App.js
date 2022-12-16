import React, {useState} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  const [currentTenant, setCurrentTenant] = useState(false)
  const [errors, setErrors] = useState(false)
  
  const updateTenant = (tenant) => setCurrentTenant(tenant)


console.log(currentTenant)



  return (
    <div className="App">
      <Switch>

        <Route exact path='/'>
          <LoginPage updateTenant={updateTenant} setErrors={setErrors}/>
        </Route>

        <Route exact path = '/dashboard'>
          <Dashboard currentTenant={currentTenant}/>
        </Route>

      </Switch>


    </div>
  );
}

export default App;
