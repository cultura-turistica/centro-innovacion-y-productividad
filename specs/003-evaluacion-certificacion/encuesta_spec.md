# Spec: 003 - Evaluación y Certificación

## 1. Arquitectura de Flujo
Todo módulo finaliza con una pantalla de **finalización de contenido**, donde la evaluación y emisión del certificado es de carácter **OPCIONAL**.
El usuario no debe sentirse forzado a evaluarse si solo quería consumir el material visualmente.

- **Botonera Final**:
  - `Terminar y Salir`: Retorna al inicio/dashboard sin guardar progreso académico.
  - `Obtener Certificado (Opcional)`: Lanza el flujo del componente `<CourseEvaluation />`.

## 2. Paso 1: Encuesta de Aprendizaje (Estándar/Genérica)
**Regla de Oro**: La encuesta NO es específica del curso. Se diseñó genérica para poder utilizar **un solo Google Form** en toda la base de datos de Cultura T. 
El componente envía los datos recolectados y un hash o campo invisible que identifica de qué curso proviene la respuesta.

**Preguntas obligatorias**:
1. Nombre Completo
2. Municipio / Departamento
3. Adquisición de conocimientos (Opciones: Mucho / Algo / Poco)
4. Mejora de comprensión (Opciones: Notablemente / Moderadamente / Nada)
5. Utilidad profesional (Opciones: Totalmente / Parcialmente / No)
6. Claridad del formato (Opciones: Sí, muy claro / Regular / No fue claro)
7. Fortalecimiento de habilidades (Opciones: Definitivamente / Tal vez / No)
8. (Abierta, Opcional) Comentarios o sugerencias sobre la calidad del curso.

## 3. Paso 2: Evaluación Técnica (Quiz Modular)
El Quiz sí es específico por temática. No existen opciones "absurdas" o informales. Las respuestas deben medir competencia técnica sobre:
- Gobernanza.
- Sostenibilidad (Ejes).
- Preservación del Patrimonio vs Folclorización.

**Manejo de Datos**: Las preguntas y las respuestas correctas se manejan a nivel de componente padre (Ej. `Curso1.jsx`) y se pasan como *props* `quizData` a `<CourseEvaluation />`. 
- **Calificación Mínima**: Se requiere un mínimo de **80%** de aciertos para aprobar.
- **Anti-Trampa (Hashes)**: Las respuestas correctas no se exponen en texto plano, se exponen como hashes SHA-256 generados previamente. La selección del usuario se hashea en tiempo real y se compara con la prop `correctHash`.
- **Anti-Trampa (Bloqueo)**: Los usuarios tienen un máximo de **2 intentos**. Al fallar el segundo intento, se activa un bloqueo temporal de 6 horas gestionado mediante `localStorage`, previniendo intentos de adivinación bruta.

## 4. Paso 3: Emisión del Certificado
Al aprobar el cuestionario con 80% o más:
1. Se genera un `sello` corto de verificación con formato: `CIP-[DDMM]-[Cédula]-[4_Letras_Aleatorias]`. Este sello abandona el cifrado AES excesivamente largo en pro de una usabilidad que facilite el copiado manual, dejando la carga probatoria en la base de datos pública.
2. Se envía la data silenciosamente a Google Forms (`mode: 'no-cors'`). Se envía siempre el nombre oficial completo del curso para facilitar la validación.
3. Se renderiza `<CertificateGenerator />` a pantalla completa.
4. El certificado muestra la URL de verificación oficial: `cip.cultura-t.com/#/verificar`.
