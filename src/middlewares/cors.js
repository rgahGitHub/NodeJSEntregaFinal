//Configura CORS para habilitar las peticiones de origen cruzado, así las aplicaciones Frontend de la empresa pueden consultar al servicio sin problemas.
import cors from "cors";

//app.use(cors({
export default cors({
  origin: function(origin, callback) {
    // Leer los orígenes permitidos en cada request
    const allowedOrigins = (process.env.CORS_ORIGINS ?? "")
      .split(",")
      .map(o => o.trim())
      .filter(o => o.length > 0);

    if (!allowedOrigins.length) {
      //console.warn("  No se detectaron orígenes permitidos. Revisa tu .env");
      console.warn(" No se detectaron orígenes permitidos. Se permitirá cualquier origen (solo para Gus en desarrollo).");
      return callback(null, true);
    }

    console.log("Petición desde origin:", origin);

    if (!origin) return callback(null, true); // Postman/curl

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("Origen bloqueado:", origin);
      callback(new Error("Origen no permitido por CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
});
