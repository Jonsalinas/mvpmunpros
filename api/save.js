export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { email, opcion } = req.body;

  // Aquí lo puedes guardar en un servicio externo
  // Ejemplo: mandar a tu correo (brevo, mailgun), o a una base de datos.

  console.log("Nuevo registro:", email, opcion);

  return res.status(200).json({ message: "Guardado" });
}
