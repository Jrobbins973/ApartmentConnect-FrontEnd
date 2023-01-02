import React, {useState} from 'react'
import ForumPostModal from './ForumPostModal'

function TenantForumPosts(props) {
    const {post} = props
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
        <div onClick={handleModal} className='tenant-forum-activity'>
            
            <h4>{post.text}</h4>
            <p>{post.category}</p>

            {showDetailsModal ? <ForumPostModal 
        setShowDetailsModal={setShowDetailsModal} 
        postDetails={postDetails} 
        post={post}
        setPostDetails={setPostDetails}
        /> 
        : 
        null}
        </div>
    )
    }

export default TenantForumPosts