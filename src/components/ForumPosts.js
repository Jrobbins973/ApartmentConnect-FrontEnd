import React, {useState} from 'react'

import {AiFillDelete} from 'react-icons/ai' 

const defaultAvatar = 'https://img.freepik.com/free-icon/user_318-804790.jpg?w=2000'

function ForumPosts(props) {
    const {post, deletePost, currentTenant} = props
    // console.log(post)
    const [hover, setHover] = useState(false);

    const onHover = () => {
    setHover(true);
    };

    const onLeave = () => {
    setHover(false);
    };

    const handleDelete = () => {
        fetch(`http://localhost:3000/forum_posts/${post.id}`, {
            method:'DELETE'
        })
        deletePost(post.id)
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
        <img className="avatar" src={defaultAvatar} alt="User avatar"/>
    <div>{post.full_tenant_name}</div>
        </div>
        <div className="forum-post-body">
            {post.text}
        </div>
        <p style={style}>{post.category}</p>
        
        {/* ternary for displaying delete button */}
    {currentTenant.id === post.tenant_id ? <button className='forum-delete-button' onClick={handleDelete}> <AiFillDelete/> </button> : null}
        {/* ternary for displaying delete button */}
        <button onClick={() => console.log(post.id)}>Click Me</button>
</div>
    </div>
    )
}

export default ForumPosts