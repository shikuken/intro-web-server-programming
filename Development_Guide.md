# Guía completa: Construcción y Diseño de APIs

---

## Tabla de Contenido

1. Objetivos específicos
2. Programación web del lado del servidor
3. ¿Qué es una API?
4. Estructura de una URL
5. REST: El estándar más usado
6. Códigos HTTP e idempotencia
7. Pruebas de APIs (Postman e Insomnia)
8. Instalación y uso de Postman
9. Middleware
10. Variantes a REST: GraphQL
11. Patrón arquitectónico BFF
12. Mini aplicación de tareas (API REST en Node.js)
13. Entregable final
14. Conclusión

---

## Objetivos específicos

* Comprender qué es la programación del lado del servidor y su papel en el desarrollo web.
* Entender el concepto de API y su importancia en la comunicación entre aplicaciones.
* Reconocer los componentes fundamentales de una URL y su estructura.
* Identificar y aplicar los principios de REST, los verbos HTTP y la idempotencia.
* Aprender a realizar pruebas de endpoints mediante herramientas profesionales como Postman o Insomnia.
* Implementar una API REST básica con persistencia en memoria (usando arreglos en Node.js).
* Desarrollar habilidades para documentar y validar APIs.

---

## 1. Programación web del lado del servidor

La programación web del lado del servidor consiste en el conjunto de operaciones y lógicas que permiten generar, procesar y responder solicitudes enviadas por un cliente (como un navegador o aplicación móvil). Este código normalmente se ejecuta en un servidor remoto, no en el dispositivo del usuario.

### Flujo de comunicación básico

1. El cliente envía una solicitud HTTP al servidor (por ejemplo, `GET /productos`).
2. El servidor procesa esa solicitud, consulta una base de datos o ejecuta cálculos.
3. El servidor devuelve una respuesta (por ejemplo, una lista de productos en formato JSON).

### Ejemplo práctico

Supón que visitas una tienda en línea:

* Entras a `https://mitienda.com/products`.
* Tu navegador envía una solicitud al servidor.
* El servidor obtiene los productos de su base de datos.
* Envía una respuesta con todos los productos disponibles.

Este proceso ocurre en milisegundos y es la base de todo sistema web moderno.

---

## 2. ¿Qué es una API?

Una **API (Application Programming Interface)** es una interfaz que permite que dos aplicaciones distintas se comuniquen. Su propósito es definir cómo deben estructurarse las solicitudes y respuestas para compartir información.

### Ejemplo cotidiano

Cuando usas una aplicación de transporte como Uber:

* La app de tu celular pide al servidor de Uber (mediante una API) los conductores disponibles cerca de ti.
* El servidor responde con datos en formato JSON que la app muestra en el mapa.

### Tipos de APIs

* **APIs públicas:** Abiertas para desarrolladores (ejemplo: API de Google Maps).
* **APIs privadas:** Usadas internamente por empresas.
* **APIs de terceros:** Integraciones entre plataformas (Stripe, PayPal, etc.).

---

## 3. Estructura de una URL

Cada endpoint dentro de una API tiene una dirección única o **URL (Uniform Resource Locator)**. Esta dirección sigue una estructura lógica.

Ejemplo:

```
https://api.mitienda.com/v1/products/45
```

| Elemento | Ejemplo | Descripción |
| --------- | -------- | ------------ |
| **Protocolo** | `https://` | Define el método de comunicación seguro (HTTP/HTTPS). |
| **Dominio** | `api.mitienda.com` | Dirección del servidor donde se aloja la API. |
| **Versión** | `/v1/` | Permite manejar cambios futuros sin afectar versiones anteriores. |
| **Recurso** | `products` | Entidad que se desea consultar. |
| **Identificador** | `/45` | ID único del recurso. |

---

## 4. REST: El estándar más usado

**REST (Representational State Transfer)** es un estilo de arquitectura para desarrollar APIs que aprovecha los métodos del protocolo HTTP.

### Verbos HTTP

