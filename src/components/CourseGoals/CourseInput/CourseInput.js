import React, { useState } from 'react'
import './CourseInput.css'
import Button from '../../UI/Button/Button'
export default function CourseInput(props) {
    const [enteredValue, setEnteredValue] = useState('')

    const goalInputChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const formSubmitHandler = event => {
        event.preventDefault()
        props.onAddGoal(enteredValue)
    };

  return (
      <form onSubmit={formSubmitHandler}>
          <div className='form-control'>
              <label>Course Goal</label>
              <input type="text" id='inp' onChange={goalInputChangeHandler}/>
          </div>
          <Button type='submit'>Add Goal</Button>
    </form>
  )
}
