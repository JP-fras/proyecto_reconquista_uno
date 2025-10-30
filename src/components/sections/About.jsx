import { ArrowRight, Download, ExternalLink, Mail, Linkedin, Github, User, Calendar, FileText, Award, Send } from 'lucide-react';
import React, { useState } from 'react';


function About() {
    const keywords = [
    'Explotación de Información',
    'Medio ambiente',
    'Recurso Hídrico',
    'Calidad del agua',
    'Rio de la Reconquista',
    'Proceso Analítico Jerárquico'
  ];

  return (
    <section id="proyecto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre el Proyecto
            </h2>
            <div className="w-20 h-1 bg-[#00AEEF] mx-auto rounded-full"></div>
          </div>

          {/* Resumen */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Dentro del marco del proyecto de análisis de calidad del agua del Río de la Reconquista que lleva adelante la Universidad Nacional del Oeste, se realiza un proceso de recolección y análisis de muestras de agua de dicho río. Esto es algo costoso y lleva un tiempo importante. Para hacer más eficiente esta tarea se desarrolló un proceso de generación de datos sintéticos, en base a los resultados del muestreo disponible en ese momento (aproximadamente 300 muestras analizada), que permitió ampliar dicha muestra a 10.000 casos
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Finalmente, sobre este dataset ampliado se aplica un proceso Analítico Jerárquico (Analytic Hierarchy Process) con la finalidad de determinar, a través de una matriz de comparación, la ponderación más apropiada a aplicar en cada variable para determinación de un Índice de Calidad de Agua que se ajuste a la realidad particular del río y en base a esto centrar en muestreo en los parámetros de más peso.
            </p>
          </div>

          {/* Palabras clave */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Palabras Clave</h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-[#00AEEF] rounded-full text-sm font-medium border border-blue-100"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Objetivos e Impacto */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Objetivos</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00AEEF] mt-1">•</span>
                  <span>PLACE HOLDER</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00AEEF] mt-1">•</span>
                  <span>PLACE HOLDER</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00AEEF] mt-1">•</span>
                  <span>PLACE HOLDER</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impacto Esperado</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00AEEF] mt-1">•</span>
                  <span>PLACE HOLDER</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00AEEF] mt-1">•</span>
                  <span>PLACE HOLDER</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00AEEF] mt-1">•</span>
                  <span>PLACE HOLDER</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;