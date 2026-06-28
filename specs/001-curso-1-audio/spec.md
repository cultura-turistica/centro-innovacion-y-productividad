# Feature Specification: Integración Audios - Curso 1 (Ruta de Formación Turismo Comunitario)

**Feature Branch**: `001-curso-1-audio`

**Created**: 2026-06-27

**Status**: Draft

**Input**: User description: "Analizar el contexto del código real del curso 1 (Curso1.jsx). Explicar los conceptos de turismo comunitario reconociendo que no hay un solo modelo y que no se limita a familias, sino que abarca asociaciones, empresas locales y diversos actores del territorio."

## Introducción y Contexto

Tras analizar el archivo `Curso1.jsx` (Ruta de Formación Turismo Comunitario), se incorporarán 3 clips de audio guiados por un **Instructor único**. 
El objetivo es **enseñar de forma objetiva y amplia** los conceptos clave (Turismo Comunitario, Gobernanza, Roles, Reparto de Utilidades). El tono debe ser explicativo, neutral y preciso, aclarando que el turismo comunitario es un modelo de gestión inclusivo donde participan diversos actores locales (cooperativas, asociaciones, empresas locales), evitando generalizaciones restrictivas.

## Ubicación de los Clips y Textos a Usar (User Scenarios)

### User Story 1 - Audio Módulo 1: ¿Qué es el Turismo Comunitario? (Priority: P1)

Como estudiante, al iniciar el Módulo 1, quiero escuchar una explicación clara que defina el turismo comunitario como un modelo organizativo amplio, sin limitarlo a un solo tipo de actor (ej. familias), sino incluyendo empresas locales y asociaciones.

**Ubicación:** Módulo 1 (Gobernanza y Turismo Comunitario), justo arriba de la dinámica interactiva del slider de Sinergia vs Fatiga.
**Formato:** Voz única (Instructor).
**Acceptance Scenarios:**
1. **Given** que el usuario ingresa al curso, **When** reproduce el audio, **Then** entiende el concepto de gobernanza territorial y cómo diferentes actores locales se organizan para tomar decisiones conjuntas.

---

### User Story 2 - Audio Módulo 4: ¿Qué es una Red Asociativa? (Priority: P2)

Como estudiante, al llegar al Módulo 4, quiero que se me explique cómo se dividen las tareas en una red asociativa basándose en habilidades y eslabones de una cadena de valor.

**Ubicación:** Módulo 4 (La Red Asociativa), antes del juego de emparejar roles.
**Formato:** Voz única (Instructor).
**Acceptance Scenarios:**
1. **Given** que el usuario llega a la sección de roles, **When** escucha el audio, **Then** comprende qué son los 4 roles (Vocero, Financiero, Guía, Creador) y la importancia de la confianza entre los diferentes negocios/personas de la red.

---

### User Story 3 - Audio Módulo 6: ¿Cómo funciona el reparto de utilidades? (Priority: P3)

Como estudiante, al llegar al ejercicio final del presupuesto, quiero una explicación sobre el equilibrio entre la reinversión en el territorio (bien común) y la compensación a los operadores.

**Ubicación:** Módulo 6 (Presupuesto Participativo), antes de los sliders de los 10 millones.
**Formato:** Voz única (Instructor).
**Acceptance Scenarios:**
1. **Given** el módulo final, **When** el usuario escucha el audio, **Then** comprende la teoría del reparto equilibrado de utilidades para aplicarlo en el simulador.

## Edge Cases

- ¿Qué pasa si el usuario no tiene sonido o está en un ambiente ruidoso? 
  *Solución:* Cada clip de audio debe tener una pestaña de "Transcripción" con diseño atractivo debajo del reproductor.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST render a custom audio player UI that matches the visual guidelines.
- **FR-002**: System MUST provide a visible "Show Transcript" button for accessibility and silent reading.
- **FR-003**: System MUST NOT auto-play the audio to respect self-guided module principles.
- **FR-004**: System MUST allow users to play, pause, and seek within the audio track.

### Key Entities 

- **CourseModule**: Contains sections and media assets.
- **AudioAsset**: Represents the audio clip, with fields for URL, duration, and transcript text.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 70% of students click play on at least one audio clip.
- **SC-002**: The average completion rate of the clips is over 60% of the audio duration.

## Assumptions

- Se generarán los archivos de audio con una voz de instructor clara, pausada y respetuosa, adecuada para el público objetivo.
