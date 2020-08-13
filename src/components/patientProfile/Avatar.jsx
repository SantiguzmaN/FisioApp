import React, { useState } from 'react';
import Webcam from 'react-webcam';

import '../../styles/patientProfile.css';

const Avatar = () => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState(false);
  const change = (e) => {
    text
      ? (e.target.style.background = 'grey')
      : (e.target.style.background = 'black');
    setText(!text);
  };
  return (
    <div>
      {show ? (
        <div className="avatar">
          <h1>?</h1>
        </div>
      ) : (
        <div>
          <Webcam
            className="avatar"
            audio={false}
            screenshotFormat="image/jpeg"
          />
        </div>
      )}
      <button
        className="button-photo button-avatar"
        onClick={() => {
          setShow(!show);
        }}
        onMouseEnter={change}
        onMouseOut={change}
      >
        Ɵ
      </button>
    </div>
  );
};

export default Avatar;
