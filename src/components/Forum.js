import React from 'react'
import ForumPosts from './ForumPosts'

function Forum(props) {
    const {forumPosts, setForumPosts} = props



  // DELETE POSTS
    const deletePost = (postId) => {
    // debugger
    const updatedForumPostList = forumPosts.filter(originalForumPostList => originalForumPostList.id !== postId)
    setForumPosts(updatedForumPostList)
}


    const renderForumPosts = forumPosts.map(post => <ForumPosts key={post.id} post={post} deletePost={deletePost} />)
    return (
        <div>
            <div className='forum-header'>
                <h1>Forum</h1>
                
        </div>
            {renderForumPosts}
        </div>
        
    )
}

export default Forum