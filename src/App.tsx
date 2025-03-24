import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, GraduationCap, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      {/* <nav className="bg-indigo-700 text-white p-4 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-700 font-bold">
              NC
            </div>
            <span className="font-semibold">Niruthmi Chandrasekara</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-indigo-200">About</a>
            <a href="#education" className="hover:text-indigo-200">Education</a>
            <a href="#skills" className="hover:text-indigo-200">Skills</a>
            <a href="#projects" className="hover:text-indigo-200">Projects</a>
            <a href="#contact" className="hover:text-indigo-200">Contact</a>
          </div>
        </div>
      </nav> */}









{/* <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
        NC
      </div>
      <span className="font-semibold text-white">Niruthmi Chandrasekara</span>
    </div>
    <div className="hidden md:flex space-x-6">
      <a href="#about" className="hover:text-blue-200">About</a>
      <a href="#education" className="hover:text-blue-200">Education</a>
      <a href="#skills" className="hover:text-blue-200">Skills</a>
      <a href="#projects" className="hover:text-blue-200">Projects</a>
      <a href="#contact" className="hover:text-blue-200">Contact</a>
    </div>
  </div>
</nav> */}
















<nav className="bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 text-white p-4 fixed w-full top-0 z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 font-bold">
        NC
      </div>
      <span className="font-semibold">Niruthmi Chandrasekara</span>
    </div>
    <div className="hidden md:flex space-x-6">
      <a href="#about" className="hover:text-blue-200">About</a>
      <a href="#education" className="hover:text-blue-200">Education</a>
      <a href="#skills" className="hover:text-blue-200">Skills</a>
      <a href="#projects" className="hover:text-blue-200">Projects</a>
      <a href="#contact" className="hover:text-blue-200">Contact</a>
    </div>
  </div>
</nav>


 
      {/* Hero Section */}
      {/* <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-indigo-700 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            COMPUTER SCIENCE & PHYSICAL SCIENCE UNDERGRADUATE
          </h2>
          <p className="text-xl mb-8 text-indigo-200">
            A dedicated undergraduate with a dual focus on Computer Science and Physical Sciences,
            specializing in data analysis and innovative solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/niruthmi-chandrasekara-ba8811274/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-indigo-100 transition"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/NiruthmiAvindhya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-white hover:text-indigo-700 transition"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto" />
          </div>
        </div>
      </section> */}
 


{/* Hero Section */}
{/* <section className="pt-40 pb-24 px-6 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 text-white">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug text-blue-900">
      Niruthmi Chandrasekara
    </h2>
    <h3 className="text-xl md:text-2xl font-medium mb-6 text-blue-800">
      Undergraduate in Computer Science & Physical Sciences
    </h3>
    <p className="text-lg mb-8 text-blue-700">
      Passionate about leveraging <span className="font-semibold text-blue-600">data-driven insights</span> and creating <span className="font-semibold text-blue-600">cutting-edge solutions</span> in <span className="font-semibold text-blue-600">software development</span> and <span className="font-semibold text-blue-600">machine learning</span>.
    </p>
    <div className="flex justify-center space-x-6">
      <a
        href="https://www.linkedin.com/in/niruthmi-chandrasekara-ba8811274/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-white hover:text-blue-700 transition duration-300"
      >
        <Linkedin size={20} />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/NiruthmiAvindhya"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-white hover:text-blue-700 transition duration-300"
      >
        <Github size={20} />
        <span>GitHub</span>
      </a>
    </div>
    <div className="mt-16 animate-bounce">
      <ChevronDown size={32} className="mx-auto opacity-80 text-blue-700" />
    </div>
  </div>
</section> */}





<section className="pt-40 pb-24 px-6 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
      Niruthmi Chandrasekara
    </h2>
    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-200">
      Undergraduate in Computer Science & Physical Sciences
    </h3>
    <p className="text-lg mb-8 text-gray-200">
      Passionate about leveraging <span className="font-semibold text-gray-100">data-driven insights</span> and creating <span className="font-semibold text-gray-100">innovative solutions</span> in <span className="font-semibold text-gray-100">software development</span> and <span className="font-semibold text-gray-100">machine learning</span>.
    </p>
    <div className="flex justify-center space-x-8">
      <a
        href="https://www.linkedin.com/in/niruthmi-chandrasekara-ba8811274/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-medium flex items-center space-x-3 hover:bg-white hover:text-blue-600 transition duration-300"
      >
        <Linkedin size={24} />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/NiruthmiAvindhya"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-medium flex items-center space-x-3 hover:bg-white hover:text-blue-600 transition duration-300"
      >
        <Github size={24} />
        <span>GitHub</span>
      </a>
    </div>
    <div className="mt-16 animate-bounce">
      <ChevronDown size={32} className="mx-auto opacity-80 text-gray-100" />
    </div>
  </div>
