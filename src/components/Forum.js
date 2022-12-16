import React from 'react'
import ForumPosts from './ForumPosts'

function Forum(props) {
    const {forumPosts} = props

    const renderForumPosts = forumPosts.map(post => <ForumPosts key={post.id} post={post}/>)
    return (
        <div>Forum
            {renderForumPosts}
        </div>
        
    )
}

export default Forum