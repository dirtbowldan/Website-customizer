
'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

const SketchExample = ({updateColor, name}) => {
  const [colorshit, setcolorshit] = React.useState({
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  });

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
 
 
  const  handleClick = () => {
    setcolorshit((prevState) => { return { ...prevState, displayColorPicker: !colorshit.displayColorPicker  } })
    };

 const handleClose = () => {
    setcolorshit((prevState) => { return { ...prevState, displayColorPicker: false } })
    
  };

 const handleChange = (color) => {
    setcolorshit((prevState) => { return { ...prevState, color: color.rgb} })
    
    updateColor((prevState) => { return { ...prevState, [name]:"rgba(" + colorshit.color.r + "," + colorshit.color.g + "," + colorshit.color.b + "," + colorshit.color.a + ")"} })
  
};

//use a handle submit to deal with one step behind lag
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ colorshit.color.r }, ${ colorshit.color.g }, ${ colorshit.color.b }, ${ colorshit.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      
    }});

    return (
      <div>
        <div style={ styles.swatch } onClick={ handleClick }>
          <div style={ styles.color } />
        </div>
        { colorshit.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ handleClose }/>
          <SketchPicker color={ colorshit.color } onChange={ handleChange } />
        </div> : null }

      </div>
    )
  }


export default SketchExample