import React from 'react'

function ForumPostComments(props) {
    const {reply} = props
        return (
        <div>
            <p>{reply.text}</p>
        </div>
        )
}

export default ForumPostComments