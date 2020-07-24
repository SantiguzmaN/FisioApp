import React from "react";
import Webcam from "react-webcam";
import { useState } from "react";
import "../../styles/patientProfile.css";

const Avatar = () => {
  const [show, setShow] = useState(true);
  const [tex, setText] = useState(false);
  const change = (e) => {
    tex
      ? (e.target.style.background = "grey")
      : (e.target.style.background = "black");
    setText(!tex);
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
      <div>
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
    </div>
  );
};

export default Avatar;
