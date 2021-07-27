import React from "react"
import Post from "./Post"
import "../../styles/Posts/AllPost.css"

function AllPost(props) {
  const { posts } = props // array of post-object
  return (
    <div className="allPosts-container">
      <h2 className="title">Posts ({posts.length})</h2>
      {posts.map((i) => {
        return <Post data={i} key={i.id} />
      })}
    </div>
  )
}

export default AllPost
