import { ArrowRight, Download, ExternalLink, Mail, Linkedin, Github, User, Calendar, FileText, Award, Send } from 'lucide-react';
import React, { useState } from 'react';


function Team() {
const team = [
    {
      name: 'Marcelo Esperanza',
      role: 'ROL',
      institution: 'UNIVERSIDAD',
      image: null,
      bio: 'BIO',
      links: {
        email: 'EMAIL',
        linkedin: '#',
        scholar: '#'
      }
    },
      {
      name: 'Martin Pastorini',
      role: 'ROL',
      institution: 'UNIVERSIDAD',
      image: null,
      bio: 'BIO',
      links: {
        email: 'EMAIL',
        linkedin: '#',
        scholar: '#'
      }
    },
      {
      name: 'Walter Gomez',
      role: 'ROL',
      institution: 'UNIVERSIDAD',
      image: null,
      bio: 'BIO',
      links: {
        email: 'EMAIL',
        linkedin: '#',
        scholar: '#'
      }
    },
    {
      name: 'Maria Alejandra Ochoa',
      role: 'ROL',
      institution: 'UNIVERSIDAD',
      image: null,
      bio: 'BIO',
      links: {
        email: 'EMAIL',
        linkedin: '#',
        scholar: '#'
      }
    },
    {
      name: 'Enrique Fernandez',
      role: 'ROL',
      institution: 'UNIVERSIDAD',
      image: null,
      bio: 'BIO',
      links: {
        email: 'EMAIL',
        linkedin: '#',
        scholar: '#'
      }
    },
    {
      name: 'Carlos Gustavo Lopez',
      role: 'ROL',
      institution: 'UNIVERSIDAD',
      image: null,
      bio: 'BIO',
      links: {
        email: 'EMAIL',
        linkedin: '#',
        scholar: '#'
      }
    },
  ];

  const adscriptos = [
    {
      name: 'Juan Pablo Frascino',
      role: 'ROL',
      institution: 'UNIVERSIDAD',
      image: null,
      bio: 'BIO',
      links: {
        email: 'EMAIL',
        linkedin: '#',
        scholar: '#'
      }
    },
    {
      name: 'Mariano Ocaranza',
      role: 'ROL',
      institution: 'UNIVERSIDAD',
      image: null,
      bio: 'BIO',
      links: {
        email: 'EMAIL',
        linkedin: '#',
        scholar: '#'
      }
    },
    {
      name: 'Agustin Aranda',
      role: 'ROL',
      institution: 'UNIVERSIDAD',
      image: null,
      bio: 'BIO',
      links: {
        email: 'EMAIL',
        linkedin: '#',
        scholar: '#'
      }
    },
  ];

  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Equipo de Investigación
          </h2>
          <div className="w-20 h-1 bg-[#00AEEF] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Profesionales dedicados al avance de la investigación científica
          </p>
        </div>

        {/* Grid de equipo */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#00AEEF] hover:shadow-lg transition-all text-center"
            >
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-br from-[#00AEEF] to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>

              {/* Info */}
              <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-[#00AEEF] mb-2">{member.role}</p>
              <p className="text-xs text-gray-600 mb-3">{member.institution}</p>
              <p className="text-sm text-gray-700 mb-4">{member.bio}</p>

              {/* Links */}
              <div className="flex justify-center gap-3">
                {member.links.email && (
                  <a href={`mailto:${member.links.email}`} className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                )}
                {member.links.linkedin && (
                  <a href={member.links.linkedin} className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.links.github && (
                  <a href={member.links.github} className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Adscriptos */}
        <div className="text-center mt-20 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Adscriptos
          </h2>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Estudiantes de la Universidad Nacional del Oeste que colaboran en el proyecto
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adscriptos.map((ads, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#00AEEF] hover:shadow-lg transition-all text-center"
            >
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-br from-[#00AEEF] to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>

              {/* Info */}
              <h3 className="font-bold text-gray-900 mb-1">{ads.name}</h3>
              <p className="text-sm font-medium text-[#00AEEF] mb-2">{ads.role}</p>
              <p className="text-xs text-gray-600 mb-3">{ads.institution}</p>
              <p className="text-sm text-gray-700 mb-4">{ads.bio}</p>

              {/* Links */}
              <div className="flex justify-center gap-3">
                {ads.links.email && (
                  <a href={`mailto:${ads.links.email}`} className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                )}
                {ads.links.linkedin && (
                  <a href={ads.links.linkedin} className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {ads.links.github && (
                  <a href={ads.links.github} className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;