
import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
import './App.css';
import SketchExample from './Colorpicker';

const StyleSlides = ({ name, value, setBtnStyles }) => {

    const [val, setVal] = React.useState(value)

    const handleColorChange = (event, newValue) => {
        
        setVal(event.target.value)
        setBtnStyles((prevState) => { return { ...prevState, [name]: val } })
    
        }


    const handleValueChange = (event, newValue) => {
        
        setVal(newValue)
        setBtnStyles((prevState) => { return { ...prevState, [event.target.name]: val } })
    }

    const handleInputChange = (event, newValue) => {
        console.log(event.target.value)
        setVal(event.target.value === '' ? '' : Number(event.target.value))
        setBtnStyles((prevState) => { return { ...prevState, [event.target.name]: val } })
    }
    let colortest = name.toLowerCase()
    if (colortest.includes("color")) {

            return (
                <div className='slidercont'>
                <div className='sliderlabel'><p>{name}</p></div>
                <div className="slide">
                    <SketchExample updateColor={setBtnStyles} name={name}/>
                    </div>
                <div className='slideinput'>
                    </div>
            </div>
            )
        }
        if (Number.isFinite(val)) {
        

         


        return (

            <div className='slidercont'>
                <div className='sliderlabel'><p>{name}</p></div>
                <div className="slide"><Slider

                    name={name}

                    value={val}
                    onChange={handleValueChange}
                    aria-labelledby="input-slider"
                    size='small'
                /></div>
                <div className='slideinput'>
                    <MuiInput
                        value={val}
                        size="large"
                        name={name}
                        onChange={handleInputChange}
                        sx={{ width: "50px" }}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    /></div>
            </div>

        );
     }
    
    
}

export default StyleSlides