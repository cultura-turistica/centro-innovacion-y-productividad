# Catálogo de Componentes UI / Interactivos

Este catálogo documenta los componentes globales y modulares construidos para la arquitectura de cursos Data-Driven. Todos estos componentes deben alimentarse mediante *props* y **nunca** deben contener texto o datos "quemados" (hardcoded). 

Antes de crear un nuevo componente para una dinámica de curso, revisa esta lista para verificar si uno existente puede cumplir la función.

---

## 1. Componentes de Estructura (Layouts)

### `CourseSyllabusLayout.jsx`
Layout para la página de inicio/temario del curso.
- **Props:** 
  - `data`: Objeto con `{ header, syllabus, sidebar }` (o `modules` en vez de syllabus).
  - `themeColor`, `themeBgColor`, `selectionColor` (para personalización).
- **Uso:** Orquestar el catálogo, la presentación del instructor y el listado de módulos desbloqueados/bloqueados.

### `CourseModuleLayout.jsx`
Layout envolvente para cada módulo de estudio.
- **Props:**
  - `themeColor`: Color principal (Hex)
  - `headerData`: `{ eyebrow, title, description }`
  - `podcastData`: `{ title, subtitle, audioSrc, transcript }`
  - `children`: Contenido interno dinámico (ejercicios, grillas).
- **Uso:** Renderiza automáticamente el encabezado (hero) y el reproductor de podcast unificados para cada módulo.

---

## 2. Componentes de Despliegue de Información

### `InfoBlock.jsx`
Bloque de texto/párrafos simple o con diseño visual avanzado.
- **Props:**
  - `data`: Objeto con `{ title, paragraphs, theme }`.
  - `theme`: Permite pasar estilos de gradientes, bordes, sombras y colores de iconos (ej. `{ gradient: 'from-blue-500 to-cyan-500' }`).
- **Uso:** Párrafos de introducción y teoría.

### `ComparisonBlock.jsx`
Compara dos columnas de texto (típicamente "Antes" vs "Después" o "Tradicional" vs "Comunitario").
- **Props:**
  - `data`: Array de párrafos o comparaciones.
  - Opciones de tema: `leftTheme` y `rightTheme`.
- **Uso:** Contraste de paradigmas.

### `ComparisonCards.jsx`
Tarjetas interactivas (flip cards o expansibles) para mostrar dos enfoques u opciones.
- **Props:**
  - `data`: Objeto `{ badge, items }`.

### `GridBlock.jsx`
Despliega información en tarjetas agrupadas en rejilla (Grid de 1, 2 o 3 columnas).
- **Props:**
  - `data`: `{ badge, title, description, items }`.
  - Cada item puede tener icono, título, color de texto y color de fondo.
- **Uso:** Listado de Dimensiones, Pilares, "Los 5 Sentidos", etc.

### `CaseBlock.jsx`
Bloque robusto para presentar perfiles o Casos de Estudio con un enfoque de "Persona" y aciertos vs. errores.
- **Props:**
  - `data`: `{ title, label, target, items, decision }`. `items` tiene dolores/necesidades, y `decision` incluye un análisis de mala vs. buena opción.
- **Uso:** Identificación de clientes objetivo, análisis de escenarios (Ej. "Turista Familiar").

### `StepList.jsx`
Visualizador de metodologías en formato de pasos lógicos y progresivos.
- **Props:**
  - `data`: Objeto con `{ title, steps }`. 
  - `themeColor`, `themeBg`.
- **Uso:** Método S.M.A.R.T, Protocolos de Diseño en fases.

---

## 3. Dinámicas y Ejercicios Interactivos (Juegos)

### `QuizExercise.jsx`
Ejercicio de preguntas (opción múltiple) con validación automática y feedback explicativo.
- **Props:**
  - `data`: `{ badge, title, cases (preguntas), success (mensaje final) }`.
  - `themeColor`.
- **Uso:** Autoevaluación al final de ciertos módulos.

### `MatchGame.jsx`
Dinámica de arrastrar/seleccionar que vincula *Talentos o Roles* con *Estaciones de Trabajo*.
- **Props:**
  - `data`: `{ rolesTitle, zonesTitle, roles, zones, success }`.
- **Uso:** Ejercicio de roles comunitarios (vocero, financiero, guía).

### `PairMatchGame.jsx`
Juego de emparejamiento conceptual (Concepto vs. Definición).
- **Props:**
  - `data`: `{ title, description, pairs }`.
- **Uso:** Reto SMART (enlazar las letras S, M, A, R, T con sus ejemplos concretos).

### `NodeChain.jsx`
Dinámica para activar "nodos" o eslabones lógicos en cadena secuencial.
- **Props:**
  - `data`: `{ badge, title, description, nodes, success }`.
- **Uso:** Entender el encadenamiento logístico y cómo si falla un eslabón, falla todo.

---

## 4. Navegación

### `ModuleNavigation.jsx`
Botones obligatorios de pie de página para moverse entre módulos.
- **Props:**
  - `prevUrl` / `nextUrl`: URLs absolutas a módulos anterior/siguiente.
  - `courseUrl`: URL absoluta al temario (Syllabus).
  - `themeColor`.
- **Uso:** Siempre al final de cada página de módulo (fuera o dentro del Layout, pero común a la base del curso).
