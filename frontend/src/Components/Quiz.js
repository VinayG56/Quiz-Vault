import React, { useEffect, useState } from 'react';
import Questions from './Questions';

import { moveNextQuestion, movePrevQuestion } from '../hooks/fetchQuestion';
import { pushAnswer } from '../hooks/setResult';

import {useSelector, useDispatch} from 'react-redux'
import {Navigate} from 'react-router-dom'

export default function Quiz() {

  const [check, setChecked] = useState(undefined)

  const result = useSelector(state=>state.result.result);
  const {queue, trace} = useSelector(state => state.questions)
  const dispatch = useDispatch()


  function onNext(){
    // console.log('On next click')
    if(trace<queue.length){
        dispatch(moveNextQuestion()); //update trace value
        
        if(result.length <= trace)
        {
          dispatch(pushAnswer(check))
        }
    }
    setChecked(undefined)
  }
  function onPrev(){
    // console.log('On onPrev click')
    if(trace>0)
      dispatch(movePrevQuestion());
  }

  function onCheck(check){
    console.log(check)
    setChecked(check)
  }

  if(result.length && result.length >= queue.length){
    return <Navigate to={'/result'} replace="true"></Navigate>
  } 

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz App</h1>

      {/* questions */}
      <Questions onCheck={onCheck}/>

      <div className='grid'>
        { trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
