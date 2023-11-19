import React, { useState } from 'react';
import Picker from 'react-google-picker';

import {google} from 'googleapis';

const DriveUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileSelect = (data) => {
    if (data.action === 'picked') {
      setFile(data.docs[0]);
    }
  };

  const uploadFileToDrive = async () => {
    if (file) {
      // Configurar las credenciales
      const credentials = {
        installed: {
            client_id: "699175936697-4abuvif6ki5ieur3tu6kmerhmchbfp15.apps.googleusercontent.com",
            project_id: "encoded-adviser-405615",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_secret: "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",
            redirect_uris: ["urn:ietf:wg:oauth:2.0:oob", "http://localhost"]
          }
      };

      // Autenticar
      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: 'https://www.googleapis.com/auth/drive.file',
      });
      const drive = google.drive({ version: 'v3', auth });

      // Subir el archivo
      const fileMetadata = {
        name: file.name,
      };
      const media = {
        mimeType: file.mimeType,
        body: file.id,
      };

      try {
        const response = await drive.files.create({
          resource: fileMetadata,
          media,
        });

        console.log('Archivo subido:', response.data);
      } catch (error) {
        console.error('Error al subir el archivo:', error.message);
      }
    } else {
      console.warn('No se ha seleccionado ningún archivo.');
    }
  };

  return (
    <div>
      <Picker
        clientId={'699175936697-4abuvif6ki5ieur3tu6kmerhmchbfp15.apps.googleusercontent.com'}
        developerKey={'AIzaSyAGuaE7cWCcqjV7UUDVpxFywRDPssfcC0s'}
        scope={['https://www.googleapis.com/auth/drive.file']}
        onChange={handleFileSelect}
      >
        <button>Seleccionar Archivo</button>
      </Picker>
      <button onClick={uploadFileToDrive}>Subir a Google Drive</button>
    </div>
  );
};

export default DriveUploader;
