/* async function captureScreenshot(url, outputPath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    await page.pdf({ path: outputPath, format: 'A4' });

    await browser.close();
}


function savePDFToServer() {

    setTimeout(() => {
        const pdfBlob = new Blob([document.documentElement.innerHTML], { type: 'application/pdf' });

        const formData = new FormData();
        formData.append('PDFfile', pdfBlob, 'documento.pdf');

        fetch('localhost:4000/api/', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    // Procesar la respuesta del servidor si es necesario
                    console.log('PDF guardado en el servidor');
                } else {
                    // Manejar el caso de error en la solicitud
                    console.log('Error al guardar el PDF en el servidor');
                }
            })
            .catch(error => {
                // Manejar el caso de error en la solicitud
                console.log('Error al enviar el PDF al servidor:', error);
            });
    }, 1000); // Esperar 1 segundo para asegurarse de que el PDF se haya generado completamente
}

botonSubir = document.getElementById("botonSubir")
botonSubir.addEventListener("click", () => {
    savePDFToServer();
    captureScreenshot('localhost:4000/checklist', '../public/captura.pdf')
        .then(() => {
            console.log('Captura de pantalla guardada como PDF.');
        })
        .catch((error) => {
            console.error('Error al tomar la captura de pantalla:', error);
        })
}); */