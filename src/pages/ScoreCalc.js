import React, { useState } from 'react';
import './ScoreCalc.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaFileUpload } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';

// Set worker URL for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

const ScoreCalc = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [scores, setScores] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const criteria = {
    skills: 30,
    experience: 30,
    education: 20,
    certifications: 10,
    formatting: 10,
  };

  const keywords = {
    skills: ['javascript', 'react', 'node.js', 'css', 'html', 'python', 'java', 'c++'],
    experience: ['experience', 'projects', 'worked', 'developed', 'managed'],
    education: ['degree', 'university', 'bachelor', 'master', 'education'],
    certifications: ['certified', 'certification', 'certificate'],
    formatting: ['pdf', 'format', 'layout', 'design'],
  };

  const calculateScores = (resumeText) => {
    const lowerText = resumeText.toLowerCase();
    const newScores = {};
    let totalScore = 0;

    for (const [category, weight] of Object.entries(criteria)) {
      let count = 0;
      keywords[category].forEach((keyword) => {
        if (lowerText.includes(keyword)) {
          count += 1;
        }
      });
      const categoryScore = Math.min((count / keywords[category].length) * weight, weight);
      newScores[category] = Math.round(categoryScore);
      totalScore += categoryScore;
    }

    const newRecommendations = [];
    for (const [category, score] of Object.entries(newScores)) {
      if (score < criteria[category] * 0.6) {
        newRecommendations.push(`Improve your ${category} section.`);
      }
    }

    return { totalScore: Math.round(totalScore), categoryScores: newScores, recommendations: newRecommendations };
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setResumeFile(file);

    let resumeText = '';
    if (file.type === 'text/plain') {
      resumeText = await file.text();
    } else if (file.type === 'application/pdf') {
      // For PDFs, extract text here or display PDF only
      alert('Text extraction from PDF is not implemented yet.');
      return;
    } else {
      alert('Please upload a PDF or TXT file.');
      return;
    }

    const { totalScore, categoryScores, recommendations } = calculateScores(resumeText);
    setScores({ totalScore, categoryScores });
    setRecommendations(recommendations);
  };

  const chartData = scores
    ? Object.entries(scores.categoryScores).map(([key, value]) => ({
        category: key.charAt(0).toUpperCase() + key.slice(1),
        score: value,
      }))
    : [];

  return (
    <div className="score-calc-container">
      <Header />
      <h1 className="title">Resume Score Calculator</h1>
      <div className="upload-section">
        <label className="upload-box" htmlFor="resumeUpload">
          <FaFileUpload size={50} className="upload-icon" />
          <p>{resumeFile ? resumeFile.name : 'Drag and drop or click to upload your resume (PDF or TXT)'}</p>
        </label>
        <input
          type="file"
          id="resumeUpload"
          accept=".pdf,.txt"
          onChange={handleFileUpload}
          hidden
        />
      </div>

      {resumeFile && resumeFile.type === 'application/pdf' && (
        <div className="pdf-viewer">
          <Document
            file={URL.createObjectURL(resumeFile)}
            options={{ workerSrc: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js` }}
          >
            <Page pageNumber={1} />
          </Document>
        </div>
      )}

      {scores && (
        <div className="score-section">
          <h2>Your Resume Score: {scores.totalScore}/100</h2>
          <div className="score-overview">
            <div className="score-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${scores.totalScore}%`,
                  backgroundColor: scores.totalScore > 70 ? '#76c7c0' : '#e76f51',
                }}
              />
            </div>
            <p>{scores.totalScore > 70 ? 'Great resume!' : 'Consider improving your resume for a better score.'}</p>
          </div>

          <div className="charts-section">
            <h3>Score Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="category" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {recommendations.length > 0 && (
            <div className="recommendations-section">
              <h3>Recommendations</h3>
              <ul>
                {recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ScoreCalc;
