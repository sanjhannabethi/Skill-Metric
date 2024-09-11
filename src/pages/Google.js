import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element to improve accessibility

const Google = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (type) => {
    if (type === 'compatibility') {
      setModalContent(
        `Your compatibility with this job is 85%. 
         Lacking Skills:
         1. Advanced Python
         2. Cloud Architecture`
      );
    } else if (type === 'roadmap') {
      setModalContent(
        `Learning Roadmap:
         1. Master JavaScript fundamentals.
         2. Gain expertise in React.js and modern front-end practices.
         3. Learn Python for backend development.
         4. Understand cloud technologies and their applications.
         5. Build projects showcasing your skills and apply them to real-world problems.`
      );
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Header />

      {/* Job Details Section */}
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Job Title: Software Engineer</h1>
          <p style={styles.description}>
            <strong>Description:</strong> As a Software Engineer at Google, you will be responsible for developing scalable and innovative software solutions, collaborating with cross-functional teams, and utilizing cutting-edge technologies to build high-quality products.
          </p>
          <p style={styles.eligibility}>
            <strong>Eligibility:</strong> Bachelor's degree in Computer Science or related field, strong problem-solving skills, and experience in software development.
          </p>
          <p style={styles.skills}>
            <strong>Required Skills:</strong> JavaScript, React, Python, Java, Data Structures, Algorithms, and cloud technologies.
          </p>
          <p style={styles.deadline}>
            <strong>Application Deadline:</strong> September 30, 2024
          </p>

          {/* Compatibility and Learning Roadmap Buttons */}
          <div style={styles.buttonContainer}>
            <button
              style={styles.button}
              onClick={() => openModal('compatibility')}
            >
              Compatibility
            </button>
            <button
              style={styles.button}
              onClick={() => openModal('roadmap')}
            >
              Learning Roadmap
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Compatibility and Learning Roadmap */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Information"
        style={modalStyles}
      >
        <h2>{modalContent.includes('Compatibility') ? 'Compatibility' : 'Learning Roadmap'}</h2>
        <p>{modalContent}</p>
        <button style={styles.modalButton} onClick={closeModal}>Close</button>
      </Modal>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px 20px 20px', // Adjust padding-top to account for the navbar
    maxWidth: '800px',
    margin: '90px auto',
    color: '#fefefe', // Light text for dark theme
    backgroundColor: '#202021',
  },
  content: {
    backgroundColor: '#303030', // Slightly lighter dark background for contrast
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#fefefe',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  eligibility: {
    fontSize: '1.1rem',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  skills: {
    fontSize: '1.1rem',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  deadline: {
    fontSize: '1.1rem',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '12px 25px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff', // Blue button color
    color: '#fff', // White text color
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
    flex: 1,
    margin: '0 10px',
  },
  modalButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff', // Blue button color
    color: '#fff', // White text color
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
};


const modalStyles = {
    content: {
      backgroundColor: '#303030',
      color: '#fefefe',
      borderRadius: '10px',
      padding: '20px',
      height: '350px', // Corrected spelling
      maxWidth: '400px', // Smaller modal size
      margin: 'auto',
      position: 'absolute', // Centered position
      top: '50%', // Center vertically
      left: '30%', // Center horizontally
      transform: 'translate(-50%, -50%)', // Adjust positioning to truly center
      textAlign: 'center', // Center text
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center content vertically
    },
  };
  

export default Google;
