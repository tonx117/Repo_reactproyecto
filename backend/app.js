// Import modules
import cors from "cors";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import { config as dotenvConfig } from "dotenv";
import http from "http";
import ejs from "ejs";
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
app.set('view engine', 'ejs')

// Views Routes
import userRoutes from "./api/routes/user.routes.js";
app.use("/", userRoutes);

/*
import indexRoutes from "./routes/index.routes.js";
app.use("/", indexRoutes);
*/

// API Routes
import apiUserRoutes from "./api/routes/user.routes.js";
app.use("/api", apiUserRoutes);



// PDF Routes
import { PDFRouter } from "./google-services/routes/formularios.routes.js";
app.use("/api", PDFRouter);


// app.use((_req, res, _next) => {
//   res.status(404).send("Error 404");
// });

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

let mensajesEnviados = []


io.on('connection', (socket) => {
  socket.on('all enterprises', () => {
    io.emit('all enterprises', mensajesEnviados.length)
  })
  console.log("se conectó", socket.id);

  for (let i = 0; i < mensajesEnviados.length; i++) {
    socket.emit('chat message', mensajesEnviados[i]);
  }

  socket.on('get percentage', () => {
    const porcentaje = mensajesEnviados.reduce(
      (acumulador, elemento) => acumulador + (parseFloat(elemento)), 0
    )

    const porcentajePromedio = porcentaje / mensajesEnviados.length
    socket.emit('chat message', porcentajePromedio);
  });

  socket.on('chat message', (msg) => {
    mensajesEnviados.push(msg);
    const porcentaje = mensajesEnviados.reduce(
      (acumulador, elemento) => acumulador + (parseFloat(elemento)), 0
    )

    const porcentajePromedio = porcentaje / mensajesEnviados.length
    io.emit('chat message', porcentajePromedio);
    io.emit('all enterprises', mensajesEnviados.length)
    console.log(mensajesEnviados)

  });


  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });
});


server.listen(port, () => {
  console.log(`Server conectado al puerto: ${port}`);
});


