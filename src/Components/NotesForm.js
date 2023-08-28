import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../action';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from './Header';


export default function NotesForm() {

    let [title, setTitle] = useState('');
    let [content, setContent] = useState('')

    const[darkMode, setDarkMode] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    // const{ register, handleSumbit, watch,formState:{error}} = useForm()
    // const onSubmit=(data)=>{console.log(data)}

    function handleSubmission(e){
      e.preventDefault();
      dispatch(addNote(title,content))
      setTitle('')
      setContent('')
      navigate('/allNotes')
    }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      {/* <Header handleToggleDarkMode={setDarkMode}/> */}
       <div className='formContainer'>
        <h2 className='animate-charcter'>React Notes App</h2>
        <form onSubmit={handleSubmission}>
            <b>Title</b><br/>
            <input className='title' type='text'  name='title' value={title} placeholder='Enter Title Here...' onChange={(e)=>setTitle(e.target.value)} required/><br/>
           <b>Content</b> <br/>
            <input className='content'type='text'  name='content' value={content} placeholder='Enter Content Here...' onChange={(e)=>setContent(e.target.value)}required/><br/>

            {/* {error.title?.type === 'required' && 'Title is required'}
            {error.title?.type === 'maxlength' && 'Title should be small'} */}
            <button type='submit' class="button-85" role="button">Add Note</button>
        </form>
    </div>
    </div>
   
  )
}







{/* <Link to ='/allNotes'>Add Notes</Link> */}