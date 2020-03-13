import React from 'react';
import './Loading.css';
import { loadPartialConfig } from '@babel/core';

const Loading = ({ text }) => {
  return (
    <div className="Loading">
      <span>{ text }</span>
    </div>
  )
}

export default Loading;