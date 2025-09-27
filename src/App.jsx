import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import { MainLayout } from "./components/Layouts/MainLayout";
import { ProjectModal } from './components/Projets/ProjectModal';

// Lazy loading avec gestion d'erreur
// const lazyLoad = (componentName, path) => lazy(() => 
//   import(`./components/${path}/index.js`)
//     .then(module => ({ default: module[componentName] }))
//     .catch(() => ({ default: () => <div>Composant non trouvé</div> }))
// );

// const About = lazyLoad('About', 'About');
// const Projects = lazyLoad('Projets', 'Projets');
// const ProjectCard = lazyLoad('ProjetCard', 'Projets');
// const Skills = lazyLoad('Skills', 'Skills');
// const Contact = lazyLoad('Contact', 'Contact');


// Lazy loading pour exports nommés
const About = lazy(() => import('./components/About').then(module => ({
  default: module.About // Accède à l'export nommé "About"
})));

const Projects = lazy(() => import('./components/Projets').then(module => ({
  default: module.Projects // Accède à l'export nommé "Projects"
})));

const Skills = lazy(() => import('./components/Skills').then(module => ({
  default: module.Skills
})));

const Contact = lazy(() => import('./components/Contact').then(module => ({
  default: module.Contact
})));

// Fallback de chargement amélioré
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>
    <div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/:projetid" element={<ProjectModal />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;