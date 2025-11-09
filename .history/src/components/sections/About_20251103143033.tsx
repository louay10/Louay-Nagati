'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'
import { GraduationCap, Target, Brain, Sparkles, Languages, Heart, Code2, Database, LineChart, Rocket, Cpu, BarChart3 } from 'lucide-react'

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeInterest, setActiveInterest] = useState<number | null>(null)
  const { language } = useLanguageTheme()
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const interests = language === 'FR' 
    ? [
        { icon: Brain, name: 'IA & Data Science', desc: 'Machine Learning, Deep Learning, NLP, LLMs et Intelligence Artificielle Générative' },
        { icon: Database, name: 'Big Data & BI', desc: 'Hadoop, Hive, HBase, Data Warehousing et Business Intelligence' },
        { icon: Code2, name: 'Développement Full-Stack', desc: 'Python, React, Laravel, Streamlit, Flask et architectures modernes' },
        { icon: LineChart, name: 'Analyse ESG', desc: 'Plateformes d\'analyse ESG, métriques durabilité et investissement responsable' },
        { icon: BarChart3, name: 'Machine Learning', desc: 'Modèles prédictifs, feature engineering et déploiement de modèles' },
        { icon: Target, name: 'Ingénierie données', desc: 'Pipelines ETL, architectures data scalable et traitement de données' }
      ]
    : [
        { icon: Brain, name: 'AI & Data Science', desc: 'Machine Learning, Deep Learning, NLP, LLMs and Generative AI' },
        { icon: Database, name: 'Big Data & BI', desc: 'Hadoop, Hive, HBase, Data Warehousing and Business Intelligence' },
        { icon: Code2, name: 'Full-Stack Development', desc: 'Python, React, Laravel, Streamlit, Flask and modern architectures' },
        { icon: LineChart, name: 'ESG Analytics', desc: 'ESG analysis platforms, sustainability metrics and responsible investment' },
        { icon: BarChart3, name: 'Machine Learning', desc: 'Predictive modeling, feature engineering and model deployment' },
        { icon: Target, name: 'Data Engineering', desc: 'ETL pipelines, scalable data architectures and data processing' }
      ]

  const languages = [
    { nameFR: 'Arabe', nameEN: 'Arabic', levelFR: 'Langue maternelle', levelEN: 'Native', percent: 100, flag: '🇹🇳' },
    { nameFR: 'Français', nameEN: 'French', levelFR: 'Courant', levelEN: 'Fluent', percent: 95, flag: '🇫🇷' },
    { nameFR: 'Anglais', nameEN: 'English', levelFR: 'Courant', levelEN: 'Fluent', percent: 90, flag: '🇺🇸' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-6 lg:px-12 bg-grid dark:bg-grid-light text-white dark:text-gray-900 transition-all duration-700 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch relative z-10">
        {/* === Left Column - Fixed Height === */}
        <div className="flex flex-col">
          <div
            className={`group bg-gray-900/80 dark:bg-white/90 rounded-3xl shadow-2xl p-8 lg:p-10 backdrop-blur-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-700 hover:shadow-purple-500/10 hover:shadow-2xl flex-1 min-h-[800px] flex flex-col ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            {/* Header with animated icon */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {language === 'FR' ? 'À propos de moi' : 'About Me'}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2"></div>
              </div>
            </div>

            {/* Enhanced detailed description with fixed height container */}
            <div className="space-y-6 flex-1 overflow-hidden">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-justify text-gray-300 dark:text-gray-700">
                  {language === 'FR' ? (
                    <>
                      <span className="text-purple-400 font-semibold">Étudiant en ingénierie informatique</span> en double diplôme entre ESPRIT (Data Science) et 3iL Ingénieurs (BI/Big Data), je me spécialise dans les <span className="text-blue-400 font-medium">technologies data</span> et l'<span className="text-blue-400 font-medium">intelligence artificielle</span>. Mon parcours allie <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">expertise technique avancée</span> et <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">vision business</span> pour développer des solutions innovantes.
                    </>
                  ) : (
                    <>
                      <span className="text-purple-400 font-semibold">Computer Engineering student</span> in a double degree program between ESPRIT (Data Science) and 3iL Ingénieurs (BI/Big Data), I specialize in <span className="text-blue-400 font-medium">data technologies</span> and <span className="text-blue-400 font-medium">artificial intelligence</span>. My background combines <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">advanced technical expertise</span> with <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">business vision</span> to develop innovative solutions.
                    </>
                  )}
                </p>

                <p className="leading-relaxed text-justify text-gray-300 dark:text-gray-700">
                  {language === 'FR' ? (
                    <>
                      Passionné par la <span className="text-green-400 font-medium">data science</span> et le <span className="text-green-400 font-medium">développement de solutions innovantes</span>, j'ai développé une expertise solide en <span className="text-blue-400 font-medium">Machine Learning</span>, <span className="text-blue-400 font-medium">LLMs</span> et <span className="text-blue-400 font-medium">ingénierie des données</span>. Mes expériences incluent le développement de plateformes d'analyse ESG avec RAG, des systèmes d'extraction automatique de documents, et des applications IA génératives. Je maîtrise l'ensemble de la chaîne de valeur data, du web scraping au déploiement de modèles en production.
                    </>
                  ) : (
                    <>
                      Passionate about <span className="text-green-400 font-medium">data science</span> and <span className="text-green-400 font-medium">developing innovative solutions</span>, I have developed strong expertise in <span className="text-blue-400 font-medium">Machine Learning</span>, <span className="text-blue-400 font-medium">LLMs</span>, and <span className="text-blue-400 font-medium">data engineering</span>. My experiences include developing ESG analysis platforms with RAG, automated document extraction systems, and generative AI applications. I master the entire data value chain, from web scraping to model deployment in production.
                    </>
                  )}
                </p>

                <p className="leading-relaxed text-justify text-gray-300 dark:text-gray-700">
                  {language === 'FR' ? (
                    <>
                      Mon approche combine <span className="text-purple-400 font-medium">développement technique robuste</span> et <span className="text-purple-400 font-medium">analyse data avancée</span>. J'excelle particulièrement dans la conception de pipelines de données, l'implémentation de modèles de ML/DL, et le développement d'applications web complètes. Je recherche actuellement un <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">stage de 4 mois</span> pour contribuer à des projets ambitieux en data science, intelligence artificielle ou ingénierie des données.
                    </>
                  ) : (
                    <>
                      My approach combines <span className="text-purple-400 font-medium">robust technical development</span> with <span className="text-purple-400 font-medium">advanced data analysis</span>. I excel particularly in designing data pipelines, implementing ML/DL models, and developing complete web applications. I am currently seeking a <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">4-month internship</span> to contribute to ambitious projects in data science, artificial intelligence, or data engineering.
                    </>
                  )}
                </p>
              </div>

              {/* Enhanced features with hover effects */}
              <div className="mt-6 space-y-4 border-l-2 border-gradient-to-b from-purple-500 to-blue-500 pl-6">
                {[
                  {
                    icon: Rocket,
                    titleFR: "Vision Ingénieur-Data Scientist",
                    titleEN: 'Engineer-Data Scientist Vision',
                    descFR: 'Combiner la rigueur de l\'ingénierie avec la créativité de la data science pour développer des solutions end-to-end innovantes et robustes.',
                    descEN: 'Combining engineering rigor with data science creativity to develop innovative and robust end-to-end solutions.',
                  },
                  {
                    icon: Cpu,
                    titleFR: 'Expertise Technique Full-Stack',
                    titleEN: 'Full-Stack Technical Expertise',
                    descFR: 'Maîtrise complète de la stack technique : Python, SQL, Big Data, ML/DL, LLMs, et développement web (Streamlit, Flask, React, Laravel).',
                    descEN: 'Complete mastery of the technical stack: Python, SQL, Big Data, ML/DL, LLMs, and web development (Streamlit, Flask, React, Laravel).',
                  },
                  {
                    icon: Target,
                    titleFR: 'Projets Innovants & Récompenses',
                    titleEN: 'Innovative Projects & Awards',
                    descFR: '1er prix Data Science au Bal des Projets ESPRIT pour une application web d\'analyse de documents avec LLMs et graphe de connaissances.',
                    descEN: '1st prize Data Science at ESPRIT Projects Ball for a document analysis web application with LLMs and knowledge graph.',
                  },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group/item flex items-start space-x-4 p-3 rounded-xl bg-gray-800/50 dark:bg-gray-100/50 hover:bg-gray-800/70 dark:hover:bg-gray-100/70 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => {}}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-base text-white dark:text-gray-900 group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-purple-400 group-hover/item:to-blue-400 group-hover/item:bg-clip-text transition-all duration-300">
                        {language === 'FR' ? item.titleFR : item.titleEN}
                      </h4>
                      <p className="text-xs text-gray-400 dark:text-gray-600 mt-1 leading-relaxed">
                        {language === 'FR' ? item.descFR : item.descEN}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === Right Column - Fixed Height === */}
        <div className="flex flex-col space-y-8">
          {/* Languages Card - Fixed Height */}
          <div
            className={`group bg-gray-900/80 dark:bg-white/90 rounded-3xl shadow-2xl p-8 lg:p-10 backdrop-blur-xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-700 hover:shadow-blue-500/10 flex-1 min-h-[400px] ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Languages className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {language === 'FR' ? 'Langues' : 'Languages'}
              </h3>
            </div>
            
            <div className="space-y-6 h-[calc(100%-80px)] overflow-hidden">
              {languages.map((lang, i) => (
                <div 
                  key={i} 
                  className="group/item p-4 rounded-xl bg-gray-800/50 dark:bg-gray-100/50 hover:bg-gray-800/70 dark:hover:bg-gray-100/70 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium text-white dark:text-gray-900">
                        {language === 'FR' ? lang.nameFR : lang.nameEN}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400 dark:text-gray-600 px-3 py-1 bg-gray-700/50 dark:bg-gray-200/50 rounded-full">
                      {language === 'FR' ? lang.levelFR : lang.levelEN}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 dark:bg-gray-300 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${lang.percent}%` : '0%',
                        transitionDelay: `${i * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Card - Fixed Height */}
          <div
            className={`group bg-gray-900/80 dark:bg-white/90 rounded-3xl shadow-2xl p-8 lg:p-10 backdrop-blur-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-700 hover:shadow-green-500/10 flex-1 min-h-[400px] ${
              isVisible ? 'animate-slide-in-right animation-delay-300' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {language === 'FR' ? "Expertises & Domaines" : 'Expertise & Domains'}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 h-[calc(100%-80px)] overflow-hidden">
              {interests.map((interest, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl bg-gray-800/50 dark:bg-gray-100/50 border border-transparent hover:border-green-500/50 cursor-pointer transition-all duration-300 group/interest h-fit ${
                    activeInterest === i ? 'bg-gray-800/70 dark:bg-gray-100/70 border-green-500/50' : ''
                  }`}
                  onMouseEnter={() => setActiveInterest(i)}
                  onMouseLeave={() => setActiveInterest(null)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      activeInterest === i 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                        : 'bg-gray-700/50 dark:bg-gray-200/50'
                    }`}>
                      <interest.icon className={`w-3.5 h-3.5 transition-all duration-300 ${
                        activeInterest === i ? 'text-white' : 'text-gray-400 dark:text-gray-600'
                      }`} />
                    </div>
                    <span className={`font-medium text-xs transition-all duration-300 line-clamp-1 ${
                      activeInterest === i 
                        ? 'text-green-400' 
                        : 'text-white dark:text-gray-900'
                    }`}>
                      {interest.name}
                    </span>
                  </div>
                  <p className={`text-xs text-gray-400 dark:text-gray-600 transition-all duration-300 leading-tight ${
                    activeInterest === i ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    {interest.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}