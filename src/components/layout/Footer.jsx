import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Github, Linkedin, FileText } from 'lucide-react';
function Footer() {

  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Información del proyecto */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#00AEEF] rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Optimización de Procesos de Muestreo Mediante el Uso de Herramientas de Simulación y Proceso Analítico Jerárquico </h3>
                <p className="text-xs text-gray-500">Universidad Nacional del Oeste</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Proyecto de investigación universitaria enfocado en la optimización de procesos de muestreo. 
              Contribuyendo al avance del conocimiento científico y la innovación.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#proyecto" className="text-sm text-gray-600 hover:text-[#00AEEF] transition-colors">
                  Sobre el proyecto
                </a>
              </li>
              <li>
                <a href="#publicaciones" className="text-sm text-gray-600 hover:text-[#00AEEF] transition-colors">
                  Publicaciones
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-sm text-gray-600 hover:text-[#00AEEF] transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-sm text-gray-600 hover:text-[#00AEEF] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#00AEEF] transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#00AEEF] transition-colors">
                  Repositorio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} Universidad Nacional del Oeste. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-[#00AEEF] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#00AEEF] transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
