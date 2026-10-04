# 🍳 SaborDB — Guía de Estilo

Versión 1.0 · Octubre 2026

## 1. Principios
- **Apetitoso:** la foto del plato es la protagonista.
- **Legible:** contraste mínimo WCAG 2.1 AA en todo el texto.
- **Simple:** una acción principal por zona de pantalla.

## 2. Color

| Rol | Token | HEX |
|---|---|---|
| Primario | `--color-primary` | `#C2410C` |
| Primario hover | `--color-primary-hover` | `#9A3412` |
| Secundario | `--color-secondary` | `#2C3E50` |
| Tinte | `--color-tint` | `#FDE8D7` |
| Fondo | `--color-bg` | `#F8F5F0` |
| Superficie | `--color-surface` | `#FFFFFF` |
| Texto | `--color-text` | `#1F2937` |
| Texto secundario | `--color-text-muted` | `#4B5563` |
| Éxito | `--color-success` | `#15803D` |
| Alerta | `--color-warning` | `#B45309` |
| Error / alérgeno | `--color-danger` | `#B91C1C` |
| Información | `--color-info` | `#1D4ED8` |

## 3. Tipografía
- Títulos: **Poppins** (600, 700)
- Cuerpo: **Inter** (400, 500, 600)
- Escala: razón 1.25 sobre base 16 px

| Nivel | Tamaño | Peso | Interlineado |
|---|---|---|---|
| H1 | 1.953rem | 700 | 1.2 |
| H2 | 1.563rem | 600 | 1.3 |
| H3 | 1.25rem | 600 | 1.35 |
| Body | 1rem | 400 | 1.6 |
| Caption | 0.8rem | 500 | 1.5 |

## 4. Tokens CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap');

:root {
  /* Color */
  --color-primary: #C2410C;
  --color-primary-hover: #9A3412;
  --color-secondary: #2C3E50;
  --color-tint: #FDE8D7;
  --color-bg: #F8F5F0;
  --color-surface: #FFFFFF;
  --color-text: #1F2937;
  --color-text-muted: #4B5563;
  --color-success: #15803D;
  --color-warning: #B45309;
  --color-danger: #B91C1C;
  --color-info: #1D4ED8;

  /* Tipografía */
  --font-heading: 'Poppins', 'Segoe UI', sans-serif;
  --font-body: 'Inter', 'Segoe UI', sans-serif;
  --fs-h1: 1.953rem;
  --fs-h2: 1.563rem;
  --fs-h3: 1.25rem;
  --fs-body: 1rem;
  --fs-caption: 0.8rem;

  /* Espaciado y forma */
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --radius: 8px;
  --shadow-card: 0 4px 6px rgba(0, 0, 0, 0.1);
}

body { font-family: var(--font-body); background: var(--color-bg); color: var(--color-text); line-height: 1.6; }
h1, h2, h3 { font-family: var(--font-heading); }
h1 { font-size: var(--fs-h1); line-height: 1.2; }
h2 { font-size: var(--fs-h2); line-height: 1.3; }
h3 { font-size: var(--fs-h3); line-height: 1.35; }
.caption { font-size: var(--fs-caption); color: var(--color-text-muted); }

.btn { background: var(--color-primary); color: #fff; border-radius: 4px; font-weight: 600; }
.btn:hover { background: var(--color-primary-hover); }
:focus-visible { outline: 3px solid var(--color-info); outline-offset: 2px; }
```

## 5. Jerarquía de la vista Home
1. Título + buscador con CTA primario
2. Tarjetas de receta (foto, nombre, categoría, tiempo)
3. Filtros, etiquetas, favoritos, footer

## 6. Accesibilidad
- Contraste mínimo 4.5:1 en texto normal y 3:1 en texto grande.
- Foco visible en todos los elementos interactivos.
- Color nunca como único indicador de estado (icono + texto).
- Atributos `alt` descriptivos y coherentes con la imagen.