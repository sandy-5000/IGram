import { useState } from 'react';
import { PropTypes } from "prop-types"

function FeedPage() {
  const posts = [
    {
      id: 1,
      username: 'john_doe',
      image: 'https://via.placeholder.com/600',
      caption: 'Enjoying the beautiful sunset!',
      likes: 125,
    },
    {
      id: 2,
      username: 'jane_doe',
      image: 'https://via.placeholder.com/600',
      caption: 'Amazing day at the beach 🌊!',
      likes: 97,
    },
  ];

  return (
    <div className="bg-slat-800 min-h-screen flex flex-col items-center dark:text-sky-500">
      <h1 className="text-2xl font-bold my-6">Feeds</h1>
      <div className="w-full max-w-lg">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className=" dark:bg-slate-800 shadow-md rounded-lg mb-6 p-4">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="profile"
          className="w-12 h-12 rounded-full"
        />
        <span className="ml-4 font-bold">{post.username}</span>
      </div>

      <img
        src={post.image}
        alt="post"
        className="w-full h-auto rounded-lg object-cover mb-4"
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className={`focus:outline-none transform transition-all duration-300 ${liked ? 'scale-110 text-red-500' : 'scale-100'
              }`}
          >
            {liked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            )}
          </button>
          <span>{likes} likes</span>
        </div>

        <button className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 17l4 4 4-4m-4-5v9"
            />
          </svg>
        </button>
      </div>

      <p className="mt-4">
        <span className="font-bold">{post.username} </span>
        {post.caption}
      </p>

      {/* Comment Section */}
      <div className="mt-4">
        {comments.map((comment, index) => (
          <p key={index} className="mb-2">
            <span className="font-bold">User: </span>
            {comment}
          </p>
        ))}

        <form onSubmit={handleComment} className="mt-4">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full px-4 py-2 bg-gray-300 dark:bg-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.any,
}

export default FeedPage;
