import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Términos y Condiciones de Uso | CIP Cultura T',
  description: 'Términos y condiciones de uso de la plataforma del Centro de Innovación y Productividad (CIP) de CULTURA T S.A.S. en Colombia.',
  alternates: {
    canonical: 'https://cip.cultura-t.com/terminos',
  },
};

export default function TerminosCondicionesPage() {
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
              Plataforma Institucional y Académica • República de Colombia
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Términos y Condiciones de Uso
            </h1>
            <p className="text-sm text-slate-500">
              CULTURA T S.A.S. • NIT: 901.144.063-0 • Centro de Innovación y Productividad (CIP) • Bogotá D.C., Colombia
            </p>
          </header>

          {/* 1. Naturaleza */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">1. Objeto, Alcance Institucional y Articulación con el CIP</h2>
            <p className="text-sm md:text-base">
              La presente plataforma digital es operada por <strong>CULTURA T S.A.S.</strong> (con sigla comercial <strong>CULTUR</strong>, NIT: 901.144.063-0, Bogotá D.C.) a través de su <strong>Centro de Innovación y Productividad (CIP)</strong>, constituyéndose como un entorno de formación abierta, desarrollo metodológico, divulgación científica, medición de impacto territorial y laboratorios de analítica en Colombia.
            </p>
            <p className="text-sm md:text-base">
              De conformidad con su objeto social, CULTURA T S.A.S. despliega operaciones en desarrollo turístico, planificación territorial, sostenibilidad, transformación digital, fortalecimiento comunitario y educación. El CIP actúa como el brazo metodológico y tecnológico para estas líneas de acción, procesando, modelando y transfiriendo los insumos e investigaciones recopilados con el fin de <strong>medir el impacto social y pedagógico, evidenciar avances y cobertura</strong>, y sustentar balances de gestión ante cooperantes internacionales, entidades públicas (como MinCIT, FONTUR o entes territoriales) y el sector empresarial.
            </p>
            <p className="text-sm md:text-base">
              El acceso público a las herramientas abiertas y módulos de autoaprendizaje no limita el derecho de CULTURA T S.A.S. y sus aliados para celebrar contratos, prestar servicios remunerados de consultoría, interventoría y auditoría integral, u operar iniciativas comerciales derivadas de las capacidades y metodologías del ecosistema.
            </p>
          </section>

          {/* 2. Menores de Edad, Interés Superior y Protección Reforzada */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">2. Vocación Pedagógica Abierta y Protección de Menores de Edad</h2>
            <p className="text-sm md:text-base">
              <strong>CULTURA T S.A.S. procura no recolectar datos personales de menores de edad sin la previa autorización expresa de sus padres o representantes legales, velando en todo momento por su interés superior.</strong>
            </p>
            <p className="text-sm md:text-base">
              Nuestra plataforma está concebida como un entorno amigable, intuitivo y de acceso abierto para democratizar el conocimiento sobre turismo, territorio, ciencia, innovación y productividad. Jóvenes estudiantes, comunidades y personas de cualquier edad pueden explorar libremente los módulos para aprender, analizar problemáticas locales y generar reportes o insumos investigativos y exploratorios aplicados a sus regiones.
            </p>
            <p className="text-sm md:text-base">
              En caso de que un menor acceda y utilice los servicios formativos o herramientas del portal, se asume que cuenta con la debida supervisión y autorización de sus acudientes. Si usted es el padre o representante legal de un menor y descubre que este nos ha proporcionado datos de contacto, puede solicitar su <strong>supresión inmediata</strong> a través de nuestro canal oficial de atención (<a href="mailto:admin@cultura-t.com" className="text-slate-900 font-medium underline">admin@cultura-t.com</a>).
            </p>
          </section>

          {/* 3. Ecosistema Abierto, Licenciamiento Creative Commons y Datos Públicos */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">3. Ecosistema Abierto, Licenciamiento Creative Commons y Datos Públicos</h2>
            <p className="text-sm md:text-base">
              <strong>Filosofía Abierta: Replicar, Rehacer y Retroalimentar:</strong> La arquitectura de software, calculadoras interactivas, mapas, metodologías de diseño y componentes formativos de esta plataforma forman parte de un ecosistema abierto alojado públicamente en GitHub. Fomentamos activamente una cultura de innovación colaborativa: los desarrolladores, estudiantes, instituciones y comunidades <strong>pueden basarse, replicar, rehacer, adaptar y retroalimentar estas herramientas y modelos</strong>, proponiendo mejoras y enriqueciendo el conocimiento aplicado a los territorios.
            </p>
            <p className="text-sm md:text-base">
              <strong>Licenciamiento de Herramientas y Recursos Abiertos (CC BY-NC-SA 4.0):</strong> Para salvaguardar la apropiación comunitaria y evitar la especulación privada por parte de terceros, las herramientas pedagógicas, simuladores y recursos de libre acceso del CIP se difunden bajo la licencia internacional <strong>Creative Commons Atribución-NoComercial-CompartirIgual 4.0 (CC BY-NC-SA 4.0)</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm md:text-base pl-2 text-slate-600">
              <li><strong>Atribución (BY):</strong> Quien utilice o adapte los recursos debe dar el crédito obligatorio y citar expresamente al <em>Centro de Innovación y Productividad (CIP) de CULTURA T S.A.S.</em> como fuente y autor original.</li>
              <li><strong>No Comercial (NC):</strong> Ningún tercero o entidad externa podrá comercializar, revender ni lucrarse económicamente a partir de estos contenidos o herramientas (reserva de aprovechamiento y explotación económica privativa de CULTURA T S.A.S. y sus alianzas autorizadas).</li>
              <li><strong>Compartir Igual (SA):</strong> Quien replique, rehaga o derive adaptaciones de estos recursos deberá distribuir sus aportes bajo los mismos términos de acceso abierto, retroalimentando el ecosistema público.</li>
            </ul>
            <p className="text-sm md:text-base">
              <strong>Publicaciones del Sello Editorial CIP: Contenidos Exactos (CC BY-NC-ND 4.0):</strong> Se exceptúan de alteraciones las obras, libros, capítulos, artículos científicos y documentos de investigación publicados bajo el <strong>Sello Editorial del CIP</strong> (amparados con registro de ISBN/ISSN ante la Cámara Colombiana del Libro). Para salvaguardar su rigor y paternidad intelectual bajo la <strong>Ley 23 de 1982 y la Ley 1915 de 2018</strong>, estos textos se licencian bajo <strong>Creative Commons Atribución-NoComercial-SinDerivadas 4.0 (CC BY-NC-ND 4.0)</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm md:text-base pl-2 text-slate-600">
              <li><strong>Contenidos Exactos e Íntegros:</strong> Las publicaciones deben conservarse, citarse y compartirse de manera íntegra y exacta, sin modificaciones, adaptaciones ni obras derivadas que distorsionen la investigación.</li>
              <li><strong>Prohibición de Lucro de Terceros:</strong> Se prohíbe el plagio, la reproducción con fines mercantiles o cualquier explotación económica no autorizada expresamente por CULTURA T S.A.S.</li>
            </ul>
            <p className="text-sm md:text-base">
              <strong>Coexistencia con Datos Abiertos de Colombia (datos.gov.co):</strong> La plataforma articula y procesa datos públicos abiertos del Estado colombiano (provenientes de DANE, MinCIT, FONTUR y entidades sectoriales). De acuerdo con la Ley 1712 de 2014 y los lineamientos del portal nacional <strong>datos.gov.co</strong> (licenciados usualmente bajo esquemas abiertos CC BY o CC BY-SA 4.0), dichos datos son de libre consulta ciudadana y se aprovechan respetando las condiciones y atribución dispuestas por cada entidad emisora.
            </p>
          </section>

          {/* 4. Certificaciones y Validación */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">4. Certificaciones Académicas y Sello Criptográfico</h2>
            <p className="text-sm md:text-base">
              La expedición de certificados oficiales exige la aprobación satisfactoria de las pruebas de conocimiento (80% o más de aciertos) y el registro formal de los datos del participante (nombres completos, cédula y correo electrónico).
            </p>
            <p className="text-sm md:text-base">
              Cada diploma emitido incorpora un Sello Criptográfico único registrado en el libro oficial de egresados para habilitar su verificación pública e instantánea en <Link href="/verificar" className="text-slate-900 font-medium underline">/verificar</Link>. El usuario es civil y legalmente responsable de la autenticidad y titularidad de los datos que consigna para la expedición de sus credenciales.
            </p>
          </section>

          {/* 5. Simuladores y Calculadoras */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">5. Carácter Pedagógico de Simuladores y Estimaciones</h2>
            <p className="text-sm md:text-base">
              Las herramientas de cálculo (como la Calculadora de Costeo Turístico y los simuladores de huella de carbono) se ofrecen como herramientas pedagógicas y referenciales. CULTURA T S.A.S. no asume responsabilidad civil, contractual ni financiera por acuerdos, inversiones o contratos comerciales que los usuarios celebren con base en las simulaciones automáticas arrojadas por la plataforma.
            </p>
          </section>

          {/* 6. Solución Amistosa, Ley Aplicable y Jurisdicción */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">6. Solución Amistosa, Ley Aplicable y Domicilio Contractual</h2>
            <p className="text-sm md:text-base">
              Los presentes términos y el uso del portal se rigen e interpretan de manera privativa por el ordenamiento jurídico de la <strong>República de Colombia</strong>.
            </p>
            <p className="text-sm md:text-base">
              Ante cualquier duda, inquietud o controversia surgida del acceso o uso de la plataforma, las partes se comprometen a buscar prioritariamente una <strong>solución directa, amigable y concertada</strong> a través del canal oficial de atención (<a href="mailto:admin@cultura-t.com" className="text-slate-900 font-medium underline">admin@cultura-t.com</a>), dentro de un plazo de treinta (30) días hábiles contados a partir de la notificación escrita.
            </p>
            <p className="text-sm md:text-base">
              En caso de no alcanzarse un acuerdo directo, las partes fijan como domicilio contractual exclusivo la ciudad de <strong>Bogotá D.C., Colombia</strong>, renunciando a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.
            </p>
          </section>

          {/* Enlaces de pie */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Última revisión: Noviembre de 2026</span>
            <Link href="/privacidad" className="text-slate-900 font-semibold hover:underline">
              Ir a Política de Privacidad (Habeas Data) →
            </Link>
          </div>

        </article>

      </div>
    </div>
  );
}
