import React from "react"
import Comment from "./Comment"
import "../../styles/Post_Comments/AllComments.css"

function AllComment(props) {
  const { comments } = props
  return (
    <div className="allComments-container">
      <h2 className="title">Comments ({comments.length})</h2>
      {comments.map((i) => {
        return <Comment data={i} key={i.id} />
      })}
    </div>
  )
}

export default AllComment
