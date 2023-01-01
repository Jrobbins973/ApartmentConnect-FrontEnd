import React from 'react'

function ForumPostComments(props) {
    const {reply, postDetails, setPostDetails} = props





const deleteReply = (replyId) => {
    const updatedReplyList = postDetails.forum_post_replies.filter(originalReplyList => originalReplyList.id !== replyId)
    setPostDetails({...postDetails, forum_post_replies:updatedReplyList})
}

const handleDeleteClick = () => {
    fetch(`http://localhost:3000/forum_post_replies/${reply.id}`, {
        method: 'DELETE'
    })
    deleteReply(reply.id)
}


        return (
        <div>
            <p>{reply.text}</p>
            <button className='reply-edit-button'>Edit</button> <button className='reply-delete-button' onClick={handleDeleteClick}>Delete</button>
        </div>
        )
}

export default ForumPostComments