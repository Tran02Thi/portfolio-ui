import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
// import Home from './pages/Home/Home'
// import Blog from './pages/Blogs/Blog'
// import Projects from './pages/Projects/Projects'
// import Infor from './pages/Infor/Infor'
// import Experience from './pages/Experience/Experience'
// import Contact from './pages/Contact/Contact'

import "./assets/styles/global.css";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/test" element={<Blog />} />
//           <Route path="/infor" element={<Infor />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<Home />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
// )
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Blog = lazy(() => import('./pages/Blogs/Blog'));
const Infor = lazy(() => import('./pages/Infor/Infor'));
const Experience = lazy(() => import('./pages/Experience/Experience'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/test" element={<Blog />} />
            <Route path="/infor" element={<Infor />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
