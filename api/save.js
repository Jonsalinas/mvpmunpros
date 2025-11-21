import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { email, opcion } = req.body;

    // Autenticación con Google
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Insertar en la hoja
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "Hoja1!A:C",
      valueInputOption: "RAW",
      requestBody: {
        values: [[email, opcion, new Date().toLocaleString("es-HN")]]
      }
    });
    return res.status(200).json({ message: "Guardado en Google Sheets" });

  } catch (error) {
    console.error("❌ Error:", error);
    return res.status(500).json({ error: "Error al guardar" });
  }
}
