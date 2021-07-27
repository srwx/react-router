import { Route, Switch } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import CreatePost from "./pages/CreatePost"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Posts from "./pages/Posts"
import Post_Comment from "./pages/Post_Comment"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/post/:postID" component={Post_Comment} />
        <Route path="/create-post" component={CreatePost} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
