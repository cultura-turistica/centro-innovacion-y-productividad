# Feature Specification: Corrección Encuesta, Módulos y Horas

**Feature Branch**: `004-fix-encuesta-modulos`

**Created**: 2026-06-28

**Status**: Completed (Post-mortem)

**Input**: User description: "Corrección de módulos, horas, bloqueo y errores en encuesta"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Encuesta Funcional y Mapeo Exacto (Priority: P1)

Como usuario que aprueba el curso, quiero enviar mi encuesta de calidad y que se registre exitosamente en el Google Form oficial de Cultura T, sin que la plataforma React envíe campos fantasma que rompan el POST.

**Why this priority**: Si la encuesta falla, los usuarios no reciben el certificado y el progreso legal se pierde.

**Independent Test**: Enviar el formulario y verificar en Google Sheets (CURL a `https://forms.gle/6adsfWfvMC8bWG1t5`).

**Acceptance Scenarios**:

1. **Given** un Google Form que solo acepta preguntas q1-q6, **When** el componente `CourseEvaluation` arma el `FormData`, **Then** solo se deben inyectar los entry IDs estrictamente compatibles.

---

### User Story 2 - Horas y Módulos Correctos en Certificado (Priority: P2)

Como estudiante, quiero que mi certificado y mi registro de aprobación digan que hice 6 módulos en 2 horas, no 7 módulos en 5 horas.

**Why this priority**: Afecta la validez académica y la legalidad del diploma.

**Independent Test**: Generar un certificado y verificar visualmente la data.

**Acceptance Scenarios**:

1. **Given** el curso 1, **When** se evalúa y se genera el diploma, **Then** el peso debe ser "2" horas y los módulos "6".

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El componente `CourseEvaluation.jsx` **NO DEBE** inyectar campos adicionales de "Nombre" y "Ubicación" al form de la encuesta de calidad, ya que esto produce un error de CORS/Rechazo por parte de Google Forms al no coincidir con el esquema real publicado.
- **FR-002**: El componente `CourseEvaluation.jsx` debe manejar el bloqueo de 6 horas usando `localStorage` para prevenir ataques de fuerza bruta en el quiz (ya implementado).
- **FR-003**: `courses.js` debe declarar 6 módulos totales para el Curso 1.
- **FR-004**: `Curso1.jsx` debe declarar `horas: "2"` en el objeto `quizData`.

## Non-Functional Requirements *(optional)*

### NFR 1 - Cumplimiento Estricto de Specs

El agente de desarrollo no debe asumir inyecciones de campos basándose en lecturas desactualizadas sin comprobar contra el servicio vivo (Google Forms en producción), ni debe hacer `git push` sin autorización explícita.

## Dependencies & Constraints

- Dependencia del form en vivo: `https://forms.gle/6adsfWfvMC8bWG1t5`.
- Se requiere que el usuario haga push localmente cuando considere que el spec y el código cumplen su estándar.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-002**: System handles 1000 concurrent users without degradation
- **SC-003**: 90% of users successfully complete primary task on first attempt
- **SC-004**: Reduce support tickets related to survey errors by 50%

## Assumptions

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right assumptions based on reasonable defaults
  chosen when the feature description did not specify certain details.
-->

- [Assumption about target users, e.g., "Users have stable internet connectivity"]
- [Assumption about scope boundaries, e.g., "Mobile support is out of scope for v1"]
- [Assumption about data/environment, e.g., "Existing authentication system will be reused"]
- [Dependency on existing system/service, e.g., "Requires access to the existing user profile API"]
