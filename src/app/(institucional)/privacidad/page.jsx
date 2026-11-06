import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad y Tratamiento de Datos Personales | CULTURA T & CIP',
  description: 'Política Integral de Tratamiento de Datos Personales de CULTURA T S.A.S. y su Centro de Innovación y Productividad (CIP), conforme a la Ley 1581 de 2012 y Decreto 1377 de 2013 de la República de Colombia.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://cip.cultura-t.com/privacidad',
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="py-12 md:py-20 text-slate-800 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Navegación simple */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            ← Volver al Inicio
          </Link>
        </div>

        {/* ÚNICA CAJA LIMPIA DE LECTURA */}
        <article className="bg-white p-8 md:p-14 rounded-2xl border border-slate-200/90 shadow-sm text-slate-700 leading-relaxed space-y-8">
          
          {/* Encabezado */}
          <header className="border-b border-slate-200 pb-8">
            <span className="text-xs font-bold tracking-wider uppercase text-slate-500 block mb-2">
              Marco Legal Colombiano • Ley 1581 de 2012 y Decreto 1377 de 2013
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Política de Privacidad y Tratamiento de Datos Personales
            </h1>
            <p className="text-sm text-slate-500">
              CULTURA T S.A.S. (Sigla: CULTUR) • NIT: 901.144.063-0 • Centro de Innovación y Productividad (CIP) • Bogotá D.C., Colombia
            </p>
          </header>

          {/* 1. Alcance, Rol Empresarial y Articulación con el CIP */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">1. Alcance, Identificación del Responsable y Articulación Institucional</h2>
            <p className="text-sm md:text-base">
              La presente Política regula la recolección, almacenamiento, uso, procesamiento, circulación y aprovechamiento de datos personales por parte de <strong>CULTURA T S.A.S.</strong> (con sigla comercial <strong>CULTUR</strong>, identificada con NIT: 901.144.063-0), sociedad comercial de duración indefinida domiciliada en la ciudad de Bogotá D.C., en calidad de <strong>Responsable del Tratamiento de la Información</strong>, en estricto cumplimiento del Artículo 15 de la Constitución Política de Colombia, la <strong>Ley 1581 de 2012</strong> y el <strong>Decreto 1377 de 2013</strong>.
            </p>
            <p className="text-sm md:text-base">
              De conformidad con su objeto social, CULTURA T S.A.S. despliega operaciones en desarrollo turístico, planificación territorial, sostenibilidad, transformación digital, fortalecimiento comunitario y educación. El <strong>Centro de Innovación y Productividad (CIP)</strong> actúa como el brazo metodológico y tecnológico para estas líneas de acción, procesando, modelando y transfiriendo los insumos e investigaciones recopilados.
            </p>
            <p className="text-sm md:text-base">
              Al interactuar con la plataforma web, participar en proyectos territoriales, responder encuestas de campo o suscribir acuerdos comerciales con CULTURA T S.A.S., el titular otorga su <strong>autorización previa, expresa, informada e inequívoca</strong> para el tratamiento de su información conforme a las finalidades descritas en esta política.
            </p>
          </section>

          {/* 2. Categorías de Datos y Tratamiento de Información Sensible */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">2. Categorías de Datos y Tratamiento de Información Sensible</h2>
            <p className="text-sm md:text-base">
              <strong>Plataforma Digital y Módulos de Aprendizaje:</strong> Para la navegación general, consulta de herramientas y realización de cursos en el portal web del CIP, <strong>no se condiciona el acceso ni se solicitan datos de carácter sensible</strong>. La información recolectada vía web se limita a datos generales de identificación y contacto (nombres, documento, correo), progreso formativo y métricas técnicas de interacción.
            </p>
            <p className="text-sm md:text-base">
              <strong>Estudios de Campo, Consultorías y Diagnósticos Sociales:</strong> En ejercicio de su actividad de consultoría e investigación territorial, CULTURA T S.A.S. desarrolla diagnósticos sectoriales, caracterizaciones sociodemográficas, análisis con enfoque de género o diversidad, estudios sobre problemáticas complejas (incluyendo prevención de explotación sexual en contextos turísticos - ESCNNA o salud pública), proyectos de inclusión con comunidades étnicas y programas de atención a víctimas del conflicto. En tales proyectos, CULTURA T S.A.S. <strong>podrá recolectar datos clasificados como sensibles</strong> conforme al artículo 5 de la Ley 1581 de 2012.
            </p>
            <p className="text-sm md:text-base">
              <strong>Garantías Reforzadas para Datos Sensibles (Art. 6 Ley 1581 de 2012 y Decreto 1377 de 2013):</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-2 text-slate-600">
              <li><strong>Carácter Estrictamente Facultativo:</strong> Se informa de manera previa y expresa al titular que <strong>no está obligado en ningún caso a responder preguntas sobre datos sensibles</strong> (tales como origen étnico, género, diversidad, salud, victimización o vida íntima). Su suministro es enteramente libre y voluntario.</li>
              <li><strong>Autorización Explícita y Específica:</strong> La recolección de datos sensibles exige el consentimiento previo, informado y explícito del participante o de su representante legal, detallando la finalidad precisa del estudio.</li>
              <li><strong>Finalidad Científica, Estadística y Diagnóstica:</strong> Dicha información se trata con propósitos exclusivamente investigativos, analíticos, de diagnóstico territorial y formulación de políticas públicas o proyectos comunitarios.</li>
              <li><strong>Protocolos de Anonimización y Disociación:</strong> CULTURA T S.A.S. implementa estrictas medidas de confidencialidad y disociación. Los tableros, indicadores, mapas del CIP y memorias entregadas a cooperantes o entidades públicas presentan datos agregados y estadísticas anonimizadas, asegurando que ningún titular pueda ser identificado individualmente ni expuesto a discriminación.</li>
            </ul>
          </section>

          {/* 3. Registro Audiovisual, Fotografías y Derechos de Autor */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">3. Registro Audiovisual, Producción de Contenidos y Derechos de Autor</h2>
            <p className="text-sm md:text-base">
              Dado que la producción audiovisual, la fotografía y el diseño gráfico forman parte esencial del objeto social de CULTURA T S.A.S., en el desarrollo de sus visitas de campo, talleres comunitarios, consultorías territoriales, ferias y eventos públicos se realizan de manera habitual capturas fotográficas, grabaciones de video, registros sonoros y entrevistas.
            </p>
            <p className="text-sm md:text-base">
              <strong>Uso de Imagen y Evidencias de Proyecto:</strong> Los participantes, asistentes y colaboradores autorizan expresamente a CULTURA T S.A.S. para que su imagen, voz y testimonios sean fijados, reproducidos y divulgados como evidencia de avance técnico, memorias de gestión ante cooperantes y entidades públicas (como MinCIT, FONTUR o alcaldías), piezas formativas en el CIP y material de difusión institucional o comercial.
            </p>
            <p className="text-sm md:text-base">
              <strong>Cesión de Derechos Patrimoniales y Respeto a Derechos Morales:</strong> En caso de que participantes o colaboradores suministren registros gráficos, piezas o insumos en el marco de las actividades, se entiende conferida a CULTURA T S.A.S. la <strong>cesión de los derechos patrimoniales y económicos de autor</strong> (edición, publicación, distribución y comunicación pública). CULTURA T S.A.S. ratifica su <strong>respeto irrestricto y permanente a los derechos morales de autor</strong> (paternidad e integridad de la obra), en consonancia con la <strong>Ley 23 de 1982 y la Ley 1915 de 2018</strong>.
            </p>
          </section>

          {/* 4. Finalidades del Tratamiento */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">4. Finalidades Integrales del Tratamiento</h2>
            <p className="text-sm md:text-base">
              El titular autoriza a CULTURA T S.A.S. y al CIP a tratar sus datos para las siguientes finalidades institucionales y comerciales:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm md:text-base pl-2 text-slate-600">
              <li><strong>Medición de Impacto Territorial y Evidencia de Logros:</strong> Cuantificar, validar y visibilizar la cobertura, avances y efectividad social de los proyectos; consolidar balances técnicos e informes de gestión ante entidades del Estado (MinCIT, FONTUR, entes territoriales), organismos de cooperación internacional y aliados estratégicos.</li>
              <li><strong>Soporte y Ejecución de Consultorías y Estudios:</strong> Alimentar los diagnósticos sectoriales, análisis de capacidad de carga, formulación de planes de manejo y proyectos de asesoría estratégica prestados por CULTURA T S.A.S.</li>
              <li><strong>Desarrollo de Negocios y Alianzas Comerciales:</strong> Estructurar, prospectar y promover iniciativas comerciales, proyectos de inversión territorial, programas de consultoría remunerada y servicios tecnológicos desarrollados por CULTURA T S.A.S. o en conjunto con sus aliados.</li>
              <li><strong>Certificación Académica y Libro de Egresados:</strong> Expedir diplomas con sello criptográfico único y habilitar su consulta pública en <Link href="/verificar" className="text-slate-900 font-medium underline">/verificar</Link>.</li>
              <li><strong>Comunicaciones y Difusión Directa:</strong> Enviar convocatorias, boletines informativos, publicaciones de investigación y portafolios comerciales a través de correo electrónico o canales digitales institucionales.</li>
            </ol>
          </section>

          {/* 5. Menores de Edad, Interés Superior y Protección Reforzada */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">5. Protección de Menores de Edad e Interés Superior</h2>
            <p className="text-sm md:text-base">
              <strong>CULTURA T S.A.S. procura no recolectar datos personales de menores de edad sin la previa autorización expresa de sus padres o representantes legales, velando en todo momento por su interés superior</strong> y sus derechos fundamentales, en consonancia con la jurisprudencia de la Corte Constitucional y los lineamientos de la Superintendencia de Industria y Comercio (SIC).
            </p>
            <p className="text-sm md:text-base">
              Nuestra plataforma está concebida como un entorno amigable, intuitivo y de acceso abierto para democratizar el conocimiento sobre turismo, territorio, ciencia, innovación y productividad. En caso de que un menor acceda y utilice los servicios formativos o herramientas del portal, se asume que cuenta con la debida supervisión y autorización de sus padres o tutores legales.
            </p>
            <p className="text-sm md:text-base">
              Si usted es el padre, madre o representante legal de un menor y descubre que este nos ha proporcionado datos de contacto sin su debido consentimiento, puede solicitar su <strong>supresión inmediata</strong> a través de nuestro canal oficial de atención (<a href="mailto:admin@cultura-t.com" className="text-slate-900 font-medium underline">admin@cultura-t.com</a>).
            </p>
          </section>

          {/* 6. Coexistencia con Datos Abiertos de Colombia */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">6. Coexistencia con Datos Abiertos de Colombia (datos.gov.co)</h2>
            <p className="text-sm md:text-base">
              Nuestros Laboratorios de Datos y herramientas de visualización territorial integran y procesan <strong>conjuntos de datos abiertos y registros públicos oficiales del Estado colombiano</strong> (articulados a la iniciativa nacional de <strong>datos.gov.co</strong>, DANE, MinCIT y FONTUR bajo la Ley 1712 de 2014 y licencias abiertas de tipo CC BY / CC BY-SA). 
            </p>
            <p className="text-sm md:text-base">
              Estos datos abiertos son de libre consulta ciudadana y no están sujetos a reserva de carácter personal. Los modelos cartográficos, algoritmos de cruce, índices de correlación y visualizaciones derivadas desarrolladas por CULTURA T S.A.S. sobre dichas bases son creaciones metodológicas propias y forman parte de los activos del CIP.
            </p>
          </section>

          {/* 7. Derechos del Titular (Habeas Data) */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">7. Derechos del Titular y Procedimiento de Atención</h2>
            <p className="text-sm md:text-base">
              De conformidad con el artículo 8 de la Ley 1581 de 2012 y el Decreto 1377 de 2013, el titular de la información podrá ejercer en cualquier momento los siguientes derechos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-2 text-slate-600">
              <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales frente a datos parciales, inexactos, incompletos, fraccionados o que induzcan a error.</li>
              <li><strong>Solicitar prueba de la autorización</strong> otorgada a CULTURA T S.A.S. para el tratamiento de sus datos personales.</li>
              <li><strong>Ser informado</strong> por CULTURA T S.A.S., previa solicitud, respecto del uso y finalidades a las que han sido destinados sus datos.</li>
              <li><strong>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC)</strong> por presuntas infracciones a lo dispuesto en la Ley 1581 de 2012 y demás normas concordantes, una vez agotado el trámite de consulta o reclamo directo ante CULTURA T S.A.S.</li>
              <li><strong>Revocar la autorización y/o solicitar la supresión</strong> de sus datos de contacto de nuestras bases comerciales, siempre que no medie un deber legal o contractual de conservarlos.</li>
            </ul>
            <p className="text-sm font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-100 mt-3">
              Canal Oficial de Atención: <a href="mailto:admin@cultura-t.com" className="text-indigo-600 underline">admin@cultura-t.com</a><br />
              Asunto: Solicitud Tratamiento de Datos Personales (Habeas Data)<br />
              Entidad: CULTURA T S.A.S. — Centro de Innovación y Productividad (CIP)<br />
              Domicilio: Carrera 6 No. 13 A - 86 Sur, Bogotá D.C., Colombia
            </p>
            <p className="text-xs text-slate-500">
              Términos de respuesta legal: diez (10) días hábiles para consultas y quince (15) días hábiles para reclamos.
            </p>
          </section>

          {/* 8. Seguridad y Período de Vigencia */}
          <section className="space-y-4 border-t border-slate-200 pt-6">
            <h2 className="text-lg font-bold text-slate-900">8. Seguridad y Período de Vigencia</h2>
            <p className="text-sm text-slate-600">
              CULTURA T S.A.S. aplica protocolos de cifrado y autenticación criptográfica SHA-256 para salvaguardar la integridad de las bases de datos. Los datos personales permanecerán en nuestros sistemas durante el tiempo necesario para el cumplimiento de las finalidades formativas, comerciales y de registro histórico autorizadas.
            </p>
          </section>

          {/* Enlaces de pie */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Última revisión: Noviembre de 2026</span>
            <Link href="/terminos" className="text-slate-900 font-semibold hover:underline">
              Ir a Términos y Condiciones →
            </Link>
          </div>

        </article>

      </div>
    </div>
  );
}
