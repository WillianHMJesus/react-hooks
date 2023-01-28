import propTypes from 'prop-types'

const Post = ({ post }) => {
  console.log('Post renderizou');
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

Post.propTypes = {
  post: propTypes.shape({
    title: propTypes.string,
    body: propTypes.string
  }),
};

export default Post;