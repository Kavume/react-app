import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import './styles/global.scss';
import './styles/colors.scss';
import { AboutUs } from './pages/AboutUs';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
