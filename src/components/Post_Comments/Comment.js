import React from "react"
import "../../styles/Post_Comments/Comment.css"

function Comment(props) {
  const { data } = props

  return (
    <div className="comment-container">
      <h3>{data.email}</h3>
      <p>{data.body}</p>
      <hr />
    </div>
  )
}

export default Comment
