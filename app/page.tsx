import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-gray-900">Abhishek Shivale</h1>
          <p className="mt-2 text-xl text-gray-600">Full-stack Developer</p>
          <div className="mt-4 flex space-x-4">
            <a href="https://github.com/abhishek-shivale" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-shivale/" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/blackpearl_0001" className="text-gray-600 hover:text-gray-900">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:abhishekshivale45@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600">
            Full-stack developer with 6+ months of hands-on experience building web applications using Next.js, Prisma, PostgreSQL, and other modern technologies. Skilled in both frontend and backend development, I&apos;m passionate about solving complex problems and delivering high-quality solutions.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-black">Software Trainee</h3>
            <p className="text-gray-600">Pluto Consulting • May 2024 - Present</p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Developed a full MERN stack application with integrated AI features</li>
              <li>Implemented complex MongoDB queries with vector search functionality</li>
              <li>Designed and structured database schema for scalability</li>
              <li>Managed frontend design using Figma and implemented React components</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                  <a href={project.github} className="text-gray-600 hover:text-gray-900">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-black">Web Technologies</h3>
                <p className="text-gray-600">JavaScript, TypeScript, Node.js</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Database Systems</h3>
                <p className="text-gray-600">MongoDB, PostgreSQL</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Frameworks</h3>
                <p className="text-gray-600">React, Next.js, Prisma</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Cloud/DevOps</h3>
                <p className="text-gray-600">AWS, VPS, Cloudflare Workers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-black">Chandigarh University</h3>
            <p className="text-gray-600">BCA • 2023 - 2026</p>
            <p className="mt-2 text-gray-600">GPA: 7.60/10.00</p>
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-black">100xDevs Certificate</h3>
              <p className="text-gray-600">March 2024</p>
            </div>
            <a href="https://app.100xdevs.com/certificate/verify/V4UB1P6Q" className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800">
              View Certificate <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;