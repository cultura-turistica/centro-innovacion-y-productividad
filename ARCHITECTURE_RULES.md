# Reglas de Arquitectura - CIP Next

Este documento define las reglas arquitectónicas y convenciones obligatorias para el desarrollo del proyecto `cip-next`. Su cumplimiento es estricto para garantizar la mantenibilidad, consistencia y escalabilidad de la aplicación.

## 0. Gestor de Paquetes
**REGLA ESTRICTA:** Queda totalmente prohibido el uso de `npm` o `yarn`. Todo comando de instalación o ejecución de scripts debe utilizar **`pnpm`** obligatoriamente.

## 0.1 Extracción de Contenido (Legacy vs Nuevo)
**REGLA ESTRICTA:** Cuando se solicite extraer, rescatar o jalar información desde la carpeta del proyecto antiguo (`repo-github`), se debe extraer EXCLUSIVAMENTE la información temática, textos y estructura lógica. Queda **ESTRICTAMENTE PROHIBIDO** copiar, heredar o usar de inspiración cualquier fragmento de código (React, CSS, estructuras de componentes o estilos en línea) del repositorio antiguo, a menos que el usuario lo solicite de manera explícita y directa. Todo código en `cip-next` debe nacer 100% puro y desde cero.

## 1. Organización de Archivos Estáticos (Assets)

**REGLA ESTRICTA:** TODAS las imágenes, archivos de audio, vídeos y configuraciones de temas (variables globales de estilo, iconos base) DEBEN ubicarse obligatoriamente dentro de las carpetas organizadas de `assets`. Queda totalmente prohibido dejar recursos multimedia dispersos en carpetas de componentes o en la raíz del proyecto.

### Estructura de Assets
El proyecto cuenta con dos ubicaciones permitidas dependiendo del caso de uso en Next.js:

1. **`src/assets/`**: Para recursos que se importarán directamente en los componentes (vía Webpack/Turbopack).
   - `/src/assets/images/`: Ilustraciones, logos e imágenes procesadas por el bundler.
   - `/src/assets/audios/`: Archivos de sonido de interfaz o multimedia interactiva.
   - `/src/assets/themes/`: Archivos de configuración visual, tokens de diseño base o SVGs crudos.

2. **`public/assets/`**: Para archivos estáticos pesados que deben ser accesibles públicamente a través de una URL absoluta.
   - `/public/assets/images/`: Fotos pesadas o assets que no requieren procesamiento.
   - `/public/assets/audios/`: Pistas de audio largas o podcasts.
   - `/public/assets/docs/`: PDFs u otros documentos descargables.

## 2. Componentes (UI / UX)
- Los componentes deben ser modulares, utilizando Tailwind CSS puro sin estilos en línea (`style={{...}}`).
- Los componentes de interfaz se dividen lógicamente por dominio o página (ej. `home/`, `layout/`, `ui/`).
- Mantener la estética minimalista, espacios en blanco y el uso de iconos sutiles (`lucide-react`).

## 3. Enrutamiento y Navegación de Cursos
**REGLA ESTRICTA:** Para garantizar una experiencia pedagógica óptima y código escalable, todo curso debe seguir esta estructura lógica:
1. **Página de Temario (Syllabus):** Los enlaces del catálogo principal (`/academia`) NUNCA deben apuntar directamente al primer módulo. Deben apuntar a la raíz del curso (`/academia/cursos/[slug]`), donde existirá un temario interactivo listando los módulos.
2. **Navegación entre Módulos:** Todo módulo (`modulo-N`) debe incorporar obligatoriamente el componente `<ModuleNavigation />` al final de su contenido principal.
3. **Lógica Matemática del ModuleNavigation:**
   - **`prevModule`**: Si `N > 1`, apunta a `modulo-(N-1)`. Si `N === 1`, se pasa `null`.
   - **`nextModule`**: Si existe un módulo posterior, apunta a `modulo-(N+1)`. Si es el final, se pasa `null`.
   - **`courseUrl`**: Siempre apunta a la página de Temario del curso actual (ej. `/academia/cursos/turismo-comunitario`).

*(Este archivo se irá actualizando y extendiendo conforme el proyecto escale).*

