import React from 'react'

const defaultAvatar = 'https://img.freepik.com/free-icon/user_318-804790.jpg?w=2000'

function ForumPosts(props) {
    const {post} = props
    // console.log(post)
    return (
    <div>
    <div className='forum-post'>
        <div className="header">
        <img className="avatar" src={defaultAvatar} alt="User avatar"/>
    <div>Username</div>
        </div>
        <div className="body">
            {post.text}
        </div>
</div>
    </div>
    )
}

export default ForumPosts