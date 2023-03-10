import React, {useState, useEffect} from 'react'
import ForumPosts from './ForumPosts'
import {useHistory} from 'react-router-dom'

function Forum(props) {
    const {forumPosts, 
        setForumPosts, 
        currentTenant, 
        handleLogout,
        toggleDark,
        darkMode,
        setCurrentTenant
        } = props

    const history = useHistory()
    const [postText, setPostText] = useState('')
    const [category, setCategory] = useState('')

  // DELETE POSTS
    const deletePost = (postId) => {
    // debugger
    const updatedForumPostList = forumPosts.filter(originalForumPostList => originalForumPostList.id !== postId)
    setForumPosts(updatedForumPostList)
}
    // DELETE POST END
// console.log(forumPosts)
    
    // FORUM POST SUBMIT logic
const handleTextChange = e => {
    setPostText(e.target.value)
}

const handleDropDownChange = e => {
    setCategory(e.target.value)
}

function handleForumSubmission(e){
    e.preventDefault()
    const newForumPost = {
        tenant_id: currentTenant.id,
        full_tenant_name:`${currentTenant.first_name} ${currentTenant.last_name}`,
        text: postText,
        category: category
    }
    setPostText("")
    
        fetch('http://localhost:3000/forum_posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(newForumPost)
        })
        .then(res => res.json())
        .then(postData => setForumPosts([...forumPosts, postData]))
    } 

// fetches current user from localstorage, to keep them logged in even after page refreshes - ONLY ON DASHBOARD.. will fix later
useEffect(() => {
    fetch(`http://localhost:3000/tenants/${localStorage.uid}`)
    .then(res => res.json())
    .then(setCurrentTenant)
},[])

    const renderForumPosts = forumPosts.map(post => <ForumPosts key={post.id} post={post} deletePost={deletePost} currentTenant={currentTenant} darkMode={darkMode}/>)
    return (
        <div>

            
        <div className="header">
        <h1 className='header'>Forum</h1>
                
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
        <label for="openSidebarMenu" className="sidebarIconToggle">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
            <ul className="sidebarMenuInner">
                <li onClick={() => history.push('/my_profile')}>{currentTenant.first_name} {currentTenant.last_name} <span>Renter</span></li>
                <li onClick={() => history.push('/dashboard')}><p>HOME</p></li>
                <li onClick={() => history.push('/forum')}><p>FORUM</p></li>
                {/* <li onClick={() => history.push('/apartment_news')}><p>NEWS</p></li> */}
                <li onClick={() => history.push('/events')}><p>EVENTS</p></li>
                {/* <li onClick={() => history.push('/surveys')}><p>SURVEYS</p></li> */}
                <li onClick={() => history.push('/local_businesses')}><p>MAP</p></li>
                <li onClick={() => history.push('/maintenance')}><p>REQUEST MAINTENANCE</p></li>
                <li onClick={handleLogout}><p>LOGOUT</p></li>
            </ul>
            </div>
        </div>


              



        {/* Forum Post Section Forum Post Section Forum Post Section Forum Post Section Forum Post Section Forum Post Section Forum Post Section */}
            {/* <div className='forum-submission-form-box'>
            <form className='forum-submission-form' onSubmit={handleForumSubmission}>
            <label>Your Message</label>
                <input 
                type="text" 
                name="Email"
                value={postText}
                onChange={handleTextChange}
                />


                <label for="my-dropdown">Category:</label>
                    <select id="my-dropdown" name="my-dropdown" onChange={handleDropDownChange}>
                        <option value="Miscellaneous">Miscellaneous</option>
                        <option value="Buying / Selling">Buying / Selling</option>
                        <option value="Pets">Pets</option>
                        <option value="Need Help">Need Help</option>

                    </select>
                <br></br>
                <br></br>
                <input type="submit" value="Post"/>
            </form>
            </div> */}

            <div className={`${darkMode ?  'login-box-dark' : 'login-box-light'}`}>
            <h2>What's on your mind?</h2>
            <form onSubmit={handleForumSubmission}>

                <div className={`${darkMode ?  'user-box-dark' : 'user-box-light'}`}>
                    <input 
                    type="text" 
                    name="" 
                    value={postText}
                    onChange={handleTextChange}
                    />
                <label>Post Content</label>
                </div>

                <div className={`${darkMode ?  'user-box-dark' : 'user-box-light'}`}>
                <label className='category-dropdown-text' for="my-dropdown">Category:</label>
                    <select className='category-dropdown' id="my-dropdown" name="my-dropdown" onChange={handleDropDownChange}>
                        <option value="Select">Select Category</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                        <option value="Buying / Selling">Buying / Selling</option>
                        <option value="Pets">Pets</option>
                        <option value="Need Help">Need Help</option>
                        
                    </select>
                <label>Category</label>
                </div>
                <button className='button-62'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                POST
                </button>
            </form>
            </div>

             {/* Forum Post Section Forum Post Section Forum Post Section Forum Post Section Forum Post Section Forum Post Section Forum Post Section */}
            
            {/* individual posts */}
            <div className='forum-post-box'>
            {renderForumPosts}
            </div>

                  {/* DARK MODE TOGGLE BUTTON */}
                <div class="wrapper">
                <input onClick={() => toggleDark()} type="checkbox" id="hide-checkbox"/>
                <label for="hide-checkbox" class="toggle">
                    <span class="toggle-button">
                    <span class="crater crater-1"></span>
                    <span class="crater crater-2"></span>
                    <span class="crater crater-3"></span>   
                    <span class="crater crater-4"></span>
                    <span class="crater crater-5"></span>
                    <span class="crater crater-6"></span>
                    <span class="crater crater-7"></span>
                    </span>
                    <span class="star star-1"></span>
                    <span class="star star-2"></span>
                    <span class="star star-3"></span>
                    <span class="star star-4"></span>
                    <span class="star star-5"></span>
                    <span class="star star-6"></span>
                    <span class="star star-7"></span>
                    <span class="star star-8"></span>
                </label>
                </div>
                {/* DARK MODE TOGGLE BUTTON */}
        </div>
        
    )
}

export default Forum