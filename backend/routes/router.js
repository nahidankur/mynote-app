import express from 'express'
import {createnote, getnotes, getnote ,updatenote, deletenote}  from '../controller/note.js'


const router = express.Router()

router.get('/', getnotes)
router.get('/:id', getnote)
router.post('/', createnote)
router.patch('/:id', updatenote)
router.delete('/:id', deletenote)

export default router