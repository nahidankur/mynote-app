import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {createNote, updateNote} from '../actions/notes'

const InputField = ({currentId, setCurrentId})=>{
       const [noteData, setNotedata] = useState({ title: '', mynote: '' })
       const note = useSelector((state)=> (currentId ? state.notes.find((mynote)=>mynote._id ===currentId ): null))
       const dispatch = useDispatch()

       useEffect(()=>{
           if(note) setNotedata(note)
       }, [note])

       const clear = ()=>{
           setCurrentId(0)
           setNotedata({ title: '', mynote: '' })
       }

       const handleSubmit = async (e)=>{
           e.preventDefault()

           if(currentId ===0){
               dispatch(createNote(noteData))
               clear()
           } else{
               dispatch(updateNote(currentId, noteData))
               clear()
           }

       }

    return(
        <form onSubmit={handleSubmit} className="form grid justify-center items-center bg-white p-6 my-10 relative">
            <h1 className='px-6 py-4 bg-green-300 border-b border-gray-600 font-bold flex justify-center text-xl text-white'> {currentId ? `Edit "${note.title}"` : "Create Note" } </h1>
        <input name="title" 
        value={noteData.title}
        onChange={(e)=>setNotedata( { ...noteData, title: e.target.value})}
        type="text"   placeholder="your note title" className="border rounded-lg p-2 w-96 mt-3"/>
        <textarea name="mynote"
        value={noteData.mynote}
        onChange={(e)=> setNotedata({ ...noteData, mynote: e.target.value })}
        cols="10" rows="3" placeholder="write note" className="border p-2 mt-3 w-full"></textarea>

        <button type='submit' onClick={handleSubmit} className="w-full mt-4 bg-red-600 hover:bg-blue-500 text-white font-semibold p-3">Submit</button>

    </form>
    )
}

export default InputField