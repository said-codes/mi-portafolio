import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text3D, Float } from '@react-three/drei';
import { Github, Linkedin, FileDown, Code2, Brain, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

function FloatingCube() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6366f1" wireframe />
    </mesh>
  );
}

const skills = [
  { name: 'Frontend', icon: <Code2 className="w-8 h-8 mb-4" />, items: ['React', 'Vue', 'JavaScript', 'CSS'] },
  { name: 'Backend', icon: <Brain className="w-8 h-8 mb-4" />, items: ['Java', 'Python', 'Django','Ruby On Rails', 'SQL'] },
  { name: 'DevOps', icon: <Rocket className="w-8 h-8 mb-4" />, items: ['Git', 'Docker'] }
];

const projects = [
  {
    title: 'Task Manager',
    description: 'Aplicación de gestión de tareas con Django',
    image: '/media/Captura_de_pantalla_2024-11-12_141004.png',
    github: 'https://github.com/said-codes/django-project',
    tags: ['Python', 'Django', 'PostgreSQL','Docker']
  },
  {
    title: 'Halo web',
    description: 'Sitio web de Halo con diseño interactivo',
    image: '/media/Captura de pantalla 2025-03-21 172418.png',
    github: 'https://github.com/said-codes/halo-web',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Instagram Clon',
    description: 'Clon de Instagram, red social, con Django',
    image: '/media/Captura_de_pantalla_2024-11-12_135932.png',
    github: 'https://github.com/said-codes/instagram-clone-django',
    tags: ['Python', 'Django']
  },
  {
    title: 'Microdoft To Do Clon',
    description: 'Clon de Microsoft To Do, aplicación para la gestión de tareas',
    image: '/media/Captura de pantalla 2025-03-09 182228.png',
    github: 'https://github.com/said-codes/to-do-django-vue',
    tags: ['Python', 'Django','Vue']
  },
  {
    title: 'Twitter Clon',
    description: 'Clon de de Twitter,red social, con Django y Vue',
    image: '/media/Captura de pantalla 2025-03-21 175454.png',
    github: 'https://github.com/said-codes/twitter-clone',
    tags: ['Python', 'Django','Vue']
  },
  {
    title: 'Pagina de web de fundación caritas felices con pasión',
    description: 'Pagina web de fundación dedicada a la recolección de tapas plásticas y actividades recreativas en los barrios de santa marta',
    image: '/media/Captura de pantalla 2025-03-25 082221.png',
    github: 'https://github.com/said-codes/caritas-felices',
    tags: ['Vue', 'Three.js','Tailwindcss']
  }
];

function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section with 3D Background */}
      <div className="h-screen relative overflow-hidden">
        <Canvas className="absolute inset-0">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Stars count={1000} depth={50} fade speed={1.5} />
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
              <FloatingCube />
            </Float>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>

        <div className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4"
          >
            <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Said Valencia Castrillo
            </h1>
            <p className="text-2xl text-gray-300 mb-8">Tecnólogo en Análisis y Desarrollo de Sistemas</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-600 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Contáctame
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-32 px-4 md:px-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-12 text-center">Sobre Mí</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-16">
            Soy un tecnólogo en Análisis y Desarrollo de Sistemas de Información egresado del sena Colombo Alemán en barranquilla, actualmente
            estudiando Ingeniría de Sistemas,con experiencia en creación de aplicaciones web.
            Especializado en Python/Django y Vue.js, con enfoque en buenas prácticas
            de código limpio y optimización de rendimiento. Passion por implementar
            soluciones tecnológicas innovadoras con impacto social y ambiental.
            Mi enfoque se centra en el aprendizaje continuo y la aplicación de nuevas
            tecnologías para resolver problemas de manera eficiente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700"
              >
                <div className="text-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-300 text-center">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-4 md:px-20 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-colors"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-900/50 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Ver en GitHub
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16">Contacto</h2>
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/said-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Github className="w-8 h-8 mr-3" />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/valencia-castrillo-said/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Linkedin className="w-8 h-8 mr-3" />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="/media/cv.pdf"
              download
              className="flex items-center px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <FileDown className="w-8 h-8 mr-3" />
              <span>Descargar CV</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;
