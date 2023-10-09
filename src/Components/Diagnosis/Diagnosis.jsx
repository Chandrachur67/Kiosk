import React from 'react'
import Question from '../Question/Question'

const Diagnosis = () => {
  return (
    <div class='diagnosis'>
      <div>Diagnosis</div>
      <Question ques="What is your gender?" options={["male", "female", "other"]} />
    </div>

  )
}

export default Diagnosis