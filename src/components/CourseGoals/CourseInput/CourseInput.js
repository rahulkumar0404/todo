import React, { useState } from 'react'
// import styled from 'styled-components'
import styles from './CourseInput.module.css'
import Button from '../../UI/Button/Button'
// const FormControl = styled.div`
//     margin: 0.5rem 0;
    
//     & label{
//         font-weight: bold;
//         display: block;
//         margin-bottom: 0.5rem;
//     }
    
//     & label{
//         display: block;
//         width: 100%;
//         text-align: center;
//         font-size: 1.5rem;
//         /* font: inherit; */
//         line-height: 1.5rem;
//         padding: 0 0.25rem;
//     }
//     & input{
//         width: 77%;
//         font-size: 1.1rem;
//         height: 18px;
//         padding: 0 6px ;
//         margin-left: 36px;
//     }
//     & input:focus{
//         outline: none;
//         background: #fad0ec;
//         border-color: #8b005d;
//     }
    
//     &.invalid input{
//         border-color: rgb(242, 221, 221);
//         background-color: rgb(195, 94, 94);
//     }
    
//     &.invalid label{
//         color: red;
//     }
// `
export default function CourseInput(props) {
    const [enteredValue, setEnteredValue] = useState('')
    const [isValid, setValid] = useState(true)
    const goalInputChangeHandler = (event) => {
        if (event.target.value.trim().length) {
            setValid(true)
        }
        setEnteredValue(event.target.value)
    }
    
    const formSubmitHandler = event => {
        event.preventDefault()
        if (enteredValue.trim().length === 0) {
            setValid(false)
            return 
        }
        props.onAddGoal(enteredValue)
    };

  return (
      <form onSubmit={formSubmitHandler}>
          {/* <FormControl className={!isValid ? 'invalid' : ''}>
              <label >Course Goal</label>
              <input type="text" id='inp' onChange={goalInputChangeHandler}/>  
          </FormControl> */}
          <div className={`${styles['form-control']} ${!isValid && styles.invalid} `}>
              <label >Course Goal</label>
              <input type="text" id='inp' onChange={goalInputChangeHandler}/>  
          </div>
          <Button type='submit'>Add Goal</Button>
    </form>
  )
}
