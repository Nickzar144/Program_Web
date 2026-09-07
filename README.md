# 🍳 SaborDB — Recetario de Cocina

Frontend (HTML/CSS/JS) que muestra recetas, permite marcarlas como favoritas y recibe sugerencias mediante un formulario. Este documento define el diseño de la arquitectura backend y API REST que necesitará el proyecto.

## 📁 Estructura del proyecto

```
sabordb/
├── index.html
├── style.css
├── app.js
└── README.md
```

## 📋 Metadatos del proyecto

| Campo           | Valor                                       |
|-----------------|----------------------------------------------|
| Proyecto        | Recetario de Cocina (SaborDB)                |
| API utilizada   | TheMealDB API / API REST propia              |
| Tecnologías     | PHP, MySQL/MariaDB, Git, GitHub, JSON        |
| Materia         | INF240 - Programación Web                    |
| Plataforma      | Servidor Tecnoweb (Linux) / Localhost        |
| Estado          | ✔ Completado                                 |

## 1. Identifica tu recurso

El recurso principal del sistema es la **Receta**. Alrededor de él giran dos sub-recursos que dan soporte a la interactividad ya construida en el frontend:

- **Receta** — nombre, categoría, imagen, ingredientes y enlace a la fuente.
- **Favorito** — relación entre un usuario/sesión y una receta marcada mediante el botón "Me gusta".
- **Sugerencia** — receta propuesta por un usuario a través del formulario de sugerencias.

## 2. Diseña los endpoints (API REST)

Rutas CRUD para el recurso principal **Recetas**:

| Método | Ruta                  | Descripción                                |
|--------|-----------------------|----------------------------------------------|
| GET    | `/api/recetas`        | Lista todas las recetas guardadas             |
| GET    | `/api/recetas/{id}`   | Obtiene el detalle de una receta por su ID    |
| POST   | `/api/recetas`        | Crea una receta nueva                         |
| PUT    | `/api/recetas/{id}`   | Actualiza los datos de una receta existente   |
| DELETE | `/api/recetas/{id}`   | Elimina una receta por su ID                  |

Endpoints adicionales — Favoritos y Sugerencias:

| Método | Ruta                          | Descripción                                              |
|--------|-------------------------------|-------------------------------------------------------------|
| POST   | `/api/recetas/{id}/favorito`  | Alterna el estado de favorito de una receta                 |
| GET    | `/api/favoritos`              | Devuelve el total y el listado de recetas marcadas como favoritas |
| POST   | `/api/sugerencias`            | Recibe una sugerencia validada desde el formulario del sitio |

## 3. Bosqueja el JSON

**GET `/api/recetas`**
```json
{
  "status": "success",
  "data": [
    {
      "id": 52982,
      "nombre": "Spaghetti alla Carbonara",
      "categoria": "Italian",
      "imagen": "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
      "fuente_url": "https://www.themealdb.com/meal/52982",
      "ingredientes": ["Espagueti", "Huevo", "Panceta", "Queso parmesano"],
      "es_favorito": true
    },
    {
      "id": 52824,
      "nombre": "Beef Sunday Roast",
      "categoria": "Beef",
      "imagen": "https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg",
      "fuente_url": "https://www.themealdb.com/meal/52824",
      "ingredientes": ["Carne de res", "Papas", "Zanahoria", "Romero"],
      "es_favorito": false
    }
  ],
  "total_favoritos": 1
}
```

**POST `/api/sugerencias`**
```json
{
  "status": "success",
  "message": "La receta \"Pizza Margarita\" ha sido enviada correctamente.",
  "data": {
    "id": 101,
    "nombre": "Pizza Margarita",
    "categoria": "Pasta",
    "ingredientes_clave": "Harina, tomate, queso",
    "estado": "pendiente_revision"
  }
}
```

## 4. Elige un lenguaje

**Lenguaje elegido:** PHP, con base de datos MySQL/MariaDB.

**Justificación técnica:**
- Curva de aprendizaje baja y sintaxis cercana a JavaScript, lo que facilita mantener consistencia con el frontend ya construido.
- Integración nativa con MySQL, ideal para modelar las tablas `recetas`, `favoritos` y `sugerencias` con relaciones simples.
- Amplia disponibilidad de hosting compartido económico (cPanel, servidores tipo Tecnoweb), útil para desplegar un proyecto académico sin infraestructura compleja.
- Frameworks ligeros (Slim) o PHP nativo permiten construir una API REST en JSON con pocos archivos.
- Amplia documentación y comunidad, lo que agiliza la resolución de dudas durante el desarrollo.

**Estructura sugerida del backend:**
```
backend/
├── config/
│   └── db.php              # Conexión PDO a MySQL
├── models/
│   ├── Receta.php
│   ├── Favorito.php
│   └── Sugerencia.php
├── api/
│   ├── recetas.php         # GET, POST, PUT, DELETE /api/recetas
│   ├── favoritos.php       # GET /api/favoritos, POST /api/recetas/{id}/favorito
│   └── sugerencias.php     # POST /api/sugerencias
└── .htaccess                # Reescritura de rutas amigables /api/...
```

**Esquema de base de datos (simplificado):**
```sql
CREATE TABLE recetas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  categoria VARCHAR(80),
  imagen VARCHAR(255),
  fuente_url VARCHAR(255),
  ingredientes TEXT
);

CREATE TABLE favoritos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  receta_id INT NOT NULL,
  usuario_id VARCHAR(80) NOT NULL,
  FOREIGN KEY (receta_id) REFERENCES recetas(id)
);

CREATE TABLE sugerencias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  categoria VARCHAR(80) NOT NULL,
  ingredientes_clave TEXT NOT NULL,
  estado VARCHAR(30) DEFAULT 'pendiente_revision',
  creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 5. Documenta y versiona

Estrategia de versionado con Git y GitHub:

```bash
# Inicializar repositorio (si aún no existe)
git init

# Agregar y confirmar los cambios
git add .
git commit -m "Diseño inicial del backend: recursos, endpoints y JSON de ejemplo"

# Renombrar la rama principal
git branch -M main

# Conectar con el repositorio remoto
git remote add origin <URL-del-repositorio>

# Subir los cambios
git push -u origin main
```

---
Fuente de datos de referencia: [TheMealDB](https://www.themealdb.com/)
