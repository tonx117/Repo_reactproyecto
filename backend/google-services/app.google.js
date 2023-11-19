import { google } from "googleapis";
import { config } from 'dotenv';
config();


//config client
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.SECRET_CLIENT,
    process.env.REDIRECT_URI
)
oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

//Config drive
export const drive = google.drive({
    version: "v3",
    auth: oauth2Client
});


