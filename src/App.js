
import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
import './App.css';
import StyleSlides from './Stylerslider';
function App() {
  const [btnBorderRadius, setbtnBorderRadius] = React.useState(0);
  const [btnPadding, setBtnPadding] = React.useState(0);
  const [btnStyles, setBtnStyles] = React.useState({
    borderRadius: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderWidth: 0,
    backgroundColor: '#000000',
    borderStyle: "solid",
    borderColor: "#000000",
    boxShadowHor: 0,
    boxShadowVert: 0,
    boxShadowBlur: 0,
    boxShadowSpread: 0,
    boxShadowColor: "#000000",
    
    color: "#000000",
    fontFamily: 0,
    fontSize: 50,
    textShadowHor: 0,
    textShadowVert: 0,
    textShadowBlur: 0,
    textShadowColor: "#000000"

  })

  console.log(btnStyles.backgroundColor)
  const styleRef = React.useRef(null)


  const keyboys = Object.keys(btnStyles)

  const buttonProperties = keyboys.map(key =>
    <StyleSlides name={key} value={btnStyles[key]} setBtnStyles={setBtnStyles} />
  )
  return (
    <div className="App">
      <style ref={styleRef}>{`
          .button1{
            border-radius: ${btnStyles.borderRadius}px; 
            padding: ${btnStyles.paddingTop}px ${btnStyles.paddingRight}px ${btnStyles.paddingBottom}px ${btnStyles.paddingLeft}px;
            
            border: ${btnStyles.borderWidth}px ${btnStyles.borderStyle} ${btnStyles.borderColor};
            box-shadow: ${btnStyles.boxShadowHor}px ${btnStyles.boxShadowVert}px ${btnStyles.boxShadowBlur}px  ${btnStyles.boxShadowSpread}px ${btnStyles.boxShadowColor};
            background-color: ${btnStyles.backgroundColor};
            color: ${btnStyles.color};
            font-family: ${btnStyles.fontFamily};
            font-size: ${btnStyles.fontSize}px;
            text-shadow: ${btnStyles.textShadowHor}px ${btnStyles.textShadowVert}px ${btnStyles.textShadowBlur}px ${btnStyles.textShadowColor};
          }

        `}
      </style>
      <header className="App-header">

        <button className='button1'>Test Button</button>
        <Box sx={{ width: "18rem" }}>
          {buttonProperties}



        </Box>
      </header>
    </div>
  );
}

export default App;
