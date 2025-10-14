import React from 'react';
import './navbar.css';

const Body = () => {
  return (
    <div className="id-card">
      <div className="id-header">
        <h2>My University</h2>
      </div>
      <div className="id-body">
        <p><strong>Registration No:</strong> 12306541</p>
        <p><strong>Name:</strong> Akshat paul</p>
        <p><strong>Programme:</strong> B.Tech Computer Science</p>
        <p><strong>Address:</strong> Kathua , Jammu and Kashmir</p>
      </div>
      <div className="id-footer">
        <p>Valid Till: 2027</p>
      </div>
    </div>
  )
}

export default Body;
