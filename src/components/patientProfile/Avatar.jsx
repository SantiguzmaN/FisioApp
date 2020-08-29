import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { useSearchState } from '../../store/searchProvider';
import '../../styles/patientProfile.css';
import { useEffect } from 'react';

const Avatar = () => {
  const [photo, setPhoto] = useState('');
  const { user } = useSearchState();
  const webcamRef = useRef(null);
  const [hover, sethover] = useState("Abre la camara");
  const [imgSrc, setImgSrc] = useState(null);
  const [show, setShow] = useState(true);
  const [text, setText] = useState(false);
  const capture = useCallback(() => {
    if (show) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef, setImgSrc]);
  const change = (e) => {
    text
      ? (e.target.style.background = 'grey')
      : (e.target.style.background = 'black');
    setText(!text);
  };
  useEffect(() => {
    if (user) setPhoto(user.photo)
  }, [user]);
  return (
    <div>
      {show ? (
        <img className="w-100 h-100 avatar" src={photo}></img>
      ) : (
          <div>
            <Webcam
              className="avatar"
              audio={false}
              screenshotFormat="image/jpeg"
              ref={webcamRef}
            />
            <button
              title="Toma una foto"
              className="button-photo button-avatar"
              onClick={capture}
              onMouseEnter={change}
              onMouseOut={change}
            >
              take
            </button>
          </div>
        )}
      <button
        title={hover}
        className="button-photo button-avatar"
        onClick={() => {
          setShow(!show);
          sethover("Cierra la camara");
        }}
        onMouseEnter={change}
        onMouseOut={change}
      >
        Ɵ
      </button>
      {imgSrc && (
        <img
          src={console.log(imgSrc)}
        />
      )}
    </div>
  );
};

export default Avatar;
