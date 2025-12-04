# Proyecto Node.js Backend - Curso

Este proyecto es un backend en Node.js con Express que utiliza Firestore como base de datos y JWT para autenticación.  

## Requisitos

- npm
- Cuenta de Firebase (se proporciona `serviceAccountKey.json` con acceso al proyecto de prueba)

{
  "type": "service_account",
  "project_id": "nodejs-products",
  "private_key_id": "412255f43a9cc0c7c366d02345f68998265a75db",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCu7PKyXJpVroM1\nOygM/wBqYmQUr4Ys2iC1AH+MBCwzX6bjeMc7/NGSGatJAkNQ7l6EU0shYaWgCTIg\nWEUzaYT7mOeBb/MpDRSTWHEQvH7AYJZkQ9UsY0lPCNAZAeR4oifHjfaRGUdr7hLU\n5DIboyQZtng+cn56TNNA7VMrLbHcLGvPwJ6nv90/ObFrSfEyhjnBnwshsgL+ZqVC\nHSFVQjuv7c2bnGb95w2Q1DzGIJXKfXesG/ivbPSa1R6FGOf9InHHDXMzs1dEuTn/\n6XLYvVDAnsbBl67EIL7uD7IWu9if6GRHx/NOSfERoP2tVrazONwAEXXk0zVSLLCt\n4H5SZSr3AgMBAAECggEAFHLutvB3D6fO/ty42eFq6Foy3kLb/0egpd2LtjqRUDrR\nBQE23p8M1h+EvowygmDbURd2Tk4JUU7B5WDBoOOnqsySg7cqnensNdgTn6PpeA59\nMPYdEuCoeUIhJvXprOXdRfQlQYvK+vsMiIavX5EQGfwSzSS6qbbBcMhNqLE20Z4j\nm3eMCqq2gBpjixsp9t1JYZ+rzSMSi6VbRpto1YPDEONOgvVrCJFdKN08LwKX9DGC\np68yMpy2Wa4zmmzCrRM4cdLSqjWDc3bcl1FawjLHFYl9ZZ8Ye71iNyYAFIItYLXy\nhrz7HszBcqio5HkqK9H6/Tz3l6nJyzOwBWfyzoc6QQKBgQDarnUItCINyqlDVp8z\nybjOn7t6y9VH4cjd2q1A7Sjy4J8utUtXtXLw0a5WPdr0q61B1LTTjc50qAeb95Xb\n86rh/FO4XG/PIIhQDN/+4M9RYfXc1fyeiBq2PjMZupq5OG4nfwZDJ5ebJ/GhUxLW\nvBA36N+U1dSQhgOtX4Hm2fLEMwKBgQDMxu0Pr1Bthf/Hcrdm0fjN/JuQQ4tMkyE+\n2eRx+V2FEWN9z3aj454RWxd5l7pkZBakYaH7GiuzJhCE2T1JA0zI6wz7iqCMB4LM\nyJouFIaXo/b2EYDuAygNK0P7t75Uro/IKrMw3w9aeg32EPOi2cseudBTULVZsWxy\neSQhooaaLQKBgBdG+q4yfm15ZQsF7WxVzJYx6oLnr4w3PGphHJAMro8r2cXfBmYP\nqmx35VbIvsXMgGTBf34FWjSQrj6r3AfNqCLl+QNm03/4tonO1QkMZQUEqGcZYAp/\n8lfzxvy2IEIW/6K0orYDQOADIHVLonW5DwDkiOgO2tGHclzCDdHE4VKBAoGAUNvD\nw8vAAF9HDmRX0vvaOMwkSSTCnmwCVqUHNZH3wZGKLaV7/V7ljYjgjhzBdt6mqiX7\nJgHBe63uG+cD8g6hhTx7FeA5YNGebmpPpx5nvvz5iVSECneomvqYj46QUzPShoGF\n3ChYEavcU2uCKK3DLNDGV/+ofFA4uELpZ3abm8kCgYAGjSjkuBcfpI1DcsYdZAw1\nLRblMxdD26TVRE/RJMItIiMJs29GjFIIpmruwMjLyL8aGaE0219i4YYlvq/KvEXq\nWOMW4F4rycIWRVGS/yf8dllfVV4c3JOxUNHe2vW31R4Q9uvutznUQWQkfj5AL/PK\nDbbwrp45B/p7tGZ/hBDw4A==\n-----END PRIVATE KEY-----\n",
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
