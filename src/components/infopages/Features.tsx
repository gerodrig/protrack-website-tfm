
import React from 'react';
import { Activity, MonitorCheck, Database, Settings, BarChart3, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Monitoreo en Tiempo Real",
    description: "Supervisa cada etapa del proceso de producción y toma decisiones basadas en datos actualizados.",
    icon: <Activity className="w-12 h-12 mx-auto text-accent-600" />,
  },
  {
    title: "Automatización de Procesos",
    description: "Optimiza tareas repetitivas y reduce errores mediante flujos de trabajo automatizados.",
    icon: <Settings className="w-12 h-12 mx-auto text-accent-600" />,
  },
  {
    title: "Gestión de Inventario",
    description: "Controla tu inventario de materias primas y productos terminados con actualizaciones en tiempo real.",
    icon: <Database className="w-12 h-12 mx-auto text-accent-600" />,
  },
  {
    title: "Integración con ERP",
    description: "Conéctate con sistemas como SAP, Oracle y Microsoft Dynamics para mejorar la eficiencia operativa.",
    icon: <MonitorCheck className="w-12 h-12 mx-auto text-accent-600" />,
  },
  {
    title: "Análisis y Reportes Avanzados",
    description: "Genera informes detallados sobre producción, costos y eficiencia para optimizar tu negocio.",
    icon: <BarChart3 className="w-12 h-12 mx-auto text-accent-600" />,
  },
  {
    title: "Seguridad y Control de Acceso",
    description: "Protege la información con roles personalizados y permisos específicos para cada usuario.",
    icon: <ShieldCheck className="w-12 h-12 mx-auto text-accent-600" />,
  },
];

const Features = () => {
  return (
    <section className="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-base-900">
          Funcionalidades Clave de ProTrack
        </h1>
        <p className="text-base leading-normal mt-4 text-base-500 font-medium">
          Nuestra plataforma está diseñada para optimizar la producción, mejorar la eficiencia y automatizar procesos en la industria manufacturera.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {features.map(({ title, description, icon }, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md bg-white text-center">
            {icon}
            <h2 className="mt-4 text-lg font-medium text-base-900">{title}</h2>
            <p className="mt-2 text-base text-base-500">{description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a href="/signup" className="inline-block bg-accent-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-accent-700">
          Comenzar Ahora
        </a>
      </div>
    </section>
  );
};

export default Features;
