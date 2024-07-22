import React from 'react';
import './LearnCadr.css'; // Import your CSS file for styling if needed

const ResourceCard = ({ type, title, description, link }) => {
  // Ensure type is defined and used correctly
  console.log(type); // Debugging: Check type value
  
  return (
    <div className="resource-card">
      <h2 className="card-type">{type}</h2>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  );
}

export default ResourceCard;
