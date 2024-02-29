import React, { useEffect } from 'react'
import '../styles/Result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch, useSelector} from 'react-redux'
import { attempts_number, earnPoints_number, flagResult } from '../helper/helper'

import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import { usePublishResult } from '../hooks/setResult'

export default function Result() {

  const dispatch = useDispatch()
  const { questions : {queue, answers}, result : {result,userId}} = useSelector(state=>state)

  // useEffect(()=>{
  //   console.log(totalPoints)
  //   console.log(earnPoints)
  //   console.log(attempts)
  //   console.log(flag)
  // })

  const totalPoints = queue.length * 10;
  const attempts = attempts_number(result)
  const earnPoints = earnPoints_number(result,answers,10)
  const flag = flagResult(totalPoints,earnPoints)

  usePublishResult({ result,username: userId,attempts,points:earnPoints,achived: flag? "Passed":"Failed"})

  function onRestart(){
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz App</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Username</span>
          <span className='bold'>{userId || ""}</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Points : </span>
          <span className='bold'>{totalPoints || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Questions</span>
          <span className='bold'>{queue.length || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Attempts : </span>
          <span className='bold'>{attempts || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Points : </span>
          <span className='bold'>{earnPoints || 0}</span>
        </div>
        <div className='flex'>
          <span>Quiz Result</span>
          <span style={{ color : `${flag ? "#7fcc7f" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
        </div>
      </div>
      <div className='start'>
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>
      <div className='container'>
        <ResultTable></ResultTable>
      </div>
    </div>
  )
}
