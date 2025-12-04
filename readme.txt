# Proyecto Node.js Backend - Curso

Este proyecto es un backend en Node.js con Express que utiliza Firestore como base de datos y JWT para autenticación.  

## Requisitos

- Node.js >= 18
- npm
- Cuenta de Firebase (se proporciona `serviceAccountKey.json` con acceso al proyecto de prueba)
- Thunder Client o Postman para probar las rutas

## Archivos importantes

- `.env` → Variables de entorno del proyecto.
- `serviceAccountKey.json` → Credenciales para acceder a Firebase.  

- `src/routes/` → Rutas del proyecto (productos, usuarios, login)
- `src/controllers/` → Controladores que reciben las peticiones
- `src/services/` → Lógica de negocio y conexión con modelos
- `src/models/` → Acceso a Firestore

## Configuración

1. Colocar los archivos `.env` y `serviceAccountKey.json` en la raíz del proyecto (`src/` si corresponde según tu estructura).
2. Instalar dependencias:

```bash
npm install
