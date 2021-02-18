import React from 'react'
import Note from './Note'
import { useSelector }  from 'react-redux'

const NoteGrid = ({setCurrentId})=>{
    const notes = useSelector((state)=>state.notes)
    return(
        
 <div className='md:grid  grid-cols-3 grid-rows-3 gap-1'>
     
            
            {
                notes.map((note)=>{
                   
                 
                    
                  return  <Note note={note} setCurrentId={setCurrentId} />
                   
                  
                })
            }
            </div>
           
     
        
        
    )
}
export default NoteGrid