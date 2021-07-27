import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Post from "../components/Posts/Post"
import AllComment from "../components/Post_Comments/AllComment"

function Post_Comment() {
  const { postID } = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  async function fetchPost() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postID}`
    )
    setPost(response.data)
  }

  async function fetchComments() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postID}/comments`
    )
    setComments(response.data)
  }

  useEffect(() => {
    fetchPost()
    fetchComments()
  }, [])

  return (
    <div>
      <Post data={post} />
      <AllComment comments={comments} />
    </div>
  )
}

export default Post_Comment
