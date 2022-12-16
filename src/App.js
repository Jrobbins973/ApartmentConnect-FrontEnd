import React, {useState} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Forum from './components/Forum';
import Events from './components/Events';
import ApartmentNews from './components/ApartmentNews';
import TenantProfile from './components/TenantProfile';
import LocalBusiness from './components/LocalBusiness';
import Surveys from './components/Surveys';

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
          <Dashboard currentTenant={currentTenant} setErrors={setErrors}/>
        </Route>

        <Route path = '/forum'>
          <Forum />
        </Route>

        <Route path = '/apartment_news'>
          <ApartmentNews />
        </Route>

        <Route path = '/my_profile'>
          <TenantProfile />
        </Route>

        <Route path = '/events'>
          <Events />
        </Route>

        <Route path = '/local_businesses'>
          <LocalBusiness />
        </Route>

        <Route path = '/surveys'>
          <Surveys />
        </Route>

      </Switch>


    </div>
  );
}

export default App;
