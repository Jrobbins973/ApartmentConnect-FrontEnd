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


// console.log(post.tenant_id)

    return (
    <div className='forum-post-container'>
    <div className='forum-post'>
        <div className="post-header">
        <img className="avatar" src={defaultAvatar} alt="User avatar"/>
    <div>{post.full_tenant_name}</div>
        </div>
        <div className="body">
            {post.text} | {post.category}
        </div>
        
    {currentTenant.id === post.tenant_id ? <button className='forum-delete-button'
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={handleDelete}>
            <AiFillDelete/>
            </button> : null}
        

</div>
    </div>
    )
}

export default ForumPosts