import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteNote } from '../actions/notes'
import moment from 'moment'

const Note  = ({note, setCurrentId})=>{
  const dispatch = useDispatch()
    return(
     
      <div className="max-w-md mx-auto mb-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden shadow-md text-gray-100">

      <div className="px-6 py-4 bg-gray-800 border-b border-gray-600 font-bold uppercase">
      {note.title}
      </div>
      <div className='px-2 mt-2 mr-2  float-right text-gray-500 border rounded-md border-gray-600 font-semibold'>
        {moment(note.createdAt).fromNow()}
      </div>
      
      
      <div className="p-6 text-gray-700 border-gray-600">
      
      
  {note.mynote}
      </div>
      
      
      <div className="flex space-x-60 p-6 bg-gray-800 border-gray-200 text-right">
       
      <button
      onClick={()=> dispatch(deleteNote(note._id))}
      className="p-4 flex items-center bg-red-500 text-blue-50 w-12 h-auto rounded-full shadow-sm hover:bg-red-600 rounded-full w-12 h-auto ">
                 <i className="far fa-trash-alt"/>
               </button>
                   <button 
                   onClick={()=> setCurrentId(note._id)}
                   className="p-4 flex items-center bg-yellow-500 text-blue-50 w-12 h-auto rounded-full shadow-sm hover:bg-green-500 rounded-full w-12 h-auto ">
                 <i className="fas fa-edit"></i>
               </button>
      
      </div>
      </div>
      </div>
      
      
      
  
    )
}

export default Note