# 🎮 Módulo Interactivo: Simulador "Diseñando la Propuesta de Valor"
> Basado en la metodología de Alexander Osterwalder (Strategyzer) con mecánica de explicación explorable estilo Nicky Case.

---

## 📂 Inventario Completo de Archivos y Carpetas

Este simulador está diseñado bajo el principio de **alta cohesión y aislamiento modular**. Todo el contenido específico de este curso reside exclusivamente en tres carpetas dedicadas, más 4 puntos de registro en la plataforma:

### 1. Componentes de Interfaz (`src/components/ui/Academia/PropuestaValor/`)
| Archivo | Responsabilidad |
|---|---|
| `PropuestaValorGame.jsx` | **Orquestador Principal**: Controla el estado del juego (`currentAct` del 0 al 5), la navegación hacia atrás/adelante (`onBack`, `onComplete`), la cabecera del simulador y el pie de página. |
| `SeleccionArquetipo.jsx` | **Acto 0**: Selección de los 3 arquetipos (*Martín, Elena, Familia Ramírez*). Enseña que “el cliente abstracto no existe”. |
| `Acto1Diseccion.jsx` | **Pilar 1 - El Lienzo del Cliente**: Clasificador interactivo de pensamientos en 4 bolsillos (Trabajos, Dolores, Deseos, y la Trampa de la Solución). Incluye modal de teoría opcional contextualizado por personaje. |
| `Acto2DisenoEncaje.jsx` | **Pilar 2 - El Mapa de Valor y los 3 Encajes**: Tres vistas interactivas (1. Rompecabezas de encaje en papel; 2. Validación de mercado con simulación de multitud orgánica; 3. Cuentas claras del modelo de negocio). |
| `MercadoSimulador.jsx` | **Simulador de Mercado (Nicky Case style)**: Canvas interactivo a 60 FPS con partículas flotantes de la multitud (clientes afines vs turistas distractores), radar de propuesta de valor y retroalimentación pedagógica en vivo. |
| `TarjetasPricing.jsx` | **Dilema de Precios y Modelo de Negocio (Pilar 2 - Paso 3)**: Cuatro tarjetas interactivas de decisión de precio que ilustran en vivo la quiebra por miedo a cobrar, la trampa del margen precario, el rechazo por precio inflado y el verdadero *Business Model Fit*. |
| `Acto4Experimentos.jsx` | **Pilar 3 - Probar sin Quebrar**: Mini-juego de gestión de capital ($5,000 USD de alcancía). Compara el error fatal de construir infraestructura fija contra experimentos Lean baratos ($200 USD). |
| `Acto5Pivote.jsx` | **Pilar 4 - El Filtro de Feedback (El Pivote)**: Simulador de 3 dilemas donde el estudiante aprende cuándo decir SÍ (dolor real), cuándo decir NO con firmeza (sugerencia fuera de foco) y cuándo evitar el exceso costoso. |
| `Acto6Conclusion.jsx` | **Acto Final - Maestría Strategyzer**: Matriz comparativa entre los 3 arquetipos y las 3 Reglas de Oro inquebrantables. |
| `NickyCharacter.jsx` | **Avatar Vectorial Interactivo**: 100% SVG nativo, con expresiones emocionales (*happy, sad, neutral, excited, money*), animaciones reactivas y diferenciación cromática estricta (azul para Martín, rosa para Elena, ámbar para Familia). Cero `style={{}}`. |
| `AudioExplainerModal.jsx` | **Modal de Audio / Transcripción**: Reproductor con síntesis de voz (`window.speechSynthesis`) y texto accesible. |

### 2. Capa de Datos y Contenido Pedagógico (`src/data/cursos/propuesta-valor/`)
| Archivo | Contenido |
|---|---|
| `juegoData.js` | Definición de los 3 arquetipos, datos de los 4 pilares, tokens de pensamiento, opciones de experimentos Lean, y dilemas de pivote. |
| `certificacion.js` | Examen de certificación oficial: 10 preguntas tipo caso, clave hasheada en SHA-256, 2 horas certificables y denominación "Diseño de la Propuesta de Valor". |
| `audioScripts.js` | Guiones pedagógicos estructurados por cada acto para el facilitador de voz. |
| `guiones-grabacion-voz.md` | Guiones redactados en tono cálido y profesional listos para locución humana. |

