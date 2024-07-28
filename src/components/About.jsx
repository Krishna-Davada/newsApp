import React from 'react';

const About = () => {
  return (
    <div className="container my-4">
      <h1>About newsApp</h1>
      <p>
        Welcome to newsApp! This application provides the latest news articles from around the world. 
        Stay informed with up-to-date headlines in various categories including general news, technology, 
        sports, entertainment, and more.
      </p>
      <p>
        newsApp is built using React and leverages the NewsAPI to fetch the latest news. We use modern 
        web development tools and practices to ensure a fast and responsive user experience.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Browse top headlines from various categories</li>
        <li>Infinite scrolling to load more news articles</li>
        <li>Responsive design for optimal viewing on all devices</li>
      </ul>
      <h2>Technology Stack</h2>
      <ul>
        <li>React</li>
        <li>Bootstrap</li>
        <li>NewsAPI</li>
        <li>Vite</li>
      </ul>
      <p>
        Thank you for using newsApp. We hope you find it useful and informative. If you have any feedback 
        or suggestions, please feel free to reach out to us.
      </p>
    </div>
  );
};

export default About;
