import React, {useState} from 'react'
import ForumPostComments from './ForumPostComments'

function ForumPostModal(props) {
    const {setShowDetailsModal, postDetails, post, setPostDetails, currentTenant} = props

    const [reply, setReply] = useState("")

const comments = postDetails.forum_post_replies ? postDetails.forum_post_replies.map( reply =>
    <ForumPostComments 
    key={reply.id}
    reply={reply}
    setReply={setReply}
    postDetails={postDetails}
    setPostDetails={setPostDetails}
    post={post}
    currentTenant={currentTenant}
    />) : null

// console.log(postDetails)

const handleReplyChange = e => {
    setReply(e.target.value)
}

// ADD REPLIES // ADD REPLIES// ADD REPLIES// ADD REPLIES// ADD REPLIES// ADD REPLIES
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
// ADD REPLIES // ADD REPLIES// ADD REPLIES// ADD REPLIES// ADD REPLIES// ADD REPLIES


    return (
        <div className='forum-details-modal' onClick={() => setShowDetailsModal(false)}>
            <div className='forum-details-modal-content' onClick={e => e.stopPropagation()}>
                <div className='forum-details-modal-header'>
                    <h4 className='forum-details-modal-title'>
                        {post.full_tenant_name}  | {postDetails.category}
                    </h4>
                
                </div>

                <div className='forum-details-modal-body'> 
                {postDetails.text}
                </div>
                
                <div className='forum-details-modal-footer'>
                </div>
                
                <h3>Replies</h3> 
                {comments}
                <br></br>
                <span>Add a comment!</span>


                {/* COMMENT FORM */}
                    <form onSubmit={addReply} id="comment-form">
                        <textarea 
                        id="comment" 
                        value={reply}
                        onChange={handleReplyChange}
                        required
                        ></textarea>
                        <input className='forum-modal-button' type="submit" value="Submit"/>
                    </form>
                {/* COMMENT FORM */}

<button className='forum-modal-close-button' onClick={() => setShowDetailsModal(false)}>X</button>
                
            </div>
        </div>
    )
}

export default ForumPostModal