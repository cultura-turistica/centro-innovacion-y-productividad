import React from 'react';
import { notFound } from 'next/navigation';

// Layout and Navigation
import CourseModuleLayout from '@/components/layout/CourseModuleLayout';
import ModuleHero from '@/components/ui/interactivos/ModuleHero';
import ModuleNavigation from '@/components/ui/interactivos/ModuleNavigation';
import PhotoHero from '@/components/ui/interactivos/PhotoHero';

// Components (Marca specific components for Phase 1)
import MentorGuide from '@/components/ui/interactivos/MentorGuide';
import ComparisonCards from '@/components/ui/interactivos/ComparisonCards';
import ArchetypeMatcher from '@/components/ui/interactivos/ArchetypeMatcher';
import ArtQuote from '@/components/ui/interactivos/ArtQuote';
import GridBlock from '@/components/ui/interactivos/GridBlock';
import ColorPsychologyLab from '@/components/ui/interactivos/ColorPsychologyLab';
import TypographyTester from '@/components/ui/interactivos/TypographyTester';
import ToneBuilder from '@/components/ui/interactivos/ToneBuilder';

// Components (Fotografía Phase 3)
import InfoBlock from '@/components/ui/interactivos/InfoBlock';
import PhotoGallery from '@/components/ui/interactivos/PhotoGallery';
import BeforeAfterSlider from '@/components/ui/interactivos/BeforeAfterSlider';
import PhoneMockupBlock from '@/components/ui/interactivos/PhoneMockupBlock';
import CameraSimulator from '@/components/ui/interactivos/CameraSimulator';

// Componentes de Turismo Comunitario (Phase 2)
import InteractivePillars from '@/components/ui/interactivos/InteractivePillars';
import ReflectionTabs from '@/components/ui/interactivos/ReflectionTabs';
import AudioPodcast from '@/components/academia/AudioPodcast';
import ActionAccordion from '@/components/ui/interactivos/ActionAccordion';
import TheoryIntro from '@/components/ui/interactivos/TheoryIntro';
import MatchGame from '@/components/ui/interactivos/MatchGame';
import NodeChain from '@/components/ui/interactivos/NodeChain';
import DecisionSimulator from '@/components/ui/interactivos/DecisionSimulator';
import CaseStudyViewer from '@/components/ui/interactivos/CaseStudyViewer';

// Componentes de Diseño de Producto (Phase 4)
import EmpathyMap from '@/components/ui/interactivos/EmpathyMap';
import CaseBlock from '@/components/ui/interactivos/CaseBlock';
import StoryboardCards from '@/components/ui/interactivos/StoryboardCards';
import InteractiveVectorScene from '@/components/ui/interactivos/InteractiveVectorScene';
import QuizExercise from '@/components/ui/interactivos/QuizExercise';
import GapMatrix from '@/components/ui/interactivos/GapMatrix';
import ProductSheet from '@/components/ui/interactivos/ProductSheet';
import StepList from '@/components/ui/interactivos/StepList';
import PairMatchGame from '@/components/ui/interactivos/PairMatchGame';
import ComparisonBlock from '@/components/ui/interactivos/ComparisonBlock';

// Componentes de Experiencias Privadas (Phase 5)
import AudienceSelector from '@/components/ui/interactivos/AudienceSelector';
import BottleneckSimulator from '@/components/ui/interactivos/BottleneckSimulator';
import InteractiveCaseStudy from '@/components/ui/interactivos/InteractiveCaseStudy';
import InterviewSimulator from '@/components/ui/interactivos/InterviewSimulator';
import MatrizPriorizacion from '@/components/ui/interactivos/MatrizPriorizacion';
import ValueFormulaBuilder from '@/components/ui/interactivos/ValueFormulaBuilder';

// Registry
import { dataRegistry } from '@/data/moduleRegistry';
import { getCourseConfig } from '@/data/courseRegistry';

// SEO Metadatos Dinámicos
export async function generateMetadata({ params }) {
  const { curso, modulo } = await params;
  const courseData = dataRegistry[curso];
  
  if (!courseData || !courseData[modulo]) {
    return { title: 'Módulo no encontrado' };
  }
  
  const moduloData = courseData[modulo];
  const config = getCourseConfig(curso);
  const moduleTitle = moduloData.header?.title || `Módulo ${modulo.split('-')[1]}`;
  
  return {
    title: `${moduleTitle} | ${config.title} - CIP Next`,
    description: moduloData.header?.description?.replace(/<[^>]*>?/gm, '') || `Estudia el ${moduleTitle} del curso ${config.title}.`
  };
}

