import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { jsPDF } from 'jspdf';
import './Profile.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const { register, handleSubmit, control, getValues } = useForm();
  const { fields: educationFields, append: appendEducation } = useFieldArray({ control, name: 'education' });

  const onSubmit = (data) => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text('Resume', 20, 20);

    doc.setFontSize(16);
    doc.text(`Name: ${data.name}`, 20, 40);
    doc.text(`Age: ${data.age}`, 20, 50);
    doc.text(`Email: ${data.email}`, 20, 60);
    doc.text(`Phone: ${data.phone}`, 20, 70);

    doc.text('Education:', 20, 90);
    data.education.forEach((edu, index) => {
      doc.text(`Degree: ${edu.degree}`, 20, 110 + index * 20);
      doc.text(`Institution: ${edu.institution}`, 20, 120 + index * 20);
      doc.text(`Major: ${edu.major}`, 20, 130 + index * 20);
      doc.text(`Grade: ${edu.grade}`, 20, 140 + index * 20);
    });

    // Add other form fields as needed

    doc.save('resume.pdf');
  };

  return (
    <div className="container">
      <Header/>
      <h2 className="text-center t">Student Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* User Information Section */}
        <div className="form-section">
          <h4>User Information</h4>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" {...register('name', { required: true })} placeholder="Enter full name" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Age <span className="text-danger">*</span></label>
              <input type="number" className="form-control" {...register('age', { required: true })} placeholder="Enter your age" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email ID <span className="text-danger">*</span></label>
              <input type="email" className="form-control" {...register('email', { required: true })} placeholder="example@mail.com" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number <span className="text-danger">*</span></label>
              <input type="tel" className="form-control" {...register('phone', { required: true })} placeholder="Enter phone number" />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="form-section" id="educationSection">
          <h4>Education</h4>
          {educationFields.map((field, index) => (
            <div key={field.id} className="education-entry">
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Degree <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" {...register(`education.${index}.degree`, { required: true })} placeholder="B.Sc, M.Sc, etc." />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Institution Attended <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" {...register(`education.${index}.institution`, { required: true })} placeholder="University name" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Major Field of Study <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" {...register(`education.${index}.major`, { required: true })} placeholder="e.g., Computer Science" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Grades/Academic Performance</label>
                  <input type="text" className="form-control" {...register(`education.${index}.grade`)} placeholder="e.g., 3.8 GPA" />
                </div>
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-secondary add-btn" onClick={() => appendEducation({ degree: '', institution: '', major: '', grade: '' })}>
            Add More Education
          </button>
        </div>

        {/* Links Section */}
        <div className="form-section">
          <h4>Links</h4>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">GitHub Profile</label>
              <input type="url" className="form-control" {...register('github')} placeholder="https://github.com/your-profile" />
            </div>
            <div className="col-md-6">
              <label className="form-label">LinkedIn Profile</label>
              <input type="url" className="form-control" {...register('linkedin')} placeholder="https://linkedin.com/in/your-profile" />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="form-section">
          <h4>Skills and Technologies</h4>
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Languages</label>
              <select className="form-select" {...register('languages')}>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Technical Skills</label>
              <select className="form-select" {...register('techSkills')}>
                <option value="Web Development">Web Development</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Machine Learning">Machine Learning</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Soft Skills</label>
              <select className="form-select" {...register('softSkills')}>
                <option value="Communication">Communication</option>
                <option value="Leadership">Leadership</option>
                <option value="Teamwork">Teamwork</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="form-section">
          <h4>Projects</h4>
          <div id="projectsSection">
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">Project Title</label>
                <input type="text" className="form-control" {...register('projects.title')} placeholder="Project title" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Project Description</label>
                <textarea className="form-control" {...register('projects.description')} rows="2" placeholder="Brief description"></textarea>
              </div>
              <div className="col-md-2">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" {...register('projects.date')} />
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="form-section">
          <h4>Professional Experience</h4>
          <div id="experienceSection">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Role Title</label>
                <input type="text" className="form-control" {...register('experience.title')} placeholder="e.g., Software Engineer" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" {...register('experience.date')} />
              </div>
              <div className="col-md-12">
                <label className="form-label">Responsibilities</label>
                <textarea className="form-control" {...register('experience.responsibilities')} rows="3" placeholder="Describe your responsibilities"></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="form-section">
          <h4>Certifications</h4>
          <div id="certificationsSection">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Certification Name</label>
                <input type="text" className="form-control" {...register('certifications.name')} placeholder="e.g., AWS Certified Developer" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Issuing Organization</label>
                <input type="text" className="form-control" {...register('certifications.organization')} placeholder="e.g., Amazon Web Services" />
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="form-section">
          <h4>Awards</h4>
          <div id="awardsSection">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Award Name</label>
                <input type="text" className="form-control" {...register('awards.name')} placeholder="e.g., Top Performer Award" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Awarding Body</label>
                <input type="text" className="form-control" {...register('awards.body')} placeholder="e.g., Company XYZ" />
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="form-section">
          <h4>Interests</h4>
          <div id="interestsSection">
            <div className="row g-3">
              <div className="col-md-12">
                <label className="form-label">Hobbies and Interests</label>
                <textarea className="form-control" {...register('interests')} rows="3" placeholder="e.g., Coding, Reading, Traveling"></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-light">Update Profile</button>
        </div>
      </form>
      <Footer/>
    </div>
  );
};

export default Profile;

