import React, { useState } from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Button from './components/Button';
import DialogModal from './components/DialogModal';
import Menu from './components/Menu';
import './App.css';
// import './buttonsl.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('Page1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'Page1':
        return <Page1 />;
      case 'Page2':
        return <Page2 />;
      case 'Page3':
        return <Page3 setCurrentPage={setCurrentPage} />;
      case 'Page4':
        return <Page4 />;
      default:
        return <Page1 />;
    }
  };

  

  return (
    <ThemeProvider>
      <a href="#main-content" className="skip-link" aria-label='skip to main content'>
        Skip to main content
      </a>
      <Header />
      <Menu setCurrentPage={setCurrentPage} openModal={openModal} />
      {renderPage()}
      <Button aria-label='Play wit Me' onClick={openModal} visual="button">
        Play with Me
      </Button>
      <DialogModal isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={closeModal}></form>
      </DialogModal>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

