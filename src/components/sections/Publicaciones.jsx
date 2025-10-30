import { ArrowRight, Download, ExternalLink, Mail, Linkedin, Github, User, Calendar, FileText, Award, Send } from 'lucide-react';
import React, { useState } from 'react';


function Publicaciones() {
    const publications = [
    {
      title: 'TITULO',
      authors: 'AUTORES',
      venue: 'LUGAR DE PUBLICACION',
      year: 'AÑO',
      status: 'ESTADO',
      type: 'TIPO',
      doi: 'IDENTIFICADOR',
      openAccess: true
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-700 border-green-200';
      case 'In Review': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Preprint': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="publicaciones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Publicaciones
          </h2>
          <div className="w-20 h-1 bg-[#00AEEF] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Resultados y avances publicados por nuestro equipo
          </p>
        </div>

        {/* Grid de publicaciones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#00AEEF] hover:shadow-lg transition-all"
            >
              {/* Badges */}
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(pub.status)}`}>
                  {pub.status}
                </span>
                {pub.openAccess && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">
                    Open Access
                  </span>
                )}
              </div>

              {/* Título */}
              <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                {pub.title}
              </h3>

              {/* Autores */}
              <p className="text-sm text-gray-600 mb-3">
                {pub.authors}
              </p>

              {/* Venue y año */}
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">{pub.venue}</span>
              </p>
              <p className="text-sm text-gray-500 mb-4">{pub.year} • {pub.type}</p>

              {/* Acciones */}
              <div className="flex gap-2">
                {pub.doi && (
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#00AEEF] text-white rounded-lg text-sm font-medium hover:bg-[#0099d6] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Paper
                  </a>
                )}
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-[#00AEEF] hover:text-[#00AEEF] transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publicaciones;