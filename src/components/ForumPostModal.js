import React from 'react'
import ForumPostComments from './ForumPostComments'

function ForumPostModal(props) {
    const {setShowDetailsModal, postDetails} = props

const comments = postDetails.forum_post_replies ? postDetails.forum_post_replies.map( reply =>
    <ForumPostComments 
    key={reply.id}
    reply={reply}
    />) : <p>No comments yet.. be the first!</p>




    

    return (
        <div className='forum-details-modal' onClick={() => setShowDetailsModal(false)}>
            <div className='forum-details-modal-content' onClick={e => e.stopPropagation()}>
                <div className='forum-details-modal-header'>
                    <h4 className='forum-details-modal-title'>
                        Title
                    </h4>
                    <h5>Category: {postDetails.category}</h5>
                </div>
                <div className='forum-details-modal-body'>
                    {postDetails.text}</div>
                
                <div className='forum-details-modal-footer'>
                </div>
                <br></br>
                {comments}
                <br></br>
                <p>Add a comment!</p>
                    <form id="comment-form">
                        <textarea id="comment" required></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
            </div>
        </div>
    )
}

export default ForumPostModal