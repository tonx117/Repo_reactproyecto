import { fileURLToPath } from 'url';
import path from "node:path";
import fs from "fs";
import { drive } from '../app.google.js';



// config filepath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//upload file
export default async function uploadFile(nombre) {
    try {
        const folderId = "1cDcibvQUoWmeEJxQmI5k4vJ98lOjcUku"
        let nombreArchivo = nombre;
        const filePath = path.join(__dirname, `../public/${nombreArchivo}`)
        const response = await drive.files.create({
            requestBody: {
                name: `${nombre}`, //este es el nombre con el que se guarda
                mimeType: 'application/pdf', //para los pdf usamos application/pdf
                parents: [folderId], // Especifica la carpeta de destino utilizando el ID de la carpeta
            },
            media: {
                mimeType: 'application/pdf', //para los pdf usamos application/pdf
                body: fs.createReadStream(filePath),
            },
        });

        console.log(response.data);
    } catch (error) {
        console.log(error.message); console.log(error.message); console.log(error.message);
    }
}

async function deleteFile() {
    try {
        const response = await drive.files.delete({
            fileId: 'YOUR FILE ID',
        });
        console.log(response.data, response.status);
    } catch (error) {
        console.log(error.message);
    }
}

// deleteFile();

async function generatePublicUrl() {
    try {
        const fileId = 'YOUR FILE ID';
        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone',
            },
        });

        /* 
        webViewLink: View the file in browser
        webContentLink: Direct download link 
        */
        const result = await drive.files.get({
            fileId: fileId,
            fields: 'webViewLink, webContentLink',
        });
        console.log(result.data);
    } catch (error) {
        console.log(error.message);
    }
}

// generatePublicUrl();

