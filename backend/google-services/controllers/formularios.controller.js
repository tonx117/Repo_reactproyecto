import Formulario from '../models/formularios.model.js';
import uploadFile from './drive.controller.js';

// crear PDF
export const ctrlCreateNewPDF = async (req, res) => {
    const PDFfile = req.files.PDFfile;
    console.log(PDFfile)

    PDFfile.mv(
        `./google-services/public/${PDFfile.name}`,
        (err) => {
            console.log(err)
        }
    )

    try {
        const newPDF = new Formulario({
            PDFfile: `./google-services/public/${PDFfile.name}`
        });

        await newPDF.save();
        await uploadFile(PDFfile.name)

        res.redirect('/checklist');
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear el PDF' });
    }

};

