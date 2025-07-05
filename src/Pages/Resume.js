import React from 'react';
import { motion } from 'framer-motion';

function Resume() {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        padding: '3rem 2rem',
        maxWidth: '800px',
        margin: '4rem auto',
        background: '#f9f9f9',
        borderRadius: '1rem',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
      }}
    >
      <h2 style={{ color: '#007acc', fontSize: '2rem', marginBottom: '1.5rem' }}>Resume</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        Download or view my resume to learn more about my experience as a QA Automation Engineer with expertise in Selenium, Cypress, and API testing.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <motion.a
          href="/Prachi-portfolio/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-block',
            marginRight: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007acc',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Download Resume
        </motion.a>

        <motion.a
          href="/Prachi-portfolio/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#e0e0e0',
            color: '#333',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          View Online
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Resume;
