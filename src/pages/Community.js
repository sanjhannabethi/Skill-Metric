import React, { useState } from 'react';
import './Community.css'; // Add a separate CSS file to keep styling clean
import Footer from '../components/Footer';
import Header from '../components/Header';
import Ban from '../images/1000030810_Original.jpg'

const Community = () => {
  // Initial state for posts
const [posts, setPosts] = useState([
  {
    id: 1,
    title: "Google Interview Experience",
    tags: "#interview #google",
    likes: 0,
    comments: 0,
    content: `I recently interviewed at Google for a software engineering role, and here’s a quick rundown of my experience:

    - Recruiter Call: Initial discussion about my background, experience, and the role.
    - Technical Phone Screen: A 45-minute coding interview with a problem focused on data structures and algorithms.
    - Onsite Interview: Consisted of multiple rounds, including coding, system design, and behavioral interviews. Coding rounds covered algorithms, problem-solving, and optimization.

    The process was challenging but insightful. Preparation in problem-solving and clear communication is key!`,
  }
]);


  // State for new post input
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  // Handler to update likes
  const handleLike = (postId) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
  };

  // Handler to add a comment
  const handleComment = (postId) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, comments: post.comments + 1 } : post));
  };

  // Handler to add a new post
  const handleAddPost = () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      const newPostId = posts.length + 1;
      setPosts([...posts, { id: newPostId, title: newPost.title, content: newPost.content, likes: 0, comments: 0 }]);
      setNewPost({ title: '', content: '' }); // Clear the form
    }
  };

  return (
    <div>
      <div className="dashboard-container">
        <Header />
        {/* Left Sidebar */}
        <aside className="left-sidebar">
          <div className="profile-section">
            <img src={Ban} alt="User Profile" className="profile-pic" />
            <h3>Kundan Sai Raj</h3>
            <ul className="profile-stats">
              <li>Posts <span>{posts.length}</span></li>
              <li>Comments <span>{posts.reduce((acc, post) => acc + post.comments, 0)}</span></li>
              <li>Appreciations <span>{posts.reduce((acc, post) => acc + post.likes, 0)}</span></li>
              <li>Followers <span>66</span></li>
              <li>Following <span>7</span></li>
            </ul>
          </div>
          <nav className="nav-linkss">
            <a href="/">Home</a>
            <a href="/">Posts</a>
            <a href="/">Tags</a>
            <a href="/">Jobs</a>
          </nav>
        </aside>

        {/* Main Feed Section */}
        <main className="feed">
          <div className="feed-header">
            <input type="text" placeholder="Search.." className="search-bar" />
          </div>

          {/* Add new post form */}
          <div className="add-post">
            <input
              type="text"
              placeholder="New post title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="new-post-input"
            />
            <input
              type="text"
              placeholder="Add Content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="new-post-input"
            />
            <button onClick={handleAddPost} className="add-post-btn">Add Post</button>
          </div>

          <div className="feed-content">
            {posts.map((post) => (
              <div className="feed-post" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p>{post.tags}</p>
                <div className="post-actions">
                  <span role="img" aria-label="likes" onClick={() => handleLike(post.id)}>👍 {post.likes}</span>
                  <span onClick={() => handleComment(post.id)}>💬 {post.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="right-sidebar">
          <div className="followed-tags">
            <h3>Followed Tags</h3>
            <ul>
              <li>#programming</li>
              <li>#html5</li>
              <li>#nodejs</li>
              <li>#css</li>
              <li>#angularjs</li>
            </ul>
          </div>
          <div className="hot-discussions">
            <h3>Hot Discussions</h3>
            <ul>
              <li>Show me cool, obscure languages! 👍 8</li>
              <li>Which JavaScript framework is best for a single-page app? 👍 4</li>
              <li>Which is better - Vue.js or React? 👍 5</li>
            </ul>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
