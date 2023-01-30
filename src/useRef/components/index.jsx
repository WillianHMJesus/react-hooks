import propTypes from 'prop-types'

const Post = ({ post, handleClick }) => {
  console.log('Post renderizou');
  return (
    <div className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

Post.propTypes = {
  post: propTypes.shape({
    title: propTypes.string,
    body: propTypes.string
  }),
  handleClick: propTypes.func,
};

export default Post;