import { ArrowRight, Download, ExternalLink, Mail, Linkedin, Github, User, Calendar, FileText, Award, Send } from 'lucide-react';
import React, { useState } from 'react';



function Hero() {

return (
    <section id="inicio" className="bg-gradient-to-br from-white via-blue-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
            <div className="rounded-lg flex items-center justify-center">
                <img src="/logo_uno.png" alt="Logo Universidad Nacional del Oeste" className="mx-auto mb-6 w-40 h-40 rounded-lg"/>
            </div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Proyecto de Investigacion y Desarrollo</span>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Optimización de Procesos de Muestreo Mediante el Uso de {' '}
            <span className="text-[#00AEEF]">Herramientas de Simulación</span>{' '}
            y Proceso Analítico Jerárquico
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Proceso de generacion de datos sinteticos dentro del marco del proyecto de análisis de calidad del agua del Río de la Reconquista que lleva adelante la Universidad Nacional del Oeste.
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#00AEEF]" />
              <span>2024 - 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#00AEEF]" />
              <span>U.N.O</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#proyecto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00AEEF] text-white rounded-lg font-semibold hover:bg-[#0099d6] transition-all shadow-lg hover:shadow-xl"
            >
              Conocer el Proyecto
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#publicaciones"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all"
            >
              Ver Publicaciones
              <FileText className="w-5 h-5" />
            </a>
          </div>

          {/* Universidad */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Una investigación de</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="font-bold text-gray-900 text-lg">Universidad Nacional del Oeste (Argentina)</p>
                <p className="text-sm text-gray-600">Instituto de Ingeniería y Nuevas Tecnologías </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

 export default Hero;