</section>








      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* <div className="w-64 h-64 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-4xl font-bold">
              NC
            </div> */}
            <div className="w-64 h-64 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-4xl font-bold">
  <img src="me.jpeg" alt="me" className="w-full h-full rounded-full object-cover" />
</div>

            <div className="flex-1 space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                I am a dedicated undergraduate with a dual focus on Computer Science and Physical Sciences, 
                specializing in Mathematics, Statistics, and Economics. My interdisciplinary background 
                provides me with a solid foundation in data analysis, programming, and statistical modeling.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With a strong passion for extracting meaningful insights from complex datasets, I aim to 
                pursue a career as a data scientist, leveraging technology and data to drive impactful 
                solutions. I am eager to contribute to innovative projects and develop advanced analytical 
                skills in dynamic and challenging environments.
              </p>
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/niruthmi-chandrasekara-ba8811274/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-50 text-blue-600 rounded-full flex items-center gap-2 hover:bg-blue-100 transition"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/NiruthmiAvindhya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gray-50 text-gray-700 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-emerald-600 mb-12">Education</h2>
          <div className="space-y-12">
            {/* University of Westminster */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <img src="westminster.png" alt="westminster" className="w-full h-full rounded-full object-cover" />
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">BSc (Hons) Computer Science</h3>
                  <p className="text-indigo-600">University of Westminster</p>
                  <p className="text-blue-600">2024 - 2027</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">1st Year Modules</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Software Development 1
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Trends in Computer Science
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Web Design and Development
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Mathematics Computing
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Software Development 2
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Computer System Fundamentals
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">2nd Year Modules</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Object Oriented Programming
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Software Development Group Project
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Machine Learning and Data Mining
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Data Base Systems
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Client-Server Architectures
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Algorithms
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* University of Sri Jayewardenapura */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                <img src="jpura.png" alt="me" className="w-full h-full rounded-full object-cover" />
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">BSc (Hons) Physical Science</h3>
                  <p className="text-purple-600">University of Sri Jayewardenapura</p>
                  <p className="text-blue-600">2024 - 2027</p>
                </div>
              </div>
              <p className="text-gray-600">
                <span className="font-semibold">Specialization:</span> Mathematics/Statistics/Economics
              </p>
            </div>

            {/* Esoft Metro Campus */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                <img src="esoft.jpg" alt="me" className="w-full h-full rounded-full object-cover" />
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Diploma in Information Technology</h3>
                  <p className="text-pink-600">Esoft Metro Campus</p>
                  <p className="text-blue-600">2023 - 2024</p>
                </div>
              </div>
            </div>

{/* British Council Colombo */}
<div className="bg-white p-8 rounded-lg shadow-lg">
  <div className="flex items-center gap-4 mb-6">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
    <img src="BC.jpg" alt="BC" className="w-full h-full rounded-full object-cover" />
      <BookOpen size={24} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900">YLE / My Class</h3>
      <p className="text-blue-600">British Council Colombo</p>
      <p className="text-blue-600">2014 - 2023</p>
    </div>
  </div>
</div>




            {/* Visakha Vidyalaya */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                <img src="visakha.jpg" alt="visakha" className="w-full h-full rounded-full object-cover" />
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">GCE Advanced Level Examination - 2023</h3>
                  <p className="text-amber-600">Visakha Vidyalaya Colombo</p>
                  <p className="text-blue-600">2020 - 2023</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Results</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Mathematics</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded">B</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Physics</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded">C</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Chemistry</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded">C</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gothami Balika Vidyalaya */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <img src="gbv.jpg" alt="me" className="w-full h-full rounded-full object-cover" />
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">GCE Ordinary Level Examination - 2019</h3>
                  <p className="text-green-600">Gothami Balika Vidyalaya Colombo</p>
                  <p className="text-blue-600">2014 - 2019</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Achievements</h4>
                <p className="text-gray-600">9As including Mathematics, Science, English</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  { name: 'Python', level: 90 },
                  { name: 'Java', level: 85 },
                  { name: 'HTML/CSS', level: 90 },
                  { name: 'JavaScript', level: 80 },
                  { name: 'React', level: 75 },
                  { name: 'Spring Boot', level: 70 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 rounded-full h-2"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-pink-600">Soft Skills</h3>
              <div className="space-y-4">
                {[
                  { name: 'Time Management', level: 90 },
                  { name: 'Communication', level: 85 },
                  { name: 'Team Work', level: 95 },
                  { name: 'Problem Solving', level: 90 },
                  { name: 'Critical Thinking', level: 85 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-pink-600 rounded-full h-2"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">Languages</h3>
              <div className="space-y-4">
                {[
                  { name: 'English', level: 90 },
                  { name: 'Sinhala', level: 100 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-emerald-600 rounded-full h-2"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Student Activity Management System */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Student Activity Management System
                </h3>
                <p className="text-gray-600 mb-4">
                  Developed a Java-based system to organize and track student activities. 
                  The project focused on streamlined data handling with features like activity 
                  monitoring, error management, and report generation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Object-Oriented Programming', 'Error Handling'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Python-Based Student Management System */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">
                  Python-Based Student Management System
                </h3>
                <p className="text-gray-600 mb-4">
                  Developed a modular student management system in Python for efficient 
                  record management. The system supports adding, updating, and displaying 
                  student details while ensuring structured coding and scalable data handling.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JSON', 'Data Structures'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Life on Land Website */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-600">
                  Life on Land Website
                </h3>
                <p className="text-gray-600 mb-4">
                  Created a comprehensive website aligned with the UN Sustainable 
                  Development Goal "Life on Land". Responsibilities included designing an 
                  engaging homepage, implementing a responsive navigation bar, and ensuring 
                  organized content.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Responsive Design'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Real-Time Ticket Management System */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">
                  Real-Time Ticket Management System
                </h3>
                <p className="text-gray-600 mb-4">
                  Developed a real-time ticketing system using Spring Boot for the backend and 
                  React.js for the frontend. The system implements the Producer-Consumer 
                  pattern to handle ticket release and purchase concurrency efficiently.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Spring Boot', 'React', 'RESTful APIs', 'SQL'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Agriculture Management System */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-teal-600">
                  Agriculture Management System
                </h3>
                <p className="text-gray-600 mb-4">
                  Designed a management system for agricultural data using SQL and C++. 
                  This project emphasized efficient data handling and storage, providing a 
                  robust solution for agricultural records.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'SQL', 'Data Management'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Fashion House Website */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-pink-600">
                  Fashion House Website
                </h3>
                <p className="text-gray-600 mb-4">
                  Developed a modern and interactive website for a fashion brand using HTML, 
                  CSS, and JavaScript. This project focused on creating a visually appealing 
                  and user-friendly online presence.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'UI/UX Design'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Extra-Curricular Activities Section */}
<section id="activities" className="py-20 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Extra-Curricular Activities</h2>
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-600 mb-4">Club & Societies</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><span className="font-semibold">IEEE Member</span> (IIT)</li>
        <li><span className="font-semibold">Statistics Society Member</span> (USJ)</li>
        <li><span className="font-semibold">IEEE Member</span> (USJ)</li>
        <li><span className="font-semibold">IEEE CS Member</span> (USJ)</li>
        <li><span className="font-semibold">IEEE IES (Standing Committee)</span> (USJ)</li>
        <li><span className="font-semibold">Mathematics Society</span> (USJ)</li>
        <li><span className="font-semibold">Gavel Club</span> (USJ)</li>
      </ul>
    </div>
  </div>
</section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 px-4 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:your.email@example.com"
              className="flex items-center space-x-2 hover:text-indigo-200 transition"
            >
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/niruthmi-chandrasekara-ba8811274/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-indigo-200 transition"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/NiruthmiAvindhya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-indigo-200 transition"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section> */}











{/* <footer className="bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 text-white py-8">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-lg md:text-xl font-medium mb-4 text-gray-100">
      © 2025 Niruthmi Chandrasekara. All Rights Reserved.
    </p>
    <div className="flex justify-center space-x-8">
      <a
        href="https://www.linkedin.com/in/niruthmi-chandrasekara-ba8811274/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600 transition duration-300"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/NiruthmiAvindhya"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600 transition duration-300"
      >
        GitHub
      </a>
    </div>
    <p className="mt-6 text-sm text-gray-200">
      Designed and Developed by Niruthmi Chandrasekara
    </p>
  </div>
</footer> */}















<section id="contact" className="bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
    <p className="text-lg mb-8 text-gray-200">
      I'd love to hear from you! Whether it's for collaboration or just a friendly chat, feel free to reach out.
    </p>
    <div className="flex justify-center space-x-8 mb-8">
      <a
        href="mailto:your.email@example.com"
        className="bg-transparent border-2 border-white py-3 px-8 rounded-full text-white hover:bg-white hover:text-blue-800 transition duration-300"
      >
        Send an Email
      </a>
    </div>
    <div className="flex justify-center space-x-8 mb-6">
      <a
        href="https://www.linkedin.com/in/niruthmi-chandrasekara-ba8811274/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-300 transition duration-300"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/NiruthmiAvindhya"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-300 transition duration-300"
      >
        GitHub
      </a>
    </div>
    <p className="text-lg mb-4">© 2025 Niruthmi Chandrasekara. All Rights Reserved.</p>
    <p className="mt-6 text-sm text-gray-200">Designed and Developed by Niruthmi Chandrasekara</p>
  </div>
</section>




    </div>
  );
}

export default App;
