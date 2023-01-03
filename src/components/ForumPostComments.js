import React, {useState} from 'react'
import EditForumReplies from './EditForumReplies'

function ForumPostComments(props) {
    const {reply, postDetails, setPostDetails, post, setReply, currentTenant} = props


    const [isEditing, setIsEditing] = useState(false)


// console.log(reply)


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

// {isEditing ? <EditForumReplies 
//     postDetails={postDetails} 
//     setPostDetails={setPostDetails} 
//     setIsEditing={setIsEditing}
//     reply = {reply}
//     post={post}
//     setReply={setReply}

        return (
        <div>

        <p>{reply.text}</p> 

            {/* <button onClick={() => setIsEditing(true)} className='reply-edit-button'> {isEditing ? "Editing..." : "Edit"}</button>  */}
            <button className='reply-delete-button' onClick={handleDeleteClick}>Delete</button>
                
        </div>
        )
}

export default ForumPostComments