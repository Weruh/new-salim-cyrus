import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/index';
import About from './pages/about';
import Books from './pages/books';
import Coaching from './pages/coaching';
import Certifications from './pages/certifications';
import Programs from './pages/programs';
import Contact from './pages/contact';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
