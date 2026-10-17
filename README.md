# 🍳 SaborDB — Recetario de Cocina (Versión React - Fase 1)

Aplicación Web de Página Única (SPA) construida con React. Este proyecto sirve como introducción práctica al desarrollo basado en componentes, permitiendo mostrar un catálogo de recetas y gestionar interactividad básica mediante el estado local.

## 📋 Metadatos del proyecto

| Campo | Valor | 
| ----- | ----- | 
| Proyecto | Recetario de Cocina (SaborDB - React) | 
| Fase actual | Fase 1: Componentes estáticos y Estado local | 
| Tecnologías | React, JSX, Vite, pnpm | 
| Conceptos clave | Componentes funcionales, `props`, `useState` | 

## 📁 Estructura inicial del proyecto

Esta es la estructura de archivos actual del proyecto, generada con Vite:

```text
.
├── eslint.config.js         # Configuración de linting
├── index.html               # Plantilla base y punto de entrada
├── package.json             # Dependencias y scripts del proyecto
├── pnpm-lock.yaml           # Archivo de bloqueo de versiones de pnpm
├── public/                  # Archivos estáticos públicos
│   ├── favicon.svg
│   └── icons.svg
├── README.md                # Documentación del proyecto
├── src/                     # Código fuente de la aplicación
│   ├── App.css              # Estilos específicos del componente App
│   ├── App.jsx              # Componente principal / Contenedor
│   ├── assets/              # Recursos gráficos e imágenes
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── Header.jsx           # Componente de cabecera
│   ├── index.css            # Estilos globales
│   └── main.jsx             # Punto de anclaje de React al DOM
└── vite.config.js           # Configuración del empaquetador Vite
```

## 🚀 Conceptos aplicados en esta fase

En esta iteración del proyecto, estamos aislando la interfaz de usuario para entender cómo React dibuja la pantalla sin depender de un backend:

1. **Jerarquía de Componentes:** División de la interfaz en piezas reutilizables (como el componente padre `App` y componentes hijos como `Header`).

2. **Paso de propiedades (`props`):** Transferencia de datos desde el catálogo principal hacia cada tarjeta o componente individual.

3. **Manejo del Estado (`useState`):** Implementación de interactividad en cada tarjeta para marcar las recetas como "Favoritas" (Me gusta / No me gusta) de forma independiente.

4. **Renderizado de Listas:** Uso del método `.map()` de JavaScript para iterar sobre un arreglo de datos estáticos y generar elementos dinámicamente.

## 💻 Instrucciones de instalación y ejecución

Para correr este proyecto en tu entorno local, asegúrate de tener Node.js y `pnpm` instalados, luego sigue estos pasos:

1. **Clonar el repositorio** (o descargar los archivos):

   ```bash
   git clone <url-del-repositorio>
   cd sabordb-react
   ```

2. **Instalar las dependencias:**

   ```bash
   pnpm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   pnpm run dev
   ```

4. **Ver la aplicación:**
   Abre tu navegador e ingresa a `http://localhost:5173`.

*Nota: Este proyecto está en fase de desarrollo frontend puro. La conexión con la API REST y la base de datos se implementará en fases posteriores.*
