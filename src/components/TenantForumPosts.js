import React, {useState} from 'react'
import ForumPostModal from './ForumPostModal'

function TenantForumPosts(props) {
    const {post, darkMode} = props
    const [postDetails, setPostDetails] = useState([])
    const [showDetailsModal, setShowDetailsModal] = useState(false)
    
    // RENDER POST DETAILS
        const renderPostDetails = () => {
        fetch(`http://localhost:3000/forum_posts/${post.id}`)
        .then(res => res.json())
        .then(setPostDetails)
    }


    function handleModal(){
        setShowDetailsModal(true)
        renderPostDetails()
    }


    return (
        <div onClick={handleModal} className= {`${darkMode ?  'tenant-forum-activity-dark' : 'tenant-forum-activity-light'}`}>
            <h3>Category - {post.category}</h3>
            <h4> {post.text}</h4>
        <div>
            {showDetailsModal ? <ForumPostModal 
        setShowDetailsModal={setShowDetailsModal} 
        postDetails={postDetails} 
        post={post}
        setPostDetails={setPostDetails}
        /> 
        : 
        null}
        </div>
            
        </div>
    )
    }

export default TenantForumPosts