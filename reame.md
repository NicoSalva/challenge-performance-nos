# Challenge Performance NOS

Este proyecto contiene pruebas de performance para evaluar el endpoint `POST /products/add` utilizando K6. 

---

## Requisitos previos

- **Node.js** (versión 16 o superior)
- **npm**
- **K6** (herramienta para pruebas de carga)

Verifica que K6 esté instalado ejecutando:
```bash
k6 version
```
Si no está instalado, sigue las instrucciones según tu sistema operativo:

### **Instalación de K6 en macOS usando Homebrew**
1. Asegúrate de tener **Homebrew** instalado. Si no lo tienes, puedes instalarlo ejecutando:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Instala K6 con:
   ```bash
   brew install k6
   ```

### **Instalación de K6 en otros sistemas operativos**
Sigue las instrucciones en la [documentación oficial de K6](https://k6.io/open-source/).

--- 

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/NicoSalva/challenge-performance-nos.git
   cd challenge-performance-nos
   ```

2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
   ```

3. **Configura tu archivo `.env`:**
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```plaintext
   JWT_SECRET_KEY=7b5880f7-a781-4b39-9ceb-f8e3bfbce32d
   ```

---

## Ejecución de las Pruebas

Para ejecutar las pruebas de carga con K6:

1. Genera el token JWT y pásalo como variable de entorno:
   ```bash
   JWT_TOKEN=$(node scripts/generateJWT.js) npm run test:performance
   ```

2. Detalles del script:
   - Ejecuta dos escenarios de carga:
     - **50 TPS** durante un minuto.
     - **100 TPS** durante un minuto.

---

## Revisión de los archivos del proyecto

1. **Archivo `performanceTest.js`:** Contiene el script K6 para realizar las pruebas de carga.
2. **Archivo `generateJWT.js`:** Genera tokens JWT válidos utilizando la clave secreta configurada.
3. **Archivo `.env`:** Almacena la clave secreta para generar el JWT.
