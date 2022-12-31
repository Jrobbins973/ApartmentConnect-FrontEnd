import React, {useState,useEffect} from 'react'
import ForumPostModal from './ForumPostModal'
import {AiFillDelete} from 'react-icons/ai' 

const defaultAvatar = 'https://img.freepik.com/free-icon/user_318-804790.jpg?w=2000'

function ForumPosts(props) {
    const {post, deletePost, currentTenant} = props
    const [showDetailsModal, setShowDetailsModal] = useState(false)
    const [postDetails, setPostDetails] = useState([])



    const handleDelete = () => {
        fetch(`http://localhost:3000/forum_posts/${post.id}`, {
            method:'DELETE'
        })
        deletePost(post.id)
    }

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

    // changes color based on category
    let postCategory = post.category
    let style = {backgroundColor: 
        (postCategory === "Miscellaneous") ? "#FF856B" 
        : 
        (postCategory === "Pets") ? "#6BEBFF" 
        : 
        (postCategory === "Buying / Selling") ? "#836BFF" 
        : 
        "#6BFF88"}

    return (
    <div className='forum-post-container'>
    <div className='forum-post'>
        <div className="post-header">
            {/* <img className="avatar" src={defaultAvatar} alt="User avatar"/> */}
            {post.full_tenant_name} | {post.category}
        </div>
        <div className="forum-post-body">
            {post.text}
        </div>
        {/* <p style={style}>{post.category}</p> */}
        
        {/* ternary for displaying delete button */}
    {currentTenant.id === post.tenant_id ? <button className='forum-delete-button' onClick={handleDelete}> <AiFillDelete/> </button> : null}
        {/* ternary for displaying delete button */}
        <br></br>
        <button className='forum-comments-button' onClick={handleModal}>Comments</button>
</div>

        {/* MODAL */}
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

export default ForumPosts