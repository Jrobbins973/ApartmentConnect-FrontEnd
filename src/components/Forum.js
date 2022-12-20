import React from 'react'
import ForumPosts from './ForumPosts'
import {useHistory} from 'react-router-dom'

function Forum(props) {
    const {forumPosts, setForumPosts, currentTenant, handleLogout} = props

    const history = useHistory()

  // DELETE POSTS
    const deletePost = (postId) => {
    // debugger
    const updatedForumPostList = forumPosts.filter(originalForumPostList => originalForumPostList.id !== postId)
    setForumPosts(updatedForumPostList)
}


    const renderForumPosts = forumPosts.map(post => <ForumPosts key={post.id} post={post} deletePost={deletePost} />)
    return (
        <div>
            <div className="header">
            
                
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
                <li onClick={() => history.push('/apartment_news')}><p>NEWS</p></li>
                <li onClick={() => history.push('/events')}><p>EVENTS</p></li>
                <li onClick={() => history.push('/surveys')}><p>SURVEYS</p></li>
                <li onClick={() => history.push('/local_businesses')}><p>MAP</p></li>
                <li onClick={() => history.push('/maintenance')}><p>REQUEST MAINTENANCE</p></li>
                <li onClick={handleLogout}><p>LOGOUT</p></li>
            </ul>
            </div>
        </div>
            {/* <h1 className='header-text' >FORUM</h1> */}
            <div className='forum-post-box'>
            {renderForumPosts}
            </div>
        </div>
        
    )
}

export default Forum