| Verbo | Acción | Ejemplo | Descripción |
| ------ | ------- | -------- | ------------ |
| **GET** | Leer | `/tasks` | Obtiene una lista de tareas. |
| **POST** | Crear | `/tasks` | Crea una nueva tarea. |
| **PUT** | Reemplazar | `/tasks/1` | Actualiza todos los campos de una tarea. |
| **PATCH** | Modificar | `/tasks/1` | Actualiza parcialmente una tarea. |
| **DELETE** | Eliminar | `/tasks/1` | Borra una tarea específica. |

### Códigos de estado HTTP

| Código | Significado | Descripción |
| ------- | ------------ | ------------ |
| **100-199** | Informativo | La solicitud está siendo procesada. |
| **200-299** | Éxito | El servidor procesó correctamente la solicitud. |
| **300-399** | Redirección | El recurso ha cambiado de ubicación. |
| **400-499** | Error del cliente | La solicitud es incorrecta o incompleta. |
| **500-599** | Error del servidor | Fallo interno del servidor. |

---

## 5. Pruebas de APIs: Postman e Insomnia

Antes de conectar una API con un frontend, debemos probar su funcionamiento.

### Por qué probar

* Para validar que los endpoints funcionan correctamente.
* Para verificar los datos enviados y recibidos.
* Para analizar el tiempo de respuesta del servidor.

### Postman

Postman es una herramienta gratuita que permite enviar solicitudes HTTP y visualizar las respuestas.

### Insomnia

Es una alternativa más ligera, ideal para desarrolladores que prefieren un entorno más simple.

---

## 6. Cómo instalar y usar Postman

### Instalación

1. Visita [https://www.postman.com/downloads/](https://www.postman.com/downloads/).
2. Descarga la versión para tu sistema operativo (Windows, macOS o Linux).
3. Instala y crea una cuenta gratuita.

### Primeros pasos

1. Abre Postman y selecciona **New → HTTP Request**.
2. Escribe tu endpoint, por ejemplo: `http://localhost:3000/tasks`.
3. Selecciona el método (GET, POST, PUT, DELETE).
4. Si es POST o PUT, ve a la pestaña **Body → raw → JSON** e ingresa:

```json
{
  "title": "Aprender APIs",
  "description": "Usar Postman para probar endpoints"
}
```

5. Haz clic en **Send** y observa la respuesta.

---

## 7. Middleware

Un **middleware** es una función intermedia entre la solicitud y la respuesta que puede modificar, validar o registrar información antes de que llegue al controlador principal.

Ejemplo en Express:

```js
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);
```

---

## 8. Alternativas a REST: GraphQL

**GraphQL** es una tecnología moderna que permite al cliente especificar exactamente qué datos necesita. En lugar de hacer múltiples solicitudes, GraphQL puede obtener toda la información en una sola.

---

## 9. Patrón arquitectónico BFF (Backend for Frontend)

**BFF** propone crear un backend especializado para cada tipo de cliente (web, móvil, IoT, etc.), adaptando los datos según las necesidades del dispositivo.

---

## 10. Mini aplicación de tareas (API REST en Node.js)

### Estructura del proyecto

```
intro-web-server-programming/
├── index.js
├── package.json
└── .gitignore
```

### Código del servidor básico

```js
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World desde Express');
});

// Ejemplo: CRUD de tareas
let tasks = [];
let nextId = 1;

app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });
  const newTask = { id: nextId++, title, description, status: 'PENDING' };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
});

app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  const { title, description, status } = req.body;
  task.title = title || task.title;
  task.description = description || task.description;
  task.status = status || task.status;
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: 'Task deleted successfully' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
```

---

## 11. Entregable

1. Realizar un **Fork** del repositorio base proporcionado.
2. Implementar los endpoints de la API de tareas (Actualizar el index.js).
3. Probar la API usando Postman o Insomnia.
4. Subir un video con duración no mayor a 5 min mostrando:
   - La ejecución de la API.
   - Las pruebas de los métodos POST, GET, PUT y DELETE.
   - Explicación del código y estructura.
   - Explicación de la guía y su utilidad
5. Readme con: Nombre, Código enlace al video explicativo.

---

## Conclusión

Esta guía presenta los fundamentos de la programación del lado del servidor y las bases para construir una API REST con Express. Permite comprender la estructura mínima para levantar un servidor, crear endpoints, y probarlos con herramientas profesionales.