## 4. Arquitectura Data-Driven (Separación Estricta de Datos y UI)
**REGLA DE ORO (INAMOVIBLE):** Para garantizar la escalabilidad a múltiples cursos y evitar el código espagueti, queda terminantemente prohibido quemar datos (textos de módulos, opciones, preguntas, configuraciones de color específicas) dentro de los componentes de UI.

1. **Capa de Datos (Data Layer):** Toda la información y configuración de los cursos debe residir en archivos estáticos `.js` dentro de `src/data/cursos/[curso-slug]/[modulo-slug].js`.
2. **Componentes Interactivos Globales:** Cualquier mecánica de juego, simulador, tarjetas interactuables, drag & drop, etc., DEBE ser un componente genérico y agnóstico ubicado en `src/components/ui/interactivos/`.
3. **Inyección por Props:** Las páginas (ej. `modulo-5/page.jsx`) actuarán únicamente como orquestadores: importarán los datos del Data Layer y se los pasarán a los componentes genéricos a través de *props*.

## 5. Catálogo de Componentes de UI
**REGLA ESTRICTA:** Antes de diseñar, desarrollar o proponer nuevos componentes visuales o dinámicas de juego interactivo para módulos futuros, DEBES consultar el documento [COMPONENTS_CATALOG.md](file:///Users/cultur/.gemini/antigravity/scratch/cip-next/src/components/ui/interactivos/COMPONENTS_CATALOG.md). 
Si un componente documentado en el catálogo cumple con el propósito de la dinámica requerida, SE DEBE REUTILIZAR pasándole los `data` correspondientes. Solo si la mecánica del curso es enteramente distinta y no cubierta por el catálogo, se autoriza crear uno nuevo y agregarlo al catálogo.

## 6. Arquitectura Híbrida para Laboratorios de Datos (Data Labs)
El desarrollo e integración de cualquier "Laboratorio de Datos" (Scrollytelling, Mapas Interactivos, Infografías Anatómicas) dentro de `cip-next` debe regirse OBLIGATORIAMENTE por los siguientes tres pilares de escalabilidad para garantizar el rendimiento masivo:

1. **CACHÉ Y CDN (Orquestador Estático):** Todo archivo `page.jsx` de un laboratorio debe ser un React Server Component (RSC) puro y estático. No se permite el uso de funciones dinámicas sin caché. La carcasa semántica será servida desde el Edge Network.
2. **OFFLOADING DE DATOS (Fetching en el Cliente):** Queda prohibido importar archivos JSON pesados directamente en los Server Components. Todo dataset denso debe alojarse en la carpeta estática `/public/data/...` y ser consumido asíncronamente (ej. `fetch`) directamente desde un componente de cliente (`"use client"`).
3. **HIDRATACIÓN PROGRESIVA (Code Splitting):** Toda librería de visualización pesada (`Recharts`, SVGs interactivos, Framer Motion si es imprescindible) debe ser importada dinámicamente en el orquestador usando `next/dynamic` con `{ ssr: false }`.

**Exigencias Visuales (SVGs e Infografías):**
- **Gestión SVG (CERO CÓDIGO BASURA):** Queda estrictamente prohibido incrustar SVGs gigantes y monolíticos con miles de líneas de código dentro del componente de React. Si el gráfico es interactivo, debe modularizarlo limpiamente o cargarlo de forma eficiente (ej. como imagen `img` interactuando con overlays invisibles o importación SVG controlada).
- **Interactividad Nativa:** Los hovers, clics y transiciones deben resolverse EXCLUSIVAMENTE con clases nativas de Tailwind CSS (`hover:`, `group-hover:`, `transition-all`, etc.). Cero librerías externas de animación cuando no sea estrictamente necesario para la visualización de datos.
- **Data-Driven Puro:** Todos los textos descriptivos deben ser extraídos a un diccionario estático en `/src/data/laboratorios/...`. El componente visual solo recibe la información, no la almacena.

## MAPA DE INFRAESTRUCTURA (ÁRBOL DE DIRECTORIOS)

```bash
/Users/cultur/.gemini/antigravity/scratch/repo-github/src
├── app
│   ├── academia
│   │   ├── cursos
│   │   │   ├── calculadora-costeo
│   │   │   │   └── page.jsx
│   │   │   ├── diseno-producto
│   │   │   │   ├── certificacion
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-1
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-2
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-3
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-4
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-5
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-6
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-7
│   │   │   │   │   └── page.jsx
│   │   │   │   └── page.jsx
│   │   │   ├── experiencias-privadas
│   │   │   │   ├── certificacion
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-1
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-2
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-3
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-4
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-5
│   │   │   │   │   └── page.jsx
│   │   │   │   └── page.jsx
│   │   │   ├── fotografia
│   │   │   │   ├── certificacion
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-1
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-2
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-3
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-4
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-5
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-6
│   │   │   │   │   └── page.jsx
│   │   │   │   └── page.jsx
│   │   │   ├── marca
│   │   │   │   ├── certificacion
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-1
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-2
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-3
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-4
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── modulo-5
│   │   │   │   │   └── page.jsx
│   │   │   │   └── page.jsx
│   │   │   └── turismo-comunitario
│   │   │       ├── certificacion
│   │   │       │   └── page.jsx
│   │   │       ├── modulo-1
│   │   │       │   └── page.jsx
│   │   │       ├── modulo-2
│   │   │       │   └── page.jsx
│   │   │       ├── modulo-3
│   │   │       │   └── page.jsx
│   │   │       ├── modulo-4
│   │   │       │   └── page.jsx
│   │   │       ├── modulo-5
│   │   │       │   └── page.jsx
│   │   │       ├── modulo-6
│   │   │       │   └── page.jsx
│   │   │       └── page.jsx
│   │   └── page.jsx
│   ├── api
│   │   └── certificates
│   │       └── generate
│   │           └── route.js
│   ├── centro-de-pensamiento
│   │   └── page.jsx
│   ├── globals.css
│   ├── laboratorio
│   │   └── page.jsx
│   ├── laboratorios
│   │   ├── anatomia-del-turista
│   │   │   └── page.jsx
│   │   ├── carbono
│   │   │   └── page.jsx
│   │   ├── sae-colombia
│   │   │   └── page.jsx
│   │   └── tolima
│   │       └── page.jsx
│   ├── layout.jsx
│   └── page.jsx
├── components
│   ├── academia
│   │   ├── AudioPodcast.jsx
│   │   ├── CourseCard.jsx
│   │   ├── CourseCatalog.jsx
│   │   ├── ModuleNavigation.jsx
│   │   └── curso1
│   │       ├── modulo1
│   │       │   ├── InteractivePillars.jsx
│   │       │   ├── ModuleHeader.jsx
│   │       │   └── ReflectionTabs.jsx
│   │       ├── modulo2
│   │       ├── modulo3
│   │       └── modulo4
│   ├── home
│   │   ├── AboutSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── OrgChartSection.jsx
│   │   └── PillarsSection.jsx
│   ├── laboratorio
│   │   ├── LabCatalog.jsx
│   │   └── ResearchCard.jsx
│   ├── layout
│   │   ├── CourseCertificationLayout.jsx
│   │   ├── CourseModuleLayout.jsx
│   │   ├── CourseSyllabusLayout.jsx
│   │   └── Navbar.jsx
│   ├── pensamiento
│   │   └── PublicationCard.jsx
│   └── ui
│       ├── Academia
│       │   └── CalculadoraCosteo
│       │       └── CalculadoraCosteo.jsx
│       ├── DataLab
│       │   ├── Anatomia
│       │   │   ├── AnatomiaInteractiveClient.jsx
│       │   │   ├── AnatomiaNoSSRWrapper.jsx
│       │   │   ├── AnatomyCard.jsx
│       │   │   ├── AnatomyNode.jsx
│       │   │   ├── RegionPillar.jsx
│       │   │   └── SocioMatrixRow.jsx
│       │   ├── Carbono
│       │   │   ├── CarbonoNoSSRWrapper.jsx
│       │   │   ├── CarbonoSandbox.jsx
│       │   │   └── CarbonoScrollytelling.jsx
│       │   ├── SaeColombia
│       │   │   ├── SaeNoSSRWrapper.jsx
│       │   │   └── SaeScrollytelling.jsx
│       │   ├── Scrollyteller.jsx
│       │   └── Tolima
│       │       ├── TolimaMap.jsx
│       │       ├── TolimaMapWrapper.jsx
│       │       └── TolimaScrollytelling.jsx
│       ├── EChartsCore.jsx
│       └── interactivos
│           ├── ActionAccordion.jsx
│           ├── ArchetypeMatcher.jsx
│           ├── ArtQuote.jsx
│           ├── AudienceSelector.jsx
│           ├── AudioPodcast.jsx
│           ├── BeforeAfterSlider.jsx
│           ├── BottleneckSimulator.jsx
│           ├── COMPONENTS_CATALOG.md
│           ├── CameraSimulator.jsx
│           ├── CaseBlock.jsx
│           ├── CaseStudyViewer.jsx
│           ├── CertificateGenerator.jsx
│           ├── ColorPsychologyLab.jsx
│           ├── ComparisonBlock.jsx
│           ├── ComparisonCards.jsx
│           ├── CourseEvaluation.jsx
│           ├── DecisionSimulator.jsx
│           ├── EmpathyMap.jsx
│           ├── FeatureImage.jsx
│           ├── GapMatrix.jsx
│           ├── GridBlock.jsx
│           ├── InfoBlock.jsx
│           ├── InteractiveCaseStudy.jsx
│           ├── InteractivePillars.jsx
│           ├── InteractiveVectorScene.jsx
│           ├── InterviewSimulator.jsx
│           ├── MatchGame.jsx
│           ├── MatrizPriorizacion.jsx
│           ├── MentorGuide.jsx
│           ├── ModuleHero.jsx
│           ├── ModuleNavigation.jsx
│           ├── NodeChain.jsx
│           ├── PairMatchGame.jsx
│           ├── PhoneMockupBlock.jsx
│           ├── PhotoGallery.jsx
│           ├── PhotoHero.jsx
│           ├── ProductSheet.jsx
│           ├── QuizExercise.jsx
│           ├── ReflectionTabs.jsx
│           ├── StepList.jsx
│           ├── StoryboardCards.jsx
│           ├── TheoryIntro.jsx
│           ├── ToneBuilder.jsx
│           ├── TypographyTester.jsx
│           └── ValueFormulaBuilder.jsx
├── data
│   ├── academia
│   │   └── calculadoraData.js
│   ├── cursos
│   │   ├── catalogo.js
│   │   ├── curso-1
│   │   │   ├── certificacion.js
│   │   │   ├── modulo-1.js
│   │   │   ├── modulo-2.js
│   │   │   ├── modulo-3.js
│   │   │   ├── modulo-4.js
│   │   │   ├── modulo-5.js
│   │   │   ├── modulo-6.js
│   │   │   └── syllabus.js
│   │   ├── curso-2
│   │   │   ├── certificacion.js
│   │   │   ├── curso2Data.js
│   │   │   ├── modulo-1.js
│   │   │   ├── modulo-2.js
│   │   │   ├── modulo-3.js
│   │   │   ├── modulo-4.js
│   │   │   ├── modulo-5.js
│   │   │   ├── modulo-6.js
│   │   │   ├── modulo-7.js
│   │   │   └── syllabus.js
│   │   ├── experiencias-privadas
│   │   │   ├── certificacion.js
│   │   │   ├── modulo-1.js
│   │   │   ├── modulo-2.js
│   │   │   ├── modulo-3.js
│   │   │   ├── modulo-4.js
│   │   │   ├── modulo-5.js
│   │   │   └── syllabus.js
│   │   ├── fotografia
│   │   │   ├── certificacion.js
│   │   │   ├── modulo-1.js
│   │   │   ├── modulo-2.js
│   │   │   ├── modulo-3.js
│   │   │   ├── modulo-4.js
│   │   │   ├── modulo-5.js
│   │   │   ├── modulo-6.js
│   │   │   └── syllabus.js
│   │   └── marca
│   │       ├── certificacion.js
│   │       ├── modulo-1.js
│   │       ├── modulo-2.js
│   │       ├── modulo-3.js
│   │       ├── modulo-4.js
│   │       ├── modulo-5.js
│   │       └── syllabus.js
│   └── laboratorios
│       ├── anatomia.js
│       ├── carbono.js
│       ├── sae.js
│       └── tolimaData.js
├── lib
│   └── firebase.js
└── utils
    └── security.js

85 directories, 179 files
```
