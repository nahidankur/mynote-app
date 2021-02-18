import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './index.css'
import InputField from './components/InputField'
import NoteGrid from './components/NoteGrid'
import {getNotes} from './actions/notes'

const App = ()=>{
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getNotes())

    },[ currentId, dispatch])

  return (
    <div>
        <InputField currentId={currentId} setCurrentId={setCurrentId} />
        <NoteGrid setCurrentId={setCurrentId} />
   

   
    </div>
    
  )
}
export default App;
