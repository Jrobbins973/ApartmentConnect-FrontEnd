import React, {useState} from 'react'

function EditForumReplies(props) {
    const {reply, toggleEdit, postDetails, setPostDetails, setReply, setIsEditing} = props
    const [textChange, setTextChange] = useState(reply.text)

const handleTextChange = e => {
    setTextChange(e.target.value)
}
// console.log(postDetails)
const updateReview = e => {
    e.preventDefault()
    const newReview = {
        forum_post_id: postDetails.id,
        tenant_id:reply.tenant_id,
        text:textChange
    }
    updateReviewContent(newReview)
}


const updateReviewContent = newReview => {
    // setIsEditing(false)
    fetch(`http://localhost:3000/forum_post_replies/${reply.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    // .then(updatedReplyData => console.log(updatedReplyData))
    .then(updatedReplyData => setPostDetails(updatedReplyData))
}

console.log(postDetails)

// reply => reply.id === updatedReplyData.id ? updatedReplyData : reply))


    return (
        <div>
           {/* COMMENT FORM */}
            <form onSubmit={updateReview} id="comment-form">
                        <textarea 
                        id="comment" 
                        value={textChange}
                        onChange={handleTextChange}
                        required
                        ></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
                {/* COMMENT FORM */}
            </div>
    )
}

export default EditForumReplies