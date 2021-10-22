import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Card({ title, description, user, value }) {
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
      <div>
      <progress
       className="progressBar"
      value={value}
      max="100"
      />
      </div>
    </li>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.object,
  picture: PropTypes.string,
  value: PropTypes.number,
}

export default Card;
