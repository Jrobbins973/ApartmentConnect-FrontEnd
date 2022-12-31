import React, {useState} from 'react'
import ForumPostComments from './ForumPostComments'

function ForumPostModal(props) {
    const {setShowDetailsModal, postDetails, post, setPostDetails} = props

    const [reply, setReply] = useState("")

const comments = postDetails.forum_post_replies ? postDetails.forum_post_replies.map( reply =>
    <ForumPostComments 
    key={reply.id}
    reply={reply}
    />) : <p>No comments yet.. be the first!</p>

// console.log(postDetails)

const handleReplyChange = e => {
    setReply(e.target.value)
}


const addReply = e => {
    e.preventDefault()
    const newReply = {
        forum_post_id: postDetails.id,
        tenant_id: post.tenant_id,
        text: reply
    }
    fetch("http://localhost:3000/forum_post_replies", {
        method: "POST",
        headers: {
            "Content-type": 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newReply)
    })
    .then(res => res.json())
    .then(newReplyData => setPostDetails({...postDetails, forum_post_replies: [...postDetails.forum_post_replies, newReplyData]}))

    setReply("")
}



    return (
        <div className='forum-details-modal' onClick={() => setShowDetailsModal(false)}>
            <div className='forum-details-modal-content' onClick={e => e.stopPropagation()}>
                <div className='forum-details-modal-header'>
                    <h4 className='forum-details-modal-title'>
                        {post.full_tenant_name} | {postDetails.category}
                    </h4>
                
                </div>
                <div className='forum-details-modal-body'>
                    {postDetails.text}</div>
                
                <div className='forum-details-modal-footer'>
                </div>
                <br></br>
                {comments}
                <br></br>
                <p>Add a comment!</p>


                {/* COMMENT FORM */}
                    <form onSubmit={addReply} id="comment-form">
                        <textarea 
                        id="comment" 
                        value={reply}
                        onChange={handleReplyChange}
                        required
                        ></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
                {/* COMMENT FORM */}

                
            </div>
        </div>
    )
}

export default ForumPostModal