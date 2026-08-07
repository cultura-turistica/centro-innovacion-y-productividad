# PROTOCOLO DE ARQUITECTURA REACT Y DATOS PARA ANTIGRAVITY

Como agente de IA trabajando en este repositorio, DEBES seguir estrictamente las siguientes reglas arquitectónicas en cualquier generación o refactorización de código.

## 1. Contratos de Datos Estrictos (Single Source of Truth)
- Queda PROHIBIDO inyectar datos duros (textos largos, arrays narrativos, objetos JSON) directamente en los archivos de componentes `.jsx` o `.tsx`.
- Toda estructura de datos de cursos o laboratorios DEBE definirse mediante un esquema de validación en `src/schemas/` (usando **Zod** o TypeBox).
- Los datos puros deben residir exclusivamente en la carpeta `src/data/` y deben ser importados y validados contra su esquema antes de pasarlos a la Vista.

## 2. Separación de Responsabilidades (Cero Espagueti)
- **Componentes de UI Puros (`src/components/ui/`)**: Todo componente visual debe ser un componente "tonto" (Dumb Component). Su única responsabilidad es recibir `props` (previamente validadas) y renderizar JSX/Tailwind. Ningún componente puro debe exceder las 80 líneas de ser posible.
- **Lógica de Estado y Side Effects (`src/hooks/`)**: Cualquier llamada a APIs, manejo de estado complejo, *Intersection Observers* (scroll tracking) o lógica de negocios con `useEffect` DEBE ser abstraída en Custom Hooks puros. El componente visual NO debe tener lógica de negocios incrustada.

## 3. Patrón de Estilos
- Prohibición ABSOLUTA del uso de estilos en línea (`style={{...}}`).
- Se debe usar de forma exclusiva y estricta el sistema de clases utilitarias de **Tailwind CSS**.

## 4. Fronteras Next.js (Server vs Client Components)
- Por defecto, los componentes son **Server Components** para priorizar el SEO y la velocidad de carga (especialmente para la narrativa de los Cursos).
- Toda librería pesada de visualización en cliente (como `Leaflet` o `Recharts` utilizadas en los Data Labs) DEBE ser encapsulada en componentes puente que declaren explícitamente la directiva `"use client"` en la primera línea, para evitar errores de hidratación y choques de SSR.

## 5. Estandarización del Conocimiento (Specs)
- **OBLIGATORIO:** Antes de crear, modificar o refactorizar cualquier módulo, curso o laboratorio, DEBES buscar y leer el archivo correspondiente en la carpeta `specs/` (ej. `specs/011-laboratorio-de-datos.md`). Los specs son la ley funcional del proyecto.
