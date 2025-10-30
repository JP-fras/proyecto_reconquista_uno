import { ArrowRight, Download, ExternalLink, Mail, Linkedin, Github, User, Calendar, FileText, Award, Send } from 'lucide-react';
import React, { useState } from 'react';


function Contacto() {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado (demo)');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-[#00AEEF] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            ¿Interesado en colaborar o conocer más sobre nuestro proyecto?
          </p>
        </div>

        {/* Información de contacto */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
            <div className="justify-center items-centerspace-y-4">
              <div className=" ">
                <Mail className="w-5 h-5 text-[#00AEEF] mt-1" />
                <div>
                  <p className="text-gray-600">EMAIL PLACEHOLDER</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Colaboraciones</h3>
            <p className="text-gray-700 mb-4">
              Estamos abiertos a colaboraciones con otras instituciones 
              e investigadores interesados.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        </div>

        
      
    </section>
    <div className="mb-24 bg-white"></div>
    </div>
  );
}

export default Contacto;