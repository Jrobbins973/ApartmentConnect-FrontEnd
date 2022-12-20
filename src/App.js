import React, {useState, useEffect} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Forum from './components/Forum';
import Events from './components/Events';
import ApartmentNews from './components/ApartmentNews';
import TenantProfile from './components/TenantProfile';
import LocalBusiness from './components/LocalBusiness';
import MaintenanceRequest from './components/MaintenanceRequest';
import Surveys from './components/Surveys';

const baseUrl = 'http://localhost:3000/'

function App() {
  const [currentTenant, setCurrentTenant] = useState(false)
  const [errors, setErrors] = useState(false)
  const [forumPosts, setForumPosts] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLoggedIn = () => {
    setIsLoggedIn(true)
  }
  // const updateTenant = (r) => {
  //   if(isLoggedIn) {
  //     setCurrentTenant(r)
  // } else
  // console.log("error in APP")
  
    // useEffect(() => {
    //     if(localStorage.email) {
    //         setIsLoggedIn(true)
    //     } else {
    //         console.log("login issue")
    //     }
    // })

console.log(currentTenant)
    useEffect(() => {
      fetch(baseUrl + 'forum_posts')
      .then(res=>res.json())
      .then(setForumPosts)
    },[])



// console.log(forumPosts)

  return (
    <div className="App">

      <Switch>

        <Route exact path='/'>
          <LoginPage  setErrors={setErrors} toggleLoggedIn={toggleLoggedIn} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentTenant={setCurrentTenant}/>
        </Route>

        <Route exact path = '/dashboard'>
          <Dashboard currentTenant={currentTenant} setErrors={setErrors} toggleLoggedIn={toggleLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route>

        <Route path = '/forum'>
          <Forum forumPosts={forumPosts} setForumPosts={setForumPosts}/>
        </Route>

        <Route path = '/apartment_news'>
          <ApartmentNews />
        </Route>

        <Route path = '/my_profile'>
          <TenantProfile currentTenant={currentTenant}/>
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

        <Route path = '/maintenance'>
          <MaintenanceRequest currentTenant={currentTenant} />
        </Route>

      </Switch>


    </div>
  );
}

export default App;
