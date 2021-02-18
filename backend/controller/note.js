import mongoose from 'mongoose'
import Note from '../model/noteModel.js'
import express from 'express'

const router = express.Router()

export const getnotes = async (req, res)=>{

    try{
        const notes = await Note.find()
        res.status(200).json(notes)

    }catch(error){
        res.status(404).json({message: error.message})
    }


}

export const getnote = async (req,res)=>{
    try{
        const {id} = req.params
        const note = await Note.findById(id)
        res.status(200).json(note)

    } catch(err){
        res.status(404).json({message: err.message})
    }
}

export const createnote = async (req, res)=>{
    
 
       try{
        const {title, mynote} = req.body
        const newnotes = new Note({title, mynote})
        await newnotes.save()
        res.status(201).json(newnotes)
    }
      catch(error){
        res.status(409).json({message: error.message})
    }
}

export const updatenote = async (req, res)=>{
    try{
        const {title, mynote} = req.body
        const {id} = req.params

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Note Found with this id')

        const updatednote = {title, mynote, _id: id}
        await Note.findByIdAndUpdate(id, updatednote, {new: true})
        res.status(201).json(updatednote)

    } catch (err){
        res.status(409).json({message: err.message})
    }
}

export const deletenote = async ( req, res)=>{
    try{
        const {id} = req.params

        await Note.findByIdAndRemove(id)
        res.status(201).json({message: "Successfully deleted"})

    } catch(err){
        res.status(409).json({message : err.message})
    }
}



export default router