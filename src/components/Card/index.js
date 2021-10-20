import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Card({ title, description, user, picture }) {
  console.log(title, description, user,)
  return (
    <li className="cardContainer">
      <p className="title">
        {title}
      </p>
      <p className="description">
        {description}
      </p>
      <div className="userInfo" >
        <img src={user.picture}/>
        <p>{user.name}</p>
      </div>
    </li>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.object,
  picture: PropTypes.string
}

export default Card;