// Static Export requirement
export async function generateStaticParams() {
  const params = [];
  for (const curso in dataRegistry) {
    for (const modulo in dataRegistry[curso]) {
      params.push({ curso, modulo });
    }
  }
  return params;
}

export default async function DynamicModulePage({ params }) {
  const { curso, modulo } = await params; 

  const courseData = dataRegistry[curso];
  if (!courseData) return notFound();

  const moduloData = courseData[modulo];
  if (!moduloData) return notFound();

  const config = getCourseConfig(curso);

  // Parsing next/prev
  const moduloNumber = parseInt(modulo.split('-')[1]);
  const nextModuloData = courseData[`modulo-${moduloNumber + 1}`];

  const themeColor = config.themeColor || "#e11d48";
  const courseTitle = config.title || curso.replace(/-/g, ' ').toUpperCase();

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle={courseTitle}
      breadcrumbCourseUrl={`/academia/cursos/${curso}`}
      moduleTitle={moduloData.header?.title || `Módulo ${moduloNumber}`}
      themeColor={themeColor}
    >
      {/* 1. Header (Resolviendo colisión ModuleHero vs PhotoHero explícitamente sin duck-typing de JSON) */}
      {moduloData.photoHeader && (
        <PhotoHero data={moduloData.photoHeader} themeColor={themeColor} />
      )}
      {moduloData.header && (
        <ModuleHero data={moduloData.header} themeColor={themeColor} />
      )}

      {/* Componentes Genéricos y de Fotografía (Phase 3) */}
      {moduloData.infoBlock1 && (
        <InfoBlock data={moduloData.infoBlock1} themeColor={themeColor} />
      )}
      
      {moduloData.gridBlock1 && (
        <GridBlock 
          data={moduloData.gridBlock1} 
          themeColor={themeColor} 
          columns={moduloData.gridBlock1.columns || 3} 
        />
      )}

      {moduloData.photoGallery && (
        <PhotoGallery data={moduloData.photoGallery} themeColor={themeColor} />
      )}
      
      {moduloData.photoGallery1 && (
        <PhotoGallery data={moduloData.photoGallery1} themeColor={themeColor} />
      )}
      
      {moduloData.photoGallery2 && (
        <PhotoGallery data={moduloData.photoGallery2} themeColor={themeColor} />
      )}

      {moduloData.beforeAfterSliders && moduloData.beforeAfterSliders.map((slider, idx) => (
        <BeforeAfterSlider key={slider.id || idx} {...slider} title={slider.title} themeColor={themeColor} />
      ))}

      {moduloData.phoneMockupBlock && (
        <PhoneMockupBlock data={moduloData.phoneMockupBlock} themeColor={themeColor} />
      )}

      {moduloData.cameraSimulator && (
        <CameraSimulator data={moduloData.cameraSimulator} themeColor={themeColor} />
      )}

      {moduloData.infoBlock2 && (
        <InfoBlock data={moduloData.infoBlock2} themeColor={themeColor} />
      )}

      {/* Componentes de Marca (Phase 1) - Renderizado Condicional Puro */}
      
      {/* Módulo 1 */}
      {moduloData.content?.mentor && (
        <MentorGuide data={moduloData.content.mentor} themeColor={themeColor} />
      )}

      {moduloData.content?.comparisonData && (
        <ComparisonCards data={moduloData.content.comparisonData} />
      )}

      {moduloData.content?.quote && (
        <ArtQuote 
          quote={moduloData.content.quote.quote} 
          author={moduloData.content.quote.author} 
          role={moduloData.content.quote.role} 
          themeColor={themeColor} 
        />
      )}

      {moduloData.content?.gridData && (
        <div className="pb-16 max-w-5xl mx-auto -mt-8 relative z-10">
          <GridBlock 
            data={moduloData.content.gridData} 
            themeColor={themeColor} 
            themeBg="bg-white" 
            themeBorder="border-slate-100" 
            columns={3} 
          />
        </div>
      )}

      {/* Módulos 2-5 (Nuevas llaves estructuradas) */}
      {moduloData.archetypeMatcher && (
        <div className="py-12">
          <ArchetypeMatcher data={moduloData.archetypeMatcher} themeColor={themeColor} />
        </div>
      )}

      {moduloData.colorPsychologyLab && (
        <div className="py-12">
          <ColorPsychologyLab data={moduloData.colorPsychologyLab} />
        </div>
      )}

      {moduloData.typographyTester && (
        <div className="py-12">
          <TypographyTester data={moduloData.typographyTester} />
        </div>
      )}

      {moduloData.toneBuilder && (
        <div className="py-12">
          <ToneBuilder data={moduloData.toneBuilder} />
        </div>
      )}

      {/* Componentes de Turismo Comunitario (Phase 2) */}
      
      {moduloData.audioPodcast && (
        <AudioPodcast data={moduloData.audioPodcast} />
      )}

      {moduloData.actionAccordion && (
        <ActionAccordion data={moduloData.actionAccordion} />
      )}

      {moduloData.theoryIntro && (
        <TheoryIntro data={moduloData.theoryIntro} />
      )}

      {moduloData.comparisonCards && (
        <ComparisonCards data={moduloData.comparisonCards} />
      )}

      {moduloData.interactivePillars && (
        <InteractivePillars data={moduloData.interactivePillars} />
      )}

      {moduloData.matchGame && (
        <MatchGame data={moduloData.matchGame} />
      )}

      {moduloData.nodeChain && (
        <NodeChain data={moduloData.nodeChain} />
      )}

      {moduloData.decisionSimulator && (
        <DecisionSimulator data={moduloData.decisionSimulator} />
      )}

      {moduloData.caseStudyViewer && (
        <CaseStudyViewer data={moduloData.caseStudyViewer} />
      )}

      {moduloData.reflectionTabs && (
        <ReflectionTabs data={moduloData.reflectionTabs} />
      )}

      {/* Componentes de Diseño de Producto (Phase 4) */}
      
      {moduloData.empathyMap && (
        <EmpathyMap data={moduloData.empathyMap} themeColor={themeColor} />
      )}

      {moduloData.caseBlock && (
        <CaseBlock data={moduloData.caseBlock} themeColor={themeColor} />
      )}

      {moduloData.storyboardCards && (
        <StoryboardCards data={moduloData.storyboardCards} themeColor={themeColor} />
      )}

      {moduloData.interactiveVectorScene && (
        <InteractiveVectorScene />
      )}

      {moduloData.quizExercise && (
        <QuizExercise data={moduloData.quizExercise} themeColor={themeColor} />
      )}

      {moduloData.gapMatrix && (
        <GapMatrix data={moduloData.gapMatrix} themeColor={themeColor} />
      )}

      {moduloData.productSheet && (
        <ProductSheet data={moduloData.productSheet} themeColor={themeColor} />
      )}

      {moduloData.stepList1 && (
        <StepList data={moduloData.stepList1} themeColor={themeColor} />
      )}

      {moduloData.pairMatchGame && (
        <PairMatchGame data={moduloData.pairMatchGame} themeColor={themeColor} />
      )}

      {moduloData.comparisonBlock && (
        <ComparisonBlock data={moduloData.comparisonBlock} themeColor={themeColor} />
      )}

      {moduloData.infoBlockAlert && (
        <InfoBlock data={moduloData.infoBlockAlert} themeColor={themeColor} />
      )}

      {/* Componentes de Experiencias Privadas (Phase 5) */}
      
      {moduloData.interviewSimulator && (
        <InterviewSimulator data={moduloData.interviewSimulator} themeColor={themeColor} />
      )}

      {moduloData.valueFormulaBuilder && (
        <ValueFormulaBuilder data={moduloData.valueFormulaBuilder} themeColor={themeColor} />
      )}

      {moduloData.bottleneckSimulator && (
        <BottleneckSimulator data={moduloData.bottleneckSimulator} themeColor={themeColor} />
      )}

      {moduloData.audienceSelector && (
        <AudienceSelector data={moduloData.audienceSelector} themeColor={themeColor} />
      )}

      {moduloData.matrizPriorizacion && (
        <MatrizPriorizacion data={moduloData.matrizPriorizacion} themeColor={themeColor} />
      )}

      {moduloData.interactiveCaseStudy && (
        <InteractiveCaseStudy data={moduloData.interactiveCaseStudy} themeColor={themeColor} />
      )}
      
      {moduloData.dimensionesGrid && (
        <GridBlock data={moduloData.dimensionesGrid} themeColor={themeColor} columns={3} />
      )}

      {/* 4. Navegación Inferior */}
      <ModuleNavigation 
        prevUrl={moduloNumber > 1 ? `/academia/cursos/${curso}/modulo-${moduloNumber - 1}` : null}
        nextUrl={nextModuloData ? `/academia/cursos/${curso}/modulo-${moduloNumber + 1}` : `/academia/cursos/${curso}/certificacion`}
        courseUrl={`/academia/cursos/${curso}`}
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
