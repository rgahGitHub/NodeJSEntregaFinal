# Proyecto Node.js Backend - Curso

Este proyecto es un backend en Node.js con Express que utiliza Firestore como base de datos y JWT para autenticación.  

## Requisitos

- npm
- Cuenta de Firebase (se proporciona `serviceAccountKey.json` con acceso al proyecto de prueba)

{
  "type": "service_account",
  "project_id": "nodejs-products",
  "private_key_id": "8fdb701b46f1cc10d51270f62903061720e93eb7",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDF3iHhIjCdMmo/\nmv+Hd6zXM2VWLDj9C7SNjTpZ9350TYD5HWt04F6xZD+KNS6X4ivLPc6uBEG0upCH\nVIXpmPlxm+uf4Ywv+17A9d1/InDMxSA5+p4Q9mLVn9pYPAmRfnMOt7gJnA9OzHty\nxomR7R4tSb4GsOV/yJEEObC5alNYj39iq/QrremjauUwkGqzjwRHaD6ORbTB7lqD\nAmAYkoSBmUd2NUNYb3Si/sg8ZXJ56Rb55UMNCLT2tOL9Grk5mww7ovaNjNOAwDh8\nHA5DX2S5dOUK2qQOIkeRs5nkSzNFascUYmIq1yHZIBR81VoNlKFDAmHaGajqGJqQ\nlE+3ilrTAgMBAAECggEAYCEIpadmJeDp5IfpkAdw1cZW+7QVZb6rk7+iszW93kQP\nHjgQTiJ5bsZM5ljrD4gmjaG0CS/xOhwPfmfufSxAN9Uv9qdt45vEj4uDdjIlyh4V\nB4X+CDCjmLSGMCrO3TwpKuPPyf9jIn3Oldbl3Brud8MlSnvjq56l8X8ToCkLX/DQ\nboU1ciHzH/U+Zg8fycHuF7G+b/OBmgL1E3nNkB0H2q1fzTxcTb8YEcfHyCFWmT43\nes+JzS/3ziybhKlmrowwYQBS7yulAd8BUtSxm5rk3gMCSYf1PzUHy/hc0wz0erKN\nJtAHBmFWH+YjKcBM9tsKFfz7VyFyKvyVQGyBRMizKQKBgQDqOE3C6tcB6FI6OzXo\nLRrLLZog0IagY0Ls8O9CmzPxzXyvTIRwzLbqV63fheLowmrlRUCxhn37nPK9Oaw2\nWm4WM7TB7ub+O8dkOkbbsYg9YH6/YFak/QJYrSqgTQFFwFXR8lniTQS1HZ0evl2d\nVjwAIi97A2RSzRPj6zT9l4iPeQKBgQDYRHMbBeaT5zPfl4v/0pYKuBvCs/lNnN5/\n3OYgDy0NjdeIO+zETCadICs5OLCceF2lJwdGTnVcZjarn+kAujkrvzM4X+V7n6ij\nKgucZvD2n7afQ34wYor6YNlriw+r35VjDKDffq+YEFzw1Q+znw90caHyDt4jffNZ\nNIxksRxtqwKBgQC2Y2XadTk82Qa/JcCSrh0BPt+Y0gkj+GfzTqNiQK2wjA2eDH3N\nwPxnfCN/vii2jD7ljooUM+EDAHLd+30pTj4Pt+/4XOsv6qkYWXE4PwUSloPcz05p\naERdfWuGLLDi+iVaOdjYqpUR3J+vgxovHSnYCMbkif2jpOLqRwyatVe4MQKBgBFy\nXDLW5AYUhcvI5wNpUq9ksOChMkB/ojeAc5QshT7trXCRHQWs+wR7/uCr4RuOXkef\ngWe7lp4wpMJtsRdc7pXH4/LtUY8Kj0kycCNa7p+GvO3WPQzcNkgCnied3VLJQ7zs\n3OGKz9GdqFHJbm3YLCABtsXXSzZjx8jvg0/wNdHnAoGAULOmv3BRQZUzzc1Kdj47\ng300ITkguPKR/NomTmIfZmx6lLl4Zf2UmwT4tyM2cC6Z4e2Lp6+49rXZRNHwfbZs\narlHYp8NqmSRfTkhkehf2hd156fG9gPjucQ8G8jkSwqE638uUSixoz2x2t2wSsPd\nrBX6dYLfjZzBPenIA+5AeAk=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@nodejs-products.iam.gserviceaccount.com",
  "client_id": "114387248115544033353",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40nodejs-products.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}


- Thunder Client o Postman para probar las rutas

## Archivos importantes

- `.env` → Variables de entorno del proyecto.
- `serviceAccountKey.json` → Credenciales para acceder a Firebase.  

## Configuración

Colocar los archivos `.env` y `serviceAccountKey.json` en la raíz del proyecto (`src/`).
