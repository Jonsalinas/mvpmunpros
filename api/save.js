export default async function handler(req, res) {
  console.log("🚀 La función fue ejecutada");

   if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { email, opcion } = req.body;

    console.log("📩 Email recibido:", email);
    console.log("🔘 Opción seleccionada:", opcion);

    return res.status(200).json({ message: "Guardado" });

  } catch (error) {
    console.error("❌ Error:", error);
    return res.status(500).json({ error: "Error interno" });
  }
}
