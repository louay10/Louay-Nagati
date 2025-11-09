'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Github, Sparkles, Zap } from 'lucide-react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'

export function Projects() {
  const { language } = useLanguageTheme()
  const [index, setIndex] = useState(0)
  const [imgIndex, setImgIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState('right')
  const ref = useRef<HTMLElement | null>(null)

  const projects = [
    {
      id: 'due-diligence',
      titleFR: 'Due Diligence – Application Web d\'Analyse de Documents',
      titleEN: 'Due Diligence – Document Analysis Web Application',
      subtitleFR: '1er prix Data Science - Bal des Projets ESPRIT',
      subtitleEN: '1st Prize Data Science - ESPRIT Projects Ball',
      descriptionFR:
        "Application web complète développée avec Streamlit pour l'analyse et l'extraction automatique d'informations de documents complexes. Intégration de modules de web scraping, parsing NLP, génération de rapports automatisés, et chatbot Human-in-the-Loop alimenté par des LLMs et pipeline RAG. Architecture avec graphe de connaissances Neo4j et base documentaire MongoDB.",
      descriptionEN:
        "Complete web application developed with Streamlit for automatic analysis and information extraction from complex documents. Integration of web scraping modules, NLP parsing, automated report generation, and Human-in-the-Loop chatbot powered by LLMs and RAG pipeline. Architecture with Neo4j knowledge graph and MongoDB document database.",
      techs: ['Python', 'Streamlit', 'LLMs', 'RAG', 'NLP', 'Neo4j', 'MongoDB', 'Web Scraping'],
      demo: 'https://www.youtube.com/watch?v=uqfPpqZu5Ow',
      hasDemo: true,
      images: ['/projects/duedil1.png', '/projects/duedil2.png', '/projects/duedil3.png'],
    },
    {
      id: 'esg-platform',
      titleFR: 'Plateforme IA d\'Analyse ESG',
      titleEN: 'AI ESG Analysis Platform',
      subtitleFR: 'Stage Data Science & IA - Value',
      subtitleEN: 'Data Science & AI Internship - Value',
      descriptionFR:
        "Développement d'une plateforme automatisée d'analyse de rapports ESG exploitant des modèles de langage (LLM) et des techniques RAG pour l'extraction d'indicateurs pertinents. Conception d'un pipeline de traitement de données en Python combinant OCR et LangChain pour structurer et comparer les métriques issues de sources hétérogènes. Interface interactive de visualisation et benchmarking avec Streamlit.",
      descriptionEN:
        "Development of an automated ESG report analysis platform using language models (LLM) and RAG techniques for relevant indicators extraction. Design of a Python data processing pipeline combining OCR and LangChain to structure and compare metrics from heterogeneous sources. Interactive visualization and benchmarking interface with Streamlit.",
      techs: ['Python', 'Streamlit', 'LLM', 'RAG', 'LangChain', 'OCR', 'Data Pipeline'],
      demo: '#',
      source: '#',
      hasDemo: false,
      images: ['/projects/4 (1).jpeg', '/projects/5 (1).jpeg', '/projects/a (1).jpeg','/projects/b (1).jpeg', '/projects/chatbot (1).jpeg'],
    },
    {
      id: 'real-estate-prediction',
      titleFR: 'Prédiction de Prix Immobiliers',
      titleEN: 'Real Estate Price Prediction',
      subtitleFR: 'Projet Machine Learning',
      subtitleEN: 'End-to-End Machine Learning Project',
      descriptionFR:
        "Conception d'un pipeline de web scraping multi-sources pour collecter et préparer des données immobilières (nettoyage, feature engineering, normalisation). Développement et évaluation de modèles de machine learning (Linear Regression, Random Forest, XGBoost) avec sélection du meilleur modèle selon des métriques robustes. Déploiement dans une application web complète : backend Flask (API REST), frontend React avec visualisations interactives, et authentification sécurisée.",
      descriptionEN:
        "Design of a multi-source web scraping pipeline to collect and prepare real estate data (cleaning, feature engineering, normalization). Development and evaluation of machine learning models (Linear Regression, Random Forest, XGBoost) with selection of the best model based on robust metrics. Deployment in a complete web application: Flask backend (REST API), React frontend with interactive visualizations, and secure authentication.",
      techs: ['Python', 'Machine Learning', 'Flask', 'React', 'Web Scraping', 'XGBoost'],
      demo: '#',
      source: '#',
      hasDemo: false,
      images: ['/projects/1.png', '/projects/2.png', '/projects/3.png'],
    },
    {
      id: 'audio-diffusion',
      titleFR: 'Augmentation de Données Audio par Modèles de Diffusion',
      titleEN: 'Audio Data Augmentation with Diffusion Models',
      subtitleFR: 'Projet Deep Learning Avancé',
      subtitleEN: 'Advanced Deep Learning Project',
      descriptionFR:
        "Conception d'un pipeline de génération de données audio augmentées en exploitant des modèles de diffusion (DDPM) et des autoencodeurs variationnels (VAE). Prétraitement des signaux sonores et transformation en mel-spectrogrammes avec Librosa pour l'entraînement des modèles sous PyTorch. Évaluation des données synthétiques à l'aide d'un classifieur ResNet-50 appliqué à la reconnaissance des émotions.",
      descriptionEN:
        "Design of an augmented audio data generation pipeline using diffusion models (DDPM) and variational autoencoders (VAE). Audio signal preprocessing and transformation into mel-spectrograms with Librosa for model training under PyTorch. Synthetic data evaluation using a ResNet-50 classifier applied to emotion recognition.",
      techs: ['PyTorch', 'Diffusion Models', 'VAE', 'Librosa', 'ResNet-50', 'Deep Learning'],
      demo: '#',
      source: '#',
      hasDemo: false,
      images: [],
    },
    {
      id: 'recruitment-platform',
      titleFR: 'Plateforme de Recrutement Intelligente',
      titleEN: 'Smart Recruitment Platform',
      subtitleFR: 'Stage Développement & IA - Medianet',
      subtitleEN: 'Development & AI Internship - Medianet',
      descriptionFR:
        "Développement d'une plateforme de recrutement avec Laravel (PHP, MySQL) intégrant des outils de gestion des candidatures et entretiens. Conception de modules IA : extraction automatique de CV pour pré-remplissage des formulaires et chatbot de support, complétés par des fonctionnalités interactives (messagerie, planification d'entretiens).",
      descriptionEN:
        "Development of a recruitment platform with Laravel (PHP, MySQL) integrating application and interview management tools. Design of AI modules: automatic CV extraction for form pre-filling and support chatbot, complemented by interactive features (messaging, interview scheduling).",
      techs: ['Laravel', 'PHP', 'MySQL', 'AI', 'Chatbot', 'CV Parsing'],
      demo: '#',
      source: '#',
      hasDemo: false,
      images: [],
    }

  ]

  const active = projects[index]

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => setIsVisible(e.isIntersecting)),
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleNext = () => {
    setDirection('right')
    setIndex((i) => (i + 1) % projects.length)
    setImgIndex(0)
  }

  const handlePrev = () => {
    setDirection('left')
    setIndex((i) => (i - 1 + projects.length) % projects.length)
    setImgIndex(0)
  }

  const nextImage = () => {
    setImgIndex((p) => (p + 1) % active.images.length)
  }

  const prevImage = () => {
    setImgIndex((p) => (p - 1 + active.images.length) % active.images.length)
  }

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-24 px-6 lg:px-12 bg-grid dark:bg-grid-light text-white dark:text-gray-900 overflow-hidden transition-all duration-700"
    >
      {/* === BACKGROUND ANIMATIONS === */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === HEADER === */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-blue-500/30">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {language === 'FR' ? 'Projets Data Science & IA' : 'Data Science & AI Projects'}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white dark:text-gray-900">
            {language === 'FR' ? (
              <>
                Mes <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projets</span>
              </>
            ) : (
              <>
                My <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
              </>
            )}
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 dark:text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'FR'
              ? "Découvrez mes projets en Data Science, Intelligence Artificielle et Développement — alliant innovation technique et impact business."
              : "Discover my projects in Data Science, Artificial Intelligence and Development — combining technical innovation and business impact."}
          </p>
        </div>

        {/* === PROJECT CONTENT === */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* === TEXT SIDE - DIMENSIONS FIXES === */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 min-h-[500px] ${
              isVisible 
                ? direction === 'right' 
                  ? 'animate-slide-in-left' 
                  : 'animate-slide-in-left-reverse'
                : 'opacity-0 translate-x-[-100px]'
            }`}
          >
            <div className="space-y-6 h-full flex flex-col justify-center">
              {/* Project Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span className="text-xs font-medium text-purple-400">
                  {active.id === 'due-diligence' 
                    ? (language === 'FR' ? '🏆 Projet Lauréat' : '🏆 Award Winning Project')
                    : (language === 'FR' ? 'Projet IA Avancé' : 'Advanced AI Project')
                  }
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-white dark:text-gray-900 leading-tight">
                {language === 'FR' ? active.titleFR : active.titleEN}
              </h3>
              
              <p className="text-lg font-medium text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                {language === 'FR' ? active.subtitleFR : active.subtitleEN}
              </p>
              
              <div className="flex-1 overflow-hidden">
                <p className="text-gray-300 dark:text-gray-600 leading-relaxed text-justify text-lg line-clamp-5">
                  {language === 'FR' ? active.descriptionFR : active.descriptionEN}
                </p>
              </div>

              {/* Tech Stack - Hauteur fixe */}
              <div className="flex flex-wrap gap-2 min-h-[80px] items-start">
                {active.techs.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-gray-800/50 dark:bg-gray-200/50 rounded-xl text-sm text-white dark:text-gray-900 border border-gray-700/50 dark:border-gray-400/50 hover:bg-gray-700/50 dark:hover:bg-gray-300/50 transition-all duration-300 hover:scale-105"
                    style={{ 
                      animationDelay: `${techIndex * 100}ms`,
                      animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons - Position fixe */}
              <div className="flex gap-4 pt-4 min-h-[60px] items-end">
                {active.hasDemo && (
                  <a
                    href={active.demo}
                    className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {language === 'FR' ? 'Voir la démo' : 'Live Demo'}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* === IMAGE SIDE - DIMENSIONS FIXES === */}
          {active.images.length > 0 ? (
            <div
              className={`transition-all duration-1000 min-h-[500px] flex items-center ${
                isVisible 
                  ? direction === 'right' 
                    ? 'animate-slide-in-right' 
                    : 'animate-slide-in-right-reverse'
                  : 'opacity-0 translate-x-[100px]'
              }`}
            >
              <div className="relative group rounded-2xl overflow-hidden border border-purple-500/30 
                             shadow-2xl bg-gray-900/80 dark:bg-gray-100/80 backdrop-blur-xl 
                             hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] w-full h-[400px]">
                
                {/* Main Image */}
                <img
                  src={active.images[imgIndex]}
                  alt={language === 'FR' ? active.titleFR : active.titleEN}
                  className="w-full h-full object-contain transition-all duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image Navigation */}
                {active.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {active.images.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => setImgIndex(dotIndex)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          dotIndex === imgIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Navigation Arrows */}
                {active.images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={prevImage}
                      className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-full p-3 shadow-2xl transform hover:scale-110 transition-all duration-300"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-full p-3 shadow-2xl transform hover:scale-110 transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="min-h-[500px] flex items-center justify-center">
              <div className="text-center text-gray-400 dark:text-gray-600">
                <p className="text-lg">
                  {language === 'FR' ? 'Aucune image disponible' : 'No images available'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* === PROJECT NAVIGATION - POSITION FIXE === */}
        <div className={`flex justify-center gap-4 mt-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <button
            onClick={handlePrev}
            className="group bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-2xl p-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          {/* Project Indicators */}
          <div className="flex items-center gap-3 mx-8">
            {projects.map((project, projectIndex) => (
              <button
                key={project.id}
                onClick={() => {
                  setDirection(projectIndex > index ? 'right' : 'left')
                  setIndex(projectIndex)
                  setImgIndex(0)
                }}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  projectIndex === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-800/50 dark:bg-gray-200/50 text-gray-400 dark:text-gray-600 hover:bg-gray-700/50 dark:hover:bg-gray-300/50'
                }`}
              >
                {projectIndex + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="group bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-2xl p-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeftReverse {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRightReverse {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-left-reverse {
          animation: slideInLeftReverse 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-slide-in-right-reverse {
          animation: slideInRightReverse 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}