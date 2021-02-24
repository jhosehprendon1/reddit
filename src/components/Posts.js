import PropTypes from 'prop-types'
import Post from './Post'

const Posts = ({ posts, onDelete }) => {
  return (
    <>
      {posts.map((task, index) => (
        <Post key={index} task={task} onDelete={onDelete} />
      ))}
    </>
  )
}

Post.propTypes = {
  posts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Posts