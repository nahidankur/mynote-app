import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
        
    } , 
    mynote: {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

const Note = mongoose.model('Note', NoteSchema)

export default Note