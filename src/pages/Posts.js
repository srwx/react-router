import React, { useEffect, useState } from "react"
import axios from "axios"
import AllPost from "../components/Posts/AllPosts"
import { Link } from "react-router-dom"

function Posts() {
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    ) // get data from web API, convert data to JSON
    setPosts(response.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <AllPost posts={posts} />
    </div>
  )
}

export default Posts
