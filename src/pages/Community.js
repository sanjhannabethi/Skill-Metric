import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Community.css'; 
const Community = () => {
  // State to manage posts
  const [posts, setPosts] = useState([
    { id: 1, user: 'Lalit SDE-1 at Microsoft', text: 'I recently had an interview with Microsoft for a full-stack developer role. The interview focused heavily on my Taskly project, particularly the dashboard component. I explained the code in detail, including the architecture, state management, and backend integration. The interviewer asked about specific decisions I made in the project, such as handling user authentication and managing tasks and labels. Overall, it was a positive experience, and I felt prepared to discuss the technical aspects of my work.', date: 'September 5, 2024', image: null, likes: 3, comments: [] },
    { id: 2, user: 'Teja', text: 'Excited to announce our new features.', date: 'September 4, 2024', image: null, likes: 7, comments: [] },
    // More posts here...
  ]);

  // State for new post input
  const [newPost, setNewPost] = useState('');

  // Add a new post
  const handlePostSubmit = () => {
    if (newPost.trim() !== '') {
      const newPostData = {
        id: posts.length + 1,
        user: 'You', // Static for now
        text: newPost,
        date: new Date().toLocaleDateString(),
        image: null, // Optional image field
        likes: 0,
        comments: [],
      };
      setPosts([newPostData, ...posts]); // Add new post to the top
      setNewPost(''); // Reset input field
    }
  };

  // Like post function
  const handleLike = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="community-page">
      <Header />
      
      <div className="community-container">
        <header className="community-header">
          <h1>Welcome to the Community!</h1>
          <input type="text" className="community-search-bar" placeholder="Search..." />
        </header>
        <main className="community-main">
          {/* Sidebar - Trending Topics */}
          <div className="community-column community-first-column">
          <div className="community-card">
              <h2>Latest Activity</h2>
              <ul className="community-activity-feed">
                <li>Harshith liked your post.</li>
                <li>Pranav started following you.</li>
                <li>John Doe posted a new blog.</li>
              </ul>                      
          </div>
            <div className="community-card">
              <h2>Suggested Profiles</h2>
              <div className="community-suggestions">
                <div className="community-profile">
                  <img src="https://via.placeholder.com/50" alt="Profile" />
                  <p>Harshith</p>
                  <button className="follow-btn">Follow</button>
                </div>
                <div className="community-profile">
                  <img src="https://via.placeholder.com/50" alt="Profile" />
                  <p>Pranav</p>
                  <button className="follow-btn">Follow</button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Posts */}
          <div className="community-main-column community-second-column">
            {/* Create Post Section */}
            <div className="community-create-post">
              <h2>Create a New Post</h2>
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share your thoughts..."
              />
              <button className="community-post-button" onClick={handlePostSubmit}>
                Post
              </button>
            </div>

            {/* Display Posts */}
            {posts.map((post) => (
              <div key={post.id} className="community-post">
                <h3>{post.user}</h3>
                <p>{post.text}</p>
                <span className="community-date">{post.date}</span>
                <div className="community-post-footer">
                  <button onClick={() => handleLike(post.id)} className="community-like-btn">
                    👍 {post.likes} Likes
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Trending and Suggested Section */}
          <div className="community-column community-third-column">
            <div className="community-card">
              <h2>Trending News</h2>
              <div className="community-button-container">
                <button className="community-btn">Python Team Fired</button>
                <button className="community-btn">CodeCrafters Win!</button>
                <button className="community-btn">Recession</button>
                <button className="community-btn">Job Oppurtunities in Abroad!</button>
              </div>
            </div>
            <div className="community-card">
              <h2>Trending Topics</h2>
              <div className="community-button-container">
                <button className="community-btn">#skills</button>
                <button className="community-btn">#jobs</button>
                <button className="community-btn">#languages</button>
                <button className="community-btn">#storytime</button>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Community;
