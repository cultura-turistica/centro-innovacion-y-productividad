import React from 'react';
import './RutaFormulacion.css';

export default function RutaFormulacionFontur() {
  return (
    <div className="ruta-container">
      <header className="ruta-header">
        <div className="badge">Estándar Operativo (SOP)</div>
        <h1>Protocolo Sistematizado: Formulación Estratégica FONTUR</h1>
        <p className="subtitle">Líneas 1 y 3 - Alta Elegibilidad</p>
      </header>

      <div className="content-wrapper">
        <div className="alert-box warning" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          <strong>[IMPORTANT]</strong> Este documento define el Estándar Operativo (SOP) para la formulación de proyectos FONTUR (Líneas 1 y 3). El objetivo central no es la velocidad ni el ahorro de palabras, sino la <strong>Elegibilidad de Alta Calidad</strong>. La IA actúa como Estratega Técnico, con fidelidad absoluta a las fuentes territoriales y cero tolerancia a la alucinación de datos o precios.
        </div>

        <section className="fase-card dark-card">
          <h2>1. Arquitectura de Memoria Estática (Cerebro Base)</h2>
          <p>Tres repositorios de conocimiento que guían a la IA y al equipo humano. <br/><br/><strong>Rutas locales de los archivos (Cerebro IA):</strong></p>
          <ul className="fase-list">
            <li style={{ marginBottom: '1.5rem' }}>
              <strong>fontur_rules.json</strong>: Reglas de elegibilidad para TODOS los actores válidos. Exclusión estricta: Reglas de MinCIT y ProColombia no aplican. Incluye topes y tiempos. <br/>
              <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <code style={{ flex: 1, fontSize: '0.8rem' }}>/fontur_docs/fontur_rules.json</code>
                <a href="/fontur_docs/fontur_rules.json" target="_blank" rel="noreferrer" style={{ background: '#38bdf8', color: '#0f172a', padding: '0.4rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem' }}>Abrir Archivo</a>
              </div>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <strong>fontur_rubros_y_excel.json</strong>: Catálogo estricto de ítems financiables para Líneas 1 y 3. Mapa estructural de las pestañas del Anexo Excel editable de FONTUR. <em>Regla de Oro: La IA define actividades, pero NUNCA define precios.</em><br/>
              <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <code style={{ flex: 1, fontSize: '0.8rem' }}>/fontur_docs/fontur_rubros_y_excel.json</code>
                <a href="/fontur_docs/fontur_rubros_y_excel.json" target="_blank" rel="noreferrer" style={{ background: '#38bdf8', color: '#0f172a', padding: '0.4rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem' }}>Abrir Archivo</a>
              </div>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <strong>fontur_contratacion.json</strong>: Contexto estratégico del Manual de Contratación (énfasis en Convenios de Asociación / adjudicación directa al "Aliado" ejecutor).<br/>
              <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <code style={{ flex: 1, fontSize: '0.8rem' }}>/fontur_docs/fontur_contratacion.json</code>
                <a href="/fontur_docs/fontur_contratacion.json" target="_blank" rel="noreferrer" style={{ background: '#38bdf8', color: '#0f172a', padding: '0.4rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem' }}>Abrir Archivo</a>
              </div>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <strong>Documentación y Anexos Originales:</strong><br/>
              <div style={{ marginTop: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <code style={{ flex: 1, fontSize: '0.8rem' }}>Manual Oficial FONTUR (PDF)</code>
                  <a href="https://fontur.com.co/sites/default/files/2026-04/M-DMI-001Manual-Programas-y-Proyectos-04dic-2025.pdf" target="_blank" rel="noreferrer" style={{ background: '#10b981', color: '#0f172a', padding: '0.4rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem' }}>Abrir PDF</a>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <code style={{ flex: 1, fontSize: '0.8rem' }}>Anexo Oficial Presupuesto (Excel)</code>
                  <a href="/fontur_docs/FichadeProgramasyProyectosP.AFONTUR_V1.xlsx" target="_blank" rel="noreferrer" style={{ background: '#10b981', color: '#0f172a', padding: '0.4rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem' }}>Descargar Excel</a>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="fase-card">
          <h2>2. Insumo Dinámico y Contramedida de Calidad (Gatekeeper)</h2>
          <ul className="fase-list">
            <li><strong>Mecanismo:</strong> El usuario proporciona la URL de NotebookLM con el PDT, perfil del actor o diagnósticos locales.</li>
            <li><strong>Contramedida de Evaluación Previa:</strong> Antes de formular, la IA ejecuta un escaneo de fuentes. Si determina que los datos son insuficientes, la IA <strong>detendrá el proceso</strong> y solicitará al humano que cargue insumos adicionales específicos en la libreta.</li>
            <li><strong>Fidelidad Absoluta:</strong> La IA no puede inventar necesidades. Si las fuentes indican que el municipio ya posee un inventario turístico, la IA tiene prohibido estructurar un proyecto para levantamiento de inventarios (Evitar Línea 1.1.A).</li>
          </ul>
        </section>

        <section className="fase-card dark-card">
          <h2>3. Prompt Maestro (Instrucción Estandarizada)</h2>
          <div style={{ background: '#020617', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155', fontFamily: 'monospace', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
            <strong>Rol:</strong> Estratega de Formulación Senior FONTUR (Líneas 1 y 3).<br/><br/>
            <strong>Objetivo:</strong> Diseñar un proyecto de altísima elegibilidad, 100% coherente con la realidad del actor/territorio, entregando la estructura de la Ficha F-DMI-003, el esquema del Anexo Excel y los requerimientos documentales.<br/><br/>
            <strong>Fase 1: Contramedida y Diagnóstico Estricto</strong><br/>
            - Ingresa a la URL de NotebookLM. Analiza los documentos disponibles.<br/>
            - Si faltan datos críticos del estado turístico actual, DETENTE y enlista qué insumos adicionales debe subir el humano.<br/>
            - Si los datos son suficientes, extrae el problema central anclado ÚNICAMENTE a la evidencia del documento.<br/><br/>
            <strong>Fase 2: Diseño de Proyecto de Alto Nivel</strong><br/>
            - Clasifica el proyecto en Línea 1 o 3 según `fontur_rules` (aplicando las reglas del tipo de actor correspondiente).<br/>
            - Redacta la Ficha F-DMI-003: Problema, objetivos de alto nivel, y justificación anclada al Plan Nacional de Desarrollo.<br/>
            - <strong>Identificación de Insumos:</strong> Enlista explícitamente qué "Estudios Previos" o documentos técnicos adicionales deberá conseguir el equipo humano para que el proyecto sea radicado con éxito.<br/><br/>
            <strong>Fase 3: Estructuración Financiera y Operativa (Sin Precios)</strong><br/>
            - Diseña el bloque de actividades asociado estrictamente a los ítems del archivo `fontur_rubros_y_excel`.<br/>
            - Presenta la salida reflejando la estructura de pestañas del Anexo Excel de FONTUR.<br/>
            - PROHIBICIÓN: No inventes precios ni valores económicos. Deja marcadores (ej. [PRECIO A COTIZAR POR HUMANO]) para que el equipo gestione las cotizaciones reales.<br/><br/>
            <strong>Fase 4: Estrategia de Contratación</strong><br/>
            - Genera un apartado basado en `fontur_contratacion` justificando bajo qué figura jurídica el formulador actual (el "Aliado") tiene la idoneidad técnica para ejecutar directamente los recursos.
          </div>
        </section>

        <section className="fase-card">
          <h2>4. Hoja de Ruta Operativa (Interacción IA - Humano)</h2>
          
          <h3 style={{ color: '#38bdf8', marginTop: '1.5rem' }}>FASE I: Input y Contramedida (El "Filtro de Calidad y Diagnóstico")</h3>
          <ul className="fase-list">
            <li>Humano provee URL de libreta.</li>
            <li>IA evalúa el contexto.</li>
            <li><strong>Gatekeeper de Estudios Previos:</strong> Si para la Línea seleccionada el manual exige estudios técnicos previos y no están en la libreta, la IA detiene el proceso y exige su carga.</li>
            <li>Si los datos son suficientes, pasa a Fase II.</li>
          </ul>

          <h3 style={{ color: '#38bdf8', marginTop: '1.5rem' }}>FASE II: Diseño Estratégico y Estructuración Excel Completa (IA)</h3>
          <ul className="fase-list">
            <li><strong>Contramedida de Inconsistencia (Auto-Consulta):</strong> Antes de estructurar, la IA cruza el diagnóstico local con `fontur_rules.json`. Si la idea de proyecto no encaja claramente en las subcategorías estrictas, la IA no se detiene a pedir ayuda humana. En su lugar, genera un archivo `.txt` (Log de análisis) y <strong>procede autónomamente a leer el manual oficial completo (PDF o TXT extraído)</strong> para resolver su duda y encontrar el encaje normativo exacto.</li>
            <li>Una vez resuelta la coherencia técnica, la IA asume el 95% de la carga operativa de formulación.</li>
            <li>Llenado íntegro de las Pestañas 1, 2, 3, 4, 5, 7 y 8 del Excel oficial de FONTUR.</li>
            <li>Llenado de la Pestaña 6 (Presupuesto) definiendo la estructura estricta: Tipo, Actividad, Rubro e Ítem, <strong>dejando únicamente los valores económicos en blanco.</strong></li>
          </ul>

          <h3 style={{ color: '#38bdf8', marginTop: '1.5rem' }}>FASE III: Inteligencia de Precios y Cotizaciones (Humano)</h3>
          <ul className="fase-list">
            <li>El equipo humano toma el Excel generado por la IA (ya estructurado técnica y estratégicamente).</li>
            <li>Consecución exclusiva de las 3 cotizaciones reales exigidas por rubro para rellenar los valores en blanco de la Pestaña 6.</li>
            <li>Recolección de firmas de representantes legales y avales territoriales.</li>
          </ul>

          <h3 style={{ color: '#38bdf8', marginTop: '1.5rem' }}>FASE IV: Radicación y Estrategia de Contratación</h3>
          <ul className="fase-list">
            <li>Carga de ficha, excel completo y soportes (incluidas cotizaciones) al portal "Tu Proyecto Digital".</li>
            <li>Inclusión del anexo estratégico recomendando la figura de adjudicación (ej. Convenio de Asociación) para perfilar al formulador como el "Aliado" idóneo para ejecutar los recursos.</li>
            <li>Seguimiento de estados ante FONTUR.</li>
          </ul>
        </section>

        <section className="fase-card dark-card">
          <h2>5. Algoritmo Lógico (Flujo de Decisión y Arquitectura Excel)</h2>
          <p>El siguiente diagrama detalla la ruta de decisión del agente de IA, mapeada directamente a las pestañas reales del Excel <code>FichadeProgramasyProyectosP.AFONTUR_V1.xlsx</code>.</p>
          
          <div style={{ background: '#020617', padding: '2rem', borderRadius: '8px', border: '1px solid #334155', fontFamily: 'monospace', color: '#7dd3fc', whiteSpace: 'pre', overflowX: 'auto', fontSize: '0.85rem' }}>
{`A[Inicio: Input URL NotebookLM] 
  --> B{Gatekeeper: ¿Datos y Estudios Previos Suficientes?}
      |-- No --> C[Detener: Solicitar Insumos Faltantes al Humano] --> A
      |-- Sí --> D[Extraer Diagnóstico y Perfil del Actor]

D --> E{¿Encaja en Subcategorías de fontur_rules?}
      |-- Dudas/Inconsistencia --> X[Generar Log TXT y Consultar Manual Oficial FONTUR] --> E
      |-- Sí, es Línea 1 --> F[Enfoque: Competitividad e Innovación]
      |-- Sí, es Línea 3 --> G[Enfoque: Promoción y Mercadeo]

F & G --> H[Estructuración Excel: Llenado 100% Pestañas 1, 2, 3, 4, 5, 7, 8]
H --> I[Pestaña 6: Presupuesto Proyecto]
I --> J[IA define Actividades conectadas a Pestaña 'Consulta_Rubros']
J --> K[Bloqueo Financiero: IA deja Precios en Blanco]
K --> N[Salida: Estructura Excel Completa + Ficha Técnica]
N --> O[Fase Humana: Búsqueda de Cotizaciones Reales y Firmas]
O --> P[Fase Radicación: Envío al Portal + Estrategia de Contratación Aliado]`}
          </div>
        </section>

        <section className="fase-card">
          <h2>Siguientes Pasos (Fase Cero - Completada)</h2>
          <ul className="fase-list">
            <li>Construcción y compilación de <code>fontur_rules.json</code></li>
            <li>Construcción y compilación de <code>fontur_rubros_y_excel.json</code></li>
            <li>Construcción y compilación de <code>fontur_contratacion.json</code></li>
          </ul>
        </section>

      </div>
      
      <footer className="ruta-footer">
        <a href="/" className="back-link">← Volver al Centro de Innovación</a>
      </footer>
    </div>
  );
}
