import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ title, body, id, userId }) => {
  return (
    <div className="jumbotron p-3">
      <Link
        to={`/post-page/${userId}/${id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className="Post" style={{ cursor: 'pointer' }}>
          <h4 className="card-header bg-secondary">{title}</h4>
          <hr />
          <p className="card-text">{body}</p>
        </div>
      </Link>
    </div>
  );
};

export default Post;