### 3. Rutas Web de Next.js (`src/app/(institucional)/academia/cursos/propuesta-valor/`)
| Ruta | Archivo / Función |
|---|---|
| `/academia/cursos/propuesta-valor/juego` | `src/app/(institucional)/academia/cursos/propuesta-valor/juego/page.jsx` (Juego interactivo completo) |
| `/academia/cursos/propuesta-valor/certificacion` | Ruta dinámica generada por `src/app/(institucional)/academia/cursos/[curso]/certificacion/page.jsx` |

---

## 🔗 Puntos de Registro Global en el Proyecto

Si necesitas auditar la integración o dar de baja el curso, estos son los **únicos 4 archivos del sistema** que tienen referencias a `propuesta-valor`:

1. **`src/data/cursos/catalogo.js`**:
   - Tarjeta en la lista de cursos (`slug: "propuesta-valor"`).
2. **`src/data/courseRegistry.js`**:
   - Configuración de metadatos, color temático (`#4f46e5`) y tema visual de certificación (`certTheme`).
3. **`src/app/sitemap.js`**:
   - URLs indexables: `/academia/cursos/propuesta-valor/juego` y `/academia/cursos/propuesta-valor/certificacion`.
4. **`src/app/(institucional)/academia/cursos/[curso]/certificacion/page.jsx`**:
   - Inclusión en `generateStaticParams` para pre-renderizado SSG del examen y certificación oficial.

---

## 🗑️ Procedimiento para Borrar Completamente este Curso

Si en el futuro se decide retirar este curso de la plataforma de forma definitiva, sigue estos 2 pasos para que el repositorio quede 100% limpio y sin dependencias huérfanas:

### Paso 1: Eliminar las 3 carpetas del módulo
Ejecutar en la terminal desde la raíz del proyecto:
```bash
rm -rf src/components/ui/Academia/PropuestaValor
rm -rf src/data/cursos/propuesta-valor
rm -rf src/app/\(institucional\)/academia/cursos/propuesta-valor
```

### Paso 2: Retirar las referencias en los 4 archivos de registro
1. En `src/data/cursos/catalogo.js`: eliminar el objeto del curso con `slug: "propuesta-valor"`.
2. En `src/data/courseRegistry.js`: eliminar la clave `"propuesta-valor"`.
3. En `src/app/sitemap.js`: eliminar la entrada `'/academia/cursos/propuesta-valor/juego'`.
4. En `src/app/(institucional)/academia/cursos/[curso]/certificacion/page.jsx`: retirar `'propuesta-valor'` del filtro `filter()`.

---

## 🛡️ Estándares Técnicos y Reglas de Calidad Cumplidas

1. **Gestor de Paquetes**: Uso exclusivo de `pnpm` (prohibido `npm` y `yarn` según `ARCHITECTURE_RULES.md`).
2. **Estilos**: Cero estilos en línea (`style={{}}`). 100% clases de utilidad Tailwind CSS con bordes y sombras sólidas tipo cómic/Nicky Case (`border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_#0f172a]`).
3. **Tipografía y Comillas**: Solo se permiten comillas tipográficas dobles (`“` y `”`). No hay comillas rectas simples (`''`) ni dobles (`""`) en el texto pedagógico visible al usuario.
4. **Pedagogía Progresiva**:
   - Cero trampas: no existen botones de salto libre hacia adelante.
   - Navegación hacia atrás habilitada mediante `onBack` (`handleActChange(currentAct - 1)`).
   - Las explicaciones teóricas son opcionales y solo se habilitan antes de avanzar de pilar, filtradas estrictamente por el personaje activo.
5. **Auditoría de Compilación**:
   - Probado con `pnpm run build` en Next.js (Turbopack) con 63 páginas estáticas generadas con 0 errores.
