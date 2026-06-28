# Coordenadas y Arquitectura del Diploma

Este documento hace parte del protocolo Spec-Kit del proyecto, para asegurar que todas las coordenadas matemáticas extraídas directamente del HTML/SVG original se utilicen de forma estandarizada en los generadores de certificados.

## Coordenadas Base (Extraídas Nativamente)
- **ViewBox Original**: 2452 x 1749

### 1. Box CURSO
- **X**: 11.93%
- **Y**: 41.69%
- **Width**: 50.77%
- **Height**: 5.03%

### 2. Box NOMBRES (ESTE CERTIFICADO ES PARA)
- **X**: 11.93%
- **Y**: 49.97%
- **Width**: 50.77%
- **Height**: 5.03%

### 3. Box IDENTIFICACIÓN
- **X**: 26.04%
- **Y**: 55.89%
- **Width**: 36.67%
- **Height**: 5.03%

### 4. Box HORAS (Inferior Izquierda)
- **X**: 11.93%
- **Y**: 82.00%
- **Width**: 30.00%
- **Height**: 4.00%

### 5. Box CÓDIGO VERIFICACIÓN (Debajo de horas)
- **X**: 11.93%
- **Y**: 93.5%
- **Width**: 60.00%
- **Height**: Auto (CSS Wrap)
- *Nota:* Ya no se utiliza `AutoFitText` aquí porque los hashes largos se reducían microscópicamente. Se emplea un contenedor `<div>` tradicional con `word-break: break-all`.

### 6. Box URL DE VERIFICACIÓN
- **X**: 11.93%
- **Y**: 97.00%
- **Width**: 30.00%
- **Height**: 2.00%
- *Contenido:* `cip.cultura-t.com/#/verificar`

### 7. Box FECHA EXPEDICIÓN (Derecha)
- **X**: 65.00%
- **Y**: 87.00%
- **Width**: 25.00%
- **Height**: 4.00%

## Componente AutoFitText
Para cumplir la regla "el texto nunca se puede ir por fuera de ese recuadro", se implementará un AutoFitText basado en React Refs que mide el contenedor y aplica un `transform: scale(X)` en caso de desbordamiento. *Excepción:* El Código de Verificación utiliza un texto estándar envuelto para garantizar su legibilidad si es muy largo.
