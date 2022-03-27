import React from 'react';
import './title.styl';

export default function Title(props) {
  return (
    <div className="title">
      <div style={ props.blockStyle }>
        <h1>{ props.heading }</h1>
        <div className="subtitle-divider"></div>
        <p className="subtitle">{ props.subHeading }</p>
      </div>
    </div>
  );
}
