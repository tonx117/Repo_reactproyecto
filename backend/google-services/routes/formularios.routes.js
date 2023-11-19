import { Router } from 'express'
import {
    ctrlCreateNewPDF
} from '../controllers/formularios.controller.js'

const PDFRouter = Router()

// crear un PDF
PDFRouter.post('/', ctrlCreateNewPDF);



export { PDFRouter };