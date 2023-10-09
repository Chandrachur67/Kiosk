import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './Question.css'

const Question = (props) => {
  return (
    <div class='ques'>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" class="queslabel">{props.ques}</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {console.log(props.options)}
            {props.options.map((option, index) => {
              // console.log(option)
              return <FormControlLabel value={index} control={<Radio />} label={option} />
            })}
            {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
          </RadioGroup>
        </FormControl>
    </div>
  )
}

export default Question