
import React from "react";
import styles from './Button.module.css'
export default function Button(props) {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

// import styled from "styled-components";

// const Button = styled.button`
//   // width: 100%;
//   font: inherit;
//   margin-top: 20px;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: #fff;
//   background: #7f195b;
//   box-shadow: 0 0 4px rgba(0,0,0,0.26);
//   cursor: pointer;

//   &:focus{
//     outline: none;
//   }

//   &:hover,
//   &:active{
//   background: #d1abc4;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0,0,0,0.26);   
//   }
//   @media (max-width: 768px) {
    
//     width: 100%;
//     color: #fff;
//     background: #acoey;
//   }
// `
// export default Button