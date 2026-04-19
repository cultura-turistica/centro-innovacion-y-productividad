# Memoria Técnica e Infraestructura de Proyectos FONTUR & DataLab

Este documento se utiliza como memoria central para ubicar rápidamente el procesamiento de datos, entornos de backend, y las vistas del frontend dentro de este marco de trabajo.

## 1. Entorno de Procesamiento de Datos (Backend Estadístico)
UBICACIÓN: `/Users/cultur/.gemini/antigravity/scratch/repo-github/mcmc-api`

- **Entorno Virtual**: `venv/` (Para ejecutar scripts y cuadernos usar `./mcmc-api/venv/bin/python` o `./mcmc-api/venv/bin/jupyter`)
- **Archivos de Análisis**: Aquí es donde se crean y alojan los Cuadernos Jupyter (`.ipynb`) para asegurar que el análisis estadístico sea validado por el usuario de forma transparente.
- **Exportación de JSONs procesados**: Las salidas de datos de los cuadernos se exportan típicamente hacia la ruta del frontend en `repo-github/src/data/` para que la UI pueda consumirlos ágilmente.

## 2. Directorio de Datos Crudos (Raw Data)
UBICACIÓN: `/Users/cultur/.gemini/antigravity/scratch/repo-github/data/`

- **FONTUR**: Archivos de Excel originales (Ej. `Recursos_Contratados 2021-2024.xlsx`, `Presupuesto ejecutado...`, etc.) sobre modalidades e incumplimientos.

## 3. Frontend y Scrollytelling (DataLab)
UBICACIÓN: `/Users/cultur/.gemini/antigravity/scratch/repo-github/src/pages/DataLab`

- **Enfoque Estético y Referencias Base (StoryData)**: El ecosistema estético no debe replicar interfaces de UI corporativas ("fichas"), sino perseguir un impacto visual/periodístico inmersivo:
  - *Impacto Visceral (React/D3)*: **"Out of Sight, Out of Mind" (Pitch Interactive)** - `drones.pitchinteractive.com`. Elementos (data) cayendo en canvas de forma secuencial y anclados al scroll continuo.
  - *Inmersión Narrativa (React/WebGL/Scrollama)*: **"Life in a Cage" (SCMP)** - `scmp.com/infographics/hong-kong/caged-lives`. Transiciones profundas desde GIS (planos) hacia datos interactivos y densidad demográfica.
  - *Impacto de Escala (React/Three.js)*: **"The Billion Dollar Gram" (Information is Beautiful)**. Uso de geometrías proporcionales para revelar contrastes brutales (ej. costo real vs. costo sobrepagado en contratos).
  - *Simulación Visceral (GIS/React)*: **"Sea Level Rise Viewer" (NOAA)**. Permitir al usuario alterar los parámetros (ej. subir un slider) para observar mapas colapsando bajo el peso de nuevas variables climáticas/financieras.
  - *Extrusión Espacial (Python/PyDeck/Mapbox)*: **Hexagon Density Layers**. Procesamiento backend (GDB a JSON) que renderiza polígonos 3D levantándose en el frontend para delatar la concentración de gasto o riesgos sectorizados.
  - *Interacción Psicológica (React/D3.js)*: **"You Draw It" (NYT)**. Mecánica donde el usuario debe dibujar su propio sesgo o prejuicio estadístico antes de revelar la línea real de datos.
  - *Narrativa de Flujo Demográfico (React-Simple-Maps)*: **"The Refugee Project"**. Renderizado de líneas de fuerza y éxodo para mostrar la trazabilidad de turistas o el trayecto interdepartamental de dineros invertidos.
  - *Data Cruda Masiva (Python/Dash/Plotly)*: **"Climate TRACE"** - `climatetrace.org/map`. Backend estadístico puro en Python que renderiza mapas volumétricos (Mapbox) como evidencia de auditoría profunda.
- **Componentes Clave**: Archivos base dentro de `src/pages/DataLab/` y la capa interactiva para los análisis estadísticos de FONTUR. 

## 4. Historias de Datos Propuestas para FONTUR (Por Validar en Notebooks)

### Historia 1: La Dinámica del Gasto Público en Turismo
**Notebook a ejecutar:** `mcmc-api/FONTUR_01_Evolucion_Contratacion.ipynb`
- Enfoque analítico: Análisis descriptivo y estadístico de la "Modalidad de Contratación" de 2021 a 2024.
- Medida clave: Identificar asimetrías de contratación directa vs competitiva.

### Historia 2: Geografía del Riesgo y Daño Patrimonial (Incumplimientos)
**Notebook a ejecutar:** `mcmc-api/FONTUR_02_Riesgos_Incumplimientos.ipynb`
- Enfoque analítico: Minería sobre las hojas de 'Incumplimientos'. Extraer métricas sobre los contratistas que más fallan, cuánto recurso representan y preanálisis de los objetos afectados.

## 5. Reglas de Conocimiento Operativo Continúo (DevOps / Git)
- **Desarrollo y Estado Estrictamente Local**: Bajo NINGUNA circunstancia se debe ejecutar `git push` a `main` o a ramas remotas ("la nube") de manera autónoma. Todo desarrollo, prueba y depuración se mantiene en el entorno local (localhost) garantizando el control 100% manual.
- **Control Humano**: Únicamente el USUARIO tomará la decisión e impartirá la orden explícita de realizar pases a producción o repositorios remotos.
