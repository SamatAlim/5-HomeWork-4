import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {firstInput, secondInput, addNumbers, subtractNumbers, multiplyNumbers, divideNumbers, cleanInputs} from "..//../store/mathSlice" 
import '..//../math.css'

function MathPage() {
  const dispatch = useDispatch()
  const { input1, input2, result } = useSelector((state) => state.mathSlice)

  const plus = () => {
    dispatch(addNumbers({ num1: input1, num2: input2 }))
  }

  const minus = () => {
    dispatch(subtractNumbers({ num1: input1, num2: input2 }))
  }

  const multiply = () => {
    dispatch(multiplyNumbers({ num1: input1, num2: input2 }))
  }

  const devide = () => {
    dispatch(divideNumbers({ num1: input1, num2: input2 }))
  }
  const cls = ()=>{
   dispatch(cleanInputs({ num1: input1, num2: input2 }))
  }

  return (
   <div className="container">
            <h1>math calculator</h1>
      <div className="calculator">
         <div className="inputs">
            <input placeholder="enter first number" value={input1} onChange={(event) => dispatch(firstInput(event.target.value))}/>
            <input placeholder="enter second number" value={input2} onChange={(event) => dispatch(secondInput(event.target.value))}/>
            
         </div>
            
         <div className="buttons">
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={devide}>/</button>
            <button onClick={cls}>cls</button>
         </div>
      </div>
            <p>answer: {result}</p>
   </div>
  )
}

export default MathPage;