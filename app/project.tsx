"use client"
import { Github, Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'

function Project() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "React Anime Web Application",
      description: "A React-based web application for exploring and discovering anime series, with episode search functionality and mobile-responsive design.",
      tech: ["React", "Tailwind CSS", "Axios"],
      github: "https://github.com/abhishek-shivale/React-app-anime.git"
    },
    {
      title: "eCommerce Web Application",
      description: "A full-featured MERN stack eCommerce platform with user authentication, shopping cart management, and product browsing functionality.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/abhishek-shivale/React-app-anime.git"
    },
    // Example additional projects
    {
      title: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard with data visualization.",
      tech: ["Next.js", "D3.js", "Firebase"],
      github: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and analytics.",
      tech: ["React", "OpenAI API", "WebSocket"],
      github: "#"
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio generator with customizable templates.",
      tech: ["Vue.js", "GraphQL", "Node.js"],
      github: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management system with real-time updates.",
      tech: ["React", "Redux", "Socket.io"],
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Weather forecasting application with interactive maps.",
      tech: ["React", "OpenWeather API", "Leaflet"],
      github: "#"
    }
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <a href={project.github} className="text-gray-600 hover:text-gray-900">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {projects.length > 3 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                {showAllProjects ? (
                  <>
                    <Minus className="w-4 h-4 mr-2" />
                    Show Less Projects
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    View More Projects
                  </>
                )}
              </button>
            </div>
          )}
    </>
  )
}

export default Project