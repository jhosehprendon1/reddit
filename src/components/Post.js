import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const Post = ({ post, onDelete }) => {
  return (
    <div
      className={`task ${post.reminder ? 'reminder' : ''}`}
    >
      <h3>
        {post.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(post.id)}
        />
      </h3>
      <p>{post.day}</p>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Post