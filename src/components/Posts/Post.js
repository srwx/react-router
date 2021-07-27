import React from "react"
import { Link } from "react-router-dom"
import "../../styles/Posts/Post.css"

function Post(props) {
  const { data } = props
  return (
    <div className="post-container">
      <Link className="post-title" to={`/post/${data.id}`}>
        {data.title}
      </Link>
      <p>{data.body}</p>
    </div>
  )
}

export default Post
