import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle, changeTitleWithParams, changeInputAction, clearInput, deleteTitle } from "../../store/titleSlice";


function MainPage(){

   const dispatch = useDispatch()
   const {title, inputValue} = useSelector(state=>state.titleReducer)


   const withParams = () =>{
      dispatch(changeTitleWithParams(inputValue))
   }
   const changInput = (event)=>{
      dispatch(changeInputAction(event.target.value))
   }

   
   return(
      <div>
         <h1>{title}</h1>
         {/* <button onClick={()=>dispatch(changeTitle())}>change titile</button>
         <button onClick={withParams}>with params</button> */}

         <input value={inputValue} type="text" onChange={changInput}/>
         <button onClick={()=> dispatch(clearInput())}>clear</button>
         <button onClick={withParams}>add</button>
         <button onClick={()=>dispatch(deleteTitle())}>delete title</button>
      </div>
   )
}
export default  MainPage;