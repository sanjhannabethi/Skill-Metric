import React, { useState, useEffect } from 'react';
import './Dashboard.css'; 
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-circular-progressbar/dist/styles.css';
import 'react-calendar-heatmap/dist/styles.css'; // Import heatmap styles

// Skill Levels Data
const skillLevels = [
  { name: 'Experience Relevance', value: 39 },
  { name: 'Experience Length', value: 75 },
  { name: 'Technical Skills', value: 80 },
  { name: 'Education', value: 80 },
  { name: 'Certifications', value: 50 },
  { name: 'Projects', value: 70 },
  { name: 'Achievements', value: 80 },
  { name: 'ATS Optimization', value: 24 }
];

const Dashboard = () => {
  const [assignments, setAssignments] = useState([]);
  const [performance, setPerformance] = useState({});
  const [jobRecommendations, setJobRecommendations] = useState([]);
  const [courseRecommendations, setCourseRecommendations] = useState([]);
  const [resumeScore, setResumeScore] = useState(75); 

  useEffect(() => {
    const dummyAssignments = [
      { id: 1, title: 'Math Assignment 1', dueDate: '2024-09-15', status: 'Pending' },
      { id: 2, title: 'Science Project', dueDate: '2024-09-10', status: 'Completed' },
    ];

    const dummyPerformance = {
      completedAssignments: 5,
      pendingAssignments: 3,
      overallGrade: 85,
    };

    const dummyJobRecommendations = [
      { id: 1, title: 'Frontend Developer at Google', location: 'California, USA', logo: 'https://logo.clearbit.com/google.com' },
      { id: 2, title: 'Data Scientist at Facebook', location: 'New York, USA', logo: 'https://logo.clearbit.com/facebook.com' },
    ];

    const dummyCourseRecommendations = [
      { id: 1, title: 'Advanced React.js Course', provider: 'Youtube', videoId: 'bMknfKXIFA8?si=1uRQ-MzKWKXLZ367' },
      { id: 2, title: 'Data Science with Python', provider: 'Youtube', videoId: 'mkv5mxYu0Wk?si=R0KhmVHJeJfxIvGW' },
    ];

    setAssignments(dummyAssignments);
    setPerformance(dummyPerformance);
    setJobRecommendations(dummyJobRecommendations);
    setCourseRecommendations(dummyCourseRecommendations);
  }, []);

  const getProgressBarColor = (value) => {
    if (value >= 75) return '#4CAF50'; 
    if (value >= 50) return '#FFC107'; 
    return '#F44336'; 
  };

  return (
    <div>
      <Header />
      <div className="dashboard-dark-container">
        <div className="welcome-section">
          <h1>Welcome, Kundan Sai Raj!</h1>
          <p>Your academic progress is on track. Let’s take it to the next level!</p>
        </div>

        <div className="badges-section">
          <a href="https://www.linkedin.com/in/johndoe/" className="badge linkedin">
            <FaLinkedin size={30} /> LinkedIn Profile
          </a>
          <a href="https://github.com/johndoe" className="badge github">
            <FaGithub size={30} /> GitHub Profile
          </a>
        </div>

        <section className="resume-score-section">
          <h2>Total Profile Score</h2>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${resumeScore}%`,
                  backgroundColor: getProgressBarColor(resumeScore),
                }}
              >
                {resumeScore}%
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h2>Skills Breakdown</h2>
          <div className="skills-circle-container">
            {skillLevels.map((skill, index) => (
              <div key={index} className="skill-item">
                <CircularProgressbar
                  value={skill.value}
                  text={`${skill.value}%`}
                  styles={buildStyles({
                    pathColor: getProgressBarColor(skill.value),
                    textColor: '#fff',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Heatmap Section */}
        <section className="heatmap-section">
          
          <CalendarHeatmap
            startDate={new Date('2024-01-01')}
            endDate={new Date('2024-12-31')}
            values={[
              { date: '2024-01-02', count: 2 },
  { date: '2024-01-08', count: 3 },
  { date: '2024-01-14', count: 1 },
  { date: '2024-01-20', count: 4 },
  { date: '2024-01-26', count: 2 },

  // February
  { date: '2024-02-03', count: 1 },
  { date: '2024-02-09', count: 3 },
  { date: '2024-02-15', count: 2 },
  { date: '2024-02-21', count: 4 },
  { date: '2024-02-27', count: 1 },

  // March
  { date: '2024-03-05', count: 2 },
  { date: '2024-03-10', count: 4 },
  { date: '2024-03-15', count: 1 },
  { date: '2024-03-20', count: 3 },
  { date: '2024-03-25', count: 2 },

  // April
  { date: '2024-04-01', count: 1 },
  { date: '2024-04-08', count: 2 },
  { date: '2024-04-14', count: 3 },
  { date: '2024-04-21', count: 4 },
  { date: '2024-04-28', count: 1 },

  // May
  { date: '2024-05-04', count: 3 },
  { date: '2024-05-10', count: 1 },
  { date: '2024-05-16', count: 4 },
  { date: '2024-05-22', count: 2 },
  { date: '2024-05-28', count: 3 },

  // June
  { date: '2024-06-02', count: 1 },
  { date: '2024-06-07', count: 4 },
  { date: '2024-06-12', count: 2 },
  { date: '2024-06-17', count: 3 },
  { date: '2024-06-22', count: 1 },

  // July
  { date: '2024-07-05', count: 2 },
  { date: '2024-07-10', count: 3 },
  { date: '2024-07-15', count: 4 },
  { date: '2024-07-20', count: 1 },
  { date: '2024-07-25', count: 2 },

  // August
  { date: '2024-08-02', count: 3 },
  { date: '2024-08-07', count: 1 },
  { date: '2024-08-12', count: 4 },
  { date: '2024-08-17', count: 2 },
  { date: '2024-08-22', count: 3 },

  // September
  { date: '2024-09-04', count: 1 },
  { date: '2024-09-09', count: 2 },
  { date: '2024-09-14', count: 3 },
  { date: '2024-09-19', count: 4 },
  { date: '2024-09-24', count: 1 },

  // October
  { date: '2024-10-03', count: 2 },
  { date: '2024-10-08', count: 1 },
  { date: '2024-10-13', count: 3 },
  { date: '2024-10-18', count: 4 },
  { date: '2024-10-23', count: 2 },

  // November
  { date: '2024-11-02', count: 3 },
  { date: '2024-11-07', count: 1 },
  { date: '2024-11-12', count: 4 },
  { date: '2024-11-17', count: 2 },
  { date: '2024-11-22', count: 3 },

  // December
  { date: '2024-12-05', count: 1 },
  { date: '2024-12-10', count: 3 },
  { date: '2024-12-15', count: 2 },
  { date: '2024-12-20', count: 4 },
  { date: '2024-12-25', count: 1 },
            ]}
            
            classForValue={(value) => {
              if (!value) {
                return 'color-empty';
              }
              return `color-github-${value.count}`;
            }}
            style={{
              color: '#ffffff', // White text for heatmap dates
              backgroundColor: '#212121', // Dark background color
              width: '400px'
            }}
          />
        </section>

        {/* Job Recommendations */}
        <section className="job-recommendations-section">
          <h2>Job Recommendations</h2>
          <a href='/google'>
          <div className="job-list">
            {jobRecommendations.map((job) => (
              <div key={job.id} className="job-card">
                <img src={job.logo} alt={`${job.title} logo`} className="company-logo" />
                <div className="job-details">
                  <h3>{job.title}</h3>
                  <p>Location: {job.location}</p>
                </div>
              </div>
            ))}
          </div>
          </a>
        </section>

        {/* Course Recommendations */}
        <section className="course-recommendations-section">
          <h2>Course Recommendations</h2>
          <div className="course-list">
            {courseRecommendations.map((course) => (
              <div key={course.id} className="course-card">
                <h3>{course.title}</h3>
                <p>Provider: {course.provider}</p>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${course.videoId}`}
                  title={course.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
