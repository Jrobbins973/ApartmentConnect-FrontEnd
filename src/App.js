import React, {useState, useEffect} from 'react';
import { Switch, Route} from "react-router-dom";
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
import {useHistory} from 'react-router-dom'

const baseUrl = 'http://localhost:3000/'
const logoutUrl = 'http://localhost:3000/logout'

function App() {
  const [currentTenant, setCurrentTenant] = useState(false)
  const [errors, setErrors] = useState(false)
  const [forumPosts, setForumPosts] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [events, setEvents] = useState([])
  const [recentEvents, setRecentEvents] = useState([])
  const [maintenanceRequests, setMaintenanceRequests] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const history = useHistory()


  const toggleLoggedIn = () => {
    setIsLoggedIn(true)
  }

  useEffect(() => {
    fetch('http://localhost:3000/maintenance_requests')
    .then(res => res.json())
    .then(setMaintenanceRequests)
  },[])

  // console.log(maintenanceRequests)

    // LOGOUT
    const handleLogout = () => {
      fetch(logoutUrl, {
      method: 'DELETE'
      }) 
      .then (res => {
          if(res.ok){
              localStorage.clear()
              setIsLoggedIn(false)
              history.push('/')
          } else {
              res.json()
              .then(json => setErrors(json.errors))
          }
      })
  }

  // FETCH FORUM POSTS
// console.log(currentTenant)
    useEffect(() => {
      fetch(baseUrl + 'forum_posts')
      .then(res=>res.json())
      .then(setForumPosts)
    },[])



// FETCH EVENTS / RESERVATIONS

useEffect(() => {
  fetch(baseUrl + "reservations")
  .then(res => res.json())
  .then(setEvents)
},[])

// FETCH RECENT 2 RESERVATIONS / EVENTS

useEffect(() => {
  fetch(baseUrl + "recentreservations")
  .then(res => res.json())
  .then(setRecentEvents)
},[])

const toggleDark = () => {
    setDarkMode(!darkMode)
}

  return (
    <div className= {`${darkMode ?  'App-dark' : 'App-light'}`}>

      <Switch>

        <Route exact path='/'>
          <LoginPage  
          setErrors={setErrors} 
          toggleLoggedIn={toggleLoggedIn} 
          setIsLoggedIn={setIsLoggedIn} 
          isLoggedIn={isLoggedIn} 
          setCurrentTenant={setCurrentTenant}
          currentTenant={currentTenant}
          errors={errors}/>
        </Route>

        <Route exact path = '/dashboard'>
          <Dashboard 
          events = {events}
          setEvents={setEvents}
          recentEvents={recentEvents}
          handleLogout={handleLogout} 
          currentTenant={currentTenant} 
          setErrors={setErrors} 
          toggleLoggedIn={toggleLoggedIn} 
          setIsLoggedIn={setIsLoggedIn}
          setCurrentTenant={setCurrentTenant}
          toggleDark={toggleDark}
          darkMode={darkMode}/>
        </Route>

        <Route path = '/forum'>
          <Forum 
          setCurrentTenant={setCurrentTenant}
          handleLogout={handleLogout} 
          currentTenant={currentTenant} 
          forumPosts={forumPosts} 
          setForumPosts={setForumPosts}
          toggleDark={toggleDark}
          darkMode={darkMode}/>
        </Route>

        <Route path = '/apartment_news'>
          <ApartmentNews 
          handleLogout={handleLogout} 
          currentTenant={currentTenant} />
        </Route>

        <Route path = '/my_profile'>
          <TenantProfile 
          handleLogout={handleLogout} 
          currentTenant={currentTenant}
          setCurrentTenant={setCurrentTenant}
          darkMode={darkMode}
          toggleDark={toggleDark}/>
        </Route>

        <Route path = '/events'>
          <Events 
          handleLogout={handleLogout} 
          currentTenant={currentTenant}
          setEvents={setEvents}
          events={events}/>
        </Route>

        <Route path = '/local_businesses'>
          <LocalBusiness 
          handleLogout={handleLogout} 
          currentTenant={currentTenant}/>
        </Route>

        <Route path = '/surveys'>
          <Surveys 
          handleLogout={handleLogout} 
          currentTenant={currentTenant}/>
        </Route>

        <Route path = '/maintenance'>
          <MaintenanceRequest 
          handleLogout={handleLogout} 
          currentTenant={currentTenant}
          setMaintenanceRequests={setMaintenanceRequests} 
          maintenanceRequests={maintenanceRequests}/>
        </Route>

      </Switch>


    </div>
  );
}

export default App;
