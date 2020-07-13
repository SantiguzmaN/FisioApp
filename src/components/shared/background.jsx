import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import '../../styles/background.css';

const Background = ({ children }) => {
  const style = {
    outter: {
      background: 'radial-gradient(50% 150%, #6CD7E8 50%, #59C2D3 100%)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      height: window.innerHeight,
      position: 'relative',
      overflow: 'hidden',
    },
    infoLayerStyle: {
      position: 'relative',
      marginTop: '-60px',
    },
    bgLayerStyle: {
      position: 'absolute',
      height: '100%',
      transform: 'translate(-15%, 17%)',
    },
  };

  return (
    <ParallaxMousemove containerStyle={style.outter}>
      <ParallaxMousemove.Layer
        layerStyle={style.bgLayerStyle}
        config={{
          xFactor: 0.05,
          yFactor: 0.1,
          springSettings: {
            stiffness: 50,
            damping: 30,
          },
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/bg4.png`} alt="Parallax Layer"></img>
      </ParallaxMousemove.Layer>
      <ParallaxMousemove.Layer
        layerStyle={style.bgLayerStyle}
        config={{
          xFactor: 0.15,
          yFactor: 0.2,
          springSettings: {
            stiffness: 50,
            damping: 30,
          },
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/bg5.png`} alt="Parallax Layer"></img>
      </ParallaxMousemove.Layer>
      <ParallaxMousemove.Layer
        layerStyle={style.bgLayerStyle}
        config={{
          xFactor: 0.25,
          yFactor: 0.5,
          springSettings: {
            stiffness: 50,
            damping: 30,
          },
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/bg7.png`} alt="Parallax Layer"></img>
      </ParallaxMousemove.Layer>
      <ParallaxMousemove.Layer
        layerStyle={style.bgLayerStyle}
        config={{
          xFactor: 0.4,
          yFactor: 0.6,
          springSettings: {
            stiffness: 50,
            damping: 30,
          },
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/bg6.png`} alt="Parallax Layer"></img>
      </ParallaxMousemove.Layer>
      <ParallaxMousemove.Layer
        layerStyle={style.infoLayerStyle}
        config={{
          xFactor: 0.4,
          yFactor: 0,
          springSettings: {
            stiffness: 100,
            damping: 30,
          },
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/bg1.png`} alt="Parallax Layer"></img>
      </ParallaxMousemove.Layer>
      <ParallaxMousemove.Layer
        layerStyle={style.infoLayerStyle}
        config={{
          xFactor: 0.6,
          yFactor: 0,
          springSettings: {
            stiffness: 100,
            damping: 30,
          },
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/bg2.png`} alt="Parallax Layer"></img>
      </ParallaxMousemove.Layer>
      <ParallaxMousemove.Layer
        layerStyle={style.infoLayerStyle}
        config={{
          xFactor: 0.8,
          yFactor: 0,
          springSettings: {
            stiffness: 100,
            damping: 30,
          },
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/bg3.png`} alt="Parallax Layer"></img>
      </ParallaxMousemove.Layer>
      <ParallaxMousemove.Layer
        layerStyle={style.infoLayerStyle}
        config={{
          xFactor: 0,
          yFactor: 0,
        }}
      >
        {children}
      </ParallaxMousemove.Layer>
    </ParallaxMousemove>
  );
};

export default Background;
