### README: Solución al Challenge de Performance con K6

# Challenge Performance NOS
Este proyecto contiene pruebas de carga utilizando K6 para evaluar el comportamiento de endpoints específicos. Se realizaron escenarios con **50 TPS** y **100 TPS** por un minuto, cumpliendo los requerimientos especificados en el challenge.

---

## Requerimientos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu máquina:

- **Node.js** (versión 16 o superior)
- **npm** (Node Package Manager)
- **K6** (Herramienta para pruebas de carga)

---

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/NicoSalva/challenge-performance-nos.git
   cd challenge-performance-nos
   ```

2. **Instala las dependencias necesarias:**
   ```bash
   npm install
   ```

3. **Configura tu archivo `.env`:**
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```plaintext
   JWT_SECRET_KEY=7b5880f7-a781-4b39-9ceb-f8e3bfbce32d
   ```
   Esta clave es utilizada para generar tokens JWT válidos requeridos por los endpoints.

---

## Generar el Token JWT

Se utiliza un script de Node.js para generar un token JWT dinámico antes de las pruebas. Esto asegura que cada solicitud esté autenticada.

1. Ejecuta el script para generar el JWT:
   ```bash
   node scripts/generateJWT.js
   ```

   Esto imprimirá un token en la consola. Alternativamente, puedes ejecutar las pruebas directamente y el token será generado automáticamente (ver el siguiente paso).

---

## Ejecución de las Pruebas

El proyecto evalúa el comportamiento del endpoint `POST /products/add` en dos escenarios de carga. Cada prueba se ejecuta con un JWT válido generado dinámicamente.

1. **Ejecutar las pruebas con 50 y 100 TPS:**
   ```bash
   JWT_TOKEN=$(node scripts/generateJWT.js) k6 run tests/performanceTest.js
   ```

   Aquí:
   - El comando `node scripts/generateJWT.js` genera un JWT.
   - `JWT_TOKEN` pasa el token generado como variable de entorno a K6.
   - El script `performanceTest.js` ejecuta las pruebas.

---

## Detalles de mi Solución

Para esta solución, consideré las siguientes buenas prácticas:

1. **Uso de JWT:**  
   El token se genera dinámicamente utilizando un script Node.js antes de cada ejecución. Esto asegura que no se exponga una clave sensible en el código fuente.

2. **Pruebas de Performance:**  
   Configuré dos escenarios:
   - 50 TPS (transacciones por segundo) durante un minuto.
   - 100 TPS durante un minuto.

   Cada solicitud al endpoint utiliza un `title` único para evitar conflictos y cumple con el payload requerido por la API.

3. **Validaciones:**  
   - Verificación del código de estado (200).
   - Validación de que el `title` de la respuesta coincide con el enviado.

4. **Escalabilidad:**  
   La solución puede adaptarse fácilmente a diferentes escenarios de carga y endpoints gracias a la modularidad del código.

---

## Conclusiones y Resultados

- **Resultados de la prueba:** El comportamiento del endpoint fue evaluado con dos niveles de carga y validaciones automatizadas. Esto asegura que el sistema pueda manejar las transacciones especificadas de manera eficiente.
- **Reporte:** Se pueden generar reportes adicionales mediante herramientas externas si se desea entregar información detallada a personas no técnicas.

---
