import { useState, useEffect } from 'react'
import Header from './components/Header'
import Posts from './components/Posts'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getToken()
    // const getPosts = async () => {
    //   const postsFromServer = await fetchPosts()
    //   setPosts(postsFromServer)
    // }

    // getPosts()
  }, [])

  // Fetch Posts
  const getToken = async () => {
    const res = await fetch('https://www.reddit.com/api/v1/authorize?client_id=jhosehprendon1&response_type=code&state=jhosehp&redirect_uri=https://github.com&duration=temporary&scope=identity', {
      method: 'POST',
      mode: 'cors',
	        headers: {
            	'Access-Control-Allow-Origin': '*'
        	}
    })
    const dataFinal = await res.json()
    return dataFinal
  }

  // Fetch Posts
  const fetchPosts = async () => {
    const res = await fetch('/api')
    const data = await res.json()
    return data
  }

  // Fetch Single Post
  // const fetchPost = async (id) => {
  //   const res = await fetch(`http://localhost:5000/posts/${id}`)
  //   const data = await res.json()

  //   return data
  // }

  // Delete Post
  // const deleteTask = async (id) => {
  //   await fetch(`http://localhost:5000/posts/${id}`, {
  //     method: 'DELETE',
  //   })

  //   setPosts(posts.filter((task) => task.id !== id))
  // }

  const renderPosts = () => {
    return posts.length > 0 ? <Posts posts={posts} /> : 'No Posts To Show'
  }

  return (
    <div className='container'>
        <Header />
        {/* {renderPosts()} */}
        {posts.length}
      </div>
  );
}

export default App;
