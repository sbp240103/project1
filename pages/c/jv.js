import { google } from 'googleapis';
import { join } from 'path';
import { createReadStream } from 'fs';


const CLIENT_ID = '370399822617-9eu46504frmsfgv1akvbdh6o5latvegl.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'


const REFRESH_TOKEN = '1//04nY71JEWAhpaCgYIARAAGAQSNwF-L9Ir1ZfDhYA8vvQzyUgBsbIn9Aa6Cz3ACCV3wS7dKZQjOnRgCWqyfelJuNCneNuksGdc3uM'


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({ version: 'v3', auth: oAuth2Client });


const filePath = join(process.cwd(), 'email.txt'); // Ensure correct file path resolution


async function uploadFile() {
    try {
        const response = await drive.files.create({
            requestBody: {
                name: 'email.txt',
                mimeType: 'text/plain'
            },
            media: {
                mimeType: 'text/plain',
                body: createReadStream(filePath) // Ensure file exists at this path
            }
        });
        console.log('File Id:', response.data.id); // Log file ID on success
    }
    
    catch(err){
        console.log(err);
    }
}



uploadFile().catch(console.error);