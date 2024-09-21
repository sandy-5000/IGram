import React, { useState } from 'react';

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments || []);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg mb-6 dark:text-[#2563eb] ">
      <div className="p-4 flex items-center">
        <img
          src={post.userAvatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="font-bold">{post.userName}</p>
          <p className="text-gray-500 text-sm">{post.postTime}</p>
        </div>
      </div>

      <div>
        <img src={post.imageUrl} alt="Post" className="w-full" />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <button onClick={handleLike} className="text-blue-500">
            👍 Like
          </button>
          <p>{likes} likes</p>
          <button className="text-blue-500">🔄 Share</button>
        </div>

        <div className="mb-2">
          {comments.map((comment, index) => (
            <p key={index} className="text-sm text-gray-800 mb-1">
              <span className="font-bold">{post.userName}: </span>
              {comment}
            </p>
          ))}
        </div>

        <div className="flex items-center">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border rounded-lg p-2 text-sm mr-2"
            placeholder="Add a comment..."
          />
          <button
            onClick={handleComment}
            className="text-blue-500 text-sm font-bold"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

function Feed() {
  const posts = [
    {
      id: 1,
      userName: 'Virat',
      userAvatar: 'https://via.placeholder.com/50',
      imageUrl: 'https://via.placeholder.com/400',
      postTime: '2 hours ago',
      likes: 12,
      comments: ['Great post!', 'Awesome picture!'],
    },
    {
      id: 2,
      userName: 'Messi',
      userAvatar: 'https://via.placeholder.com/50',
      imageUrl: 'https://via.placeholder.com/400',
      postTime: '4 hours ago',
      likes: 45,
      comments: ['Beautiful!', 'Love it!'],
    },

    {
      id: 1,
      userName: 'Krishna',
      userAvatar: 'https://via.placeholder.com/50',
      imageUrl: 'https://via.placeholder.com/400',
      postTime: '2 hours ago',
      likes: 12,
      comments: ['Great post!', 'Awesome picture!'],
    },
    {
      id: 2,
      userName: 'vamsi',
      userAvatar: 'https://via.placeholder.com/50',
      imageUrl: 'https://via.placeholder.com/400',
      postTime: '4 hours ago',
      likes: 45,
      comments: ['Beautiful!', 'Love it!'],
    },
  ];

  return (
    <div className="bg-bg-salt-800 min-h-screen p-4  dark:text-[#2563eb]">
      <h1 className="text-3xl font-bold text-center mb-6">Igram Feed</h1>
      <div className="max-w-2xl mx-auto">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
