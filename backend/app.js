// Import modules
import cors from "cors";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import { config as dotenvConfig } from "dotenv";
import http from "http";
import { fileURLToPath } from "url";
import fileUpload from 'express-fileupload';
import { Server } from 'socket.io';
import { sequelize } from "./db.js";
import transporter from "./nodemailer.js";




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
  }
});

//Conection with sequelize
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

dotenvConfig();

// Middlewares
const corsOptions = {
  origin: "http://localhost:5173", // Reemplaza con la URL de tu aplicación React
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'Authorization'], // Agrega los encabezados necesarios
};

app.use(cors(corsOptions));

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  fileUpload({
    useTempFiles: true,
    uriDecodeFileNames: true,
    tempFileDir: path.join(process.cwd(), './google-services/public/'),
  })
);

//Path
app.use(express.static(path.join(__dirname, "public")));

// Views Routes
import userRoutes from "./api/routes/user.routes.js";
app.use("/", userRoutes);


// API Routes
import apiUserRoutes from "./api/routes/user.routes.js";
app.use("/api", apiUserRoutes);



// PDF Routes
import { PDFRouter } from "./google-services/routes/formularios.routes.js";
app.use("/api", PDFRouter);


// Ruta para procesar el formulario y enviar el correo electrónico

app.post("/enviar-correo", (req, res) => {
  console.log(req.body);
  const { Nombre, Email, Telefono, Website, Asunto, Mensaje } = req.body;

  const mailOptions = {
    from: Email,
    to: process.env.EMAIL_USER,
    subject: Asunto,
    text: `Nombre: ${Nombre}\nEmail: ${Email}\nTelefono: ${Telefono}\nWebsite: ${Website}\n Mensaje: ${Mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).send("Error al enviar el correo");
    } else {
      console.log("Correo electrónico enviado:", info.response);
      res.redirect("/contacto");
    }
  });
});


//Socket.io
let porcentajesEnviados = []

//Se establece la conexion con el socket
io.on('connection', (socket) => {
  console.log("Hola, se conectó", socket.id);

  //Se escucha el evento que pide la cantidad de empresas
  socket.on('all enterprises', () => {

    //El servidor emite el evento y pasa la cantidad de los elementos enviados
    io.emit('all enterprises', porcentajesEnviados.length)
  })

  //Se escucha el evento que pide el pocentaje promedio
  socket.on('get percentage', () => {

    //Se suman todos los porcentajes enviados
    const porcentaje = porcentajesEnviados.reduce(
      (acumulador, elemento) => acumulador + (parseFloat(elemento)), 0
    )

    //Se calcula el promedio,
    //dividiendo la suma de los porcentajes dividido la cantidad de elementos que fueron enviados.
    const porcentajePromedio = porcentaje / porcentajesEnviados.length

    //Se emite el evento con el porcentaje promedio
    socket.emit('send data', porcentajePromedio);
  });

  //Se escucha el evento send data y se utiliza como parametro el porcentaje que se envio en el formulario
  socket.on('send data', (msg) => {
    //Se agrega el porcentaje a la lista de porcentajes enviados
    porcentajesEnviados.push(msg);


    //Se calcula el porcentaje
    const porcentaje = porcentajesEnviados.reduce(
      (acumulador, elemento) => acumulador + (parseFloat(elemento)), 0
    )
    const porcentajePromedio = porcentaje / porcentajesEnviados.length

    //Se emite el evento con el porcentaje promedio para que llegue a todos los puntos
    io.emit('send data', porcentajePromedio);
    //Se emite el evento con la cantidad de empresas o envios para que llegue a todos los puntos
    io.emit('all enterprises', porcentajesEnviados.length)
    console.log(porcentajesEnviados)

  });


  socket.on('disconnect', () => {
    console.log('Adios, se desconectó', socket.id);
  });
});


server.listen(port, () => {
  console.log(`Server conectado al puerto: ${port}`);
});


