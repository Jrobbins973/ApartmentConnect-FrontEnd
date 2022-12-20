import React, {useState} from 'react'

const defaultAvatar = 'https://img.freepik.com/free-icon/user_318-804790.jpg?w=2000'

function ForumPosts(props) {
    const {post, deletePost} = props
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




    return (
    <div className='forum-post-container'>
    <div className='forum-post'>
        <div className="post-header">
        <img className="avatar" src={defaultAvatar} alt="User avatar"/>
    <div>{post.full_tenant_name}</div>
        </div>
        <div className="body">
            {post.text}
        </div>

        <button className='forum-delete-button'
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={handleDelete}>
            { hover ? "Delete" : "🗑️"}</button>

</div>
    </div>
    )
}

export default ForumPosts