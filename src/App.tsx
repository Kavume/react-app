import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import './styles/global.scss';
import './styles/colors.scss';
import { AboutUs } from './pages/AboutUs';
import ContactFormPage from './pages/ContactFormPage/ContactFormPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/*/about-us" element={<AboutUs />} />
          <Route path="/*/contact-form" element={<ContactFormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
