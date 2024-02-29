import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Main.css';
import { useDispatch } from 'react-redux';
import { setUserid } from '../redux/result_reducer';

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()

    function startQuiz(){
      if(inputRef.current?.value){
        dispatch(setUserid(inputRef.current?.value))
        alert("All the Best!!");
      }
    }

  return (
    <section className='home'>
      <div className='container'>
      <h1 className='title text-light'>Quiz Vault</h1>
        <h3>Enter your name to participate in the Quiz: </h3>
        <form id='form'>           
              <input ref={inputRef} className='userid' type='text' placeholder='Username'/>
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>
        <h3>Instructions: </h3>
        <ol>
            <li>You will be asked 10 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has four options. You can choose only one option.</li>
            <li>You can review and change answers before the quiz finish.</li> 
            <li>The result will be declared at the end of the quiz.</li>  
        </ol>
    </div>
    </section>
  )
}
