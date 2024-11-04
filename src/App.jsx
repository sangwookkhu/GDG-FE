import React, { useState } from 'react';
import Modal from './Modal';
import './App.css';
import Week2Modal from './Week2Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWeek2ModalOpen, setIsWeek2ModalOpen] = useState(false);  

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openWeek2Modal = () => setIsWeek2ModalOpen(true);  
  const closeWeek2Modal = () => setIsWeek2ModalOpen(false);

  return (
    <>
      <div className="black-nav">
        <h1>GDG ON CAMPUS: KHU</h1>
      </div>
      
      <div className="content">
        <h2>Web Sprint Challenge</h2>
        <h4>Week1</h4>
        <button className="open-modal-button" onClick={openModal}>open</button>
        {isModalOpen && (
          <Modal
            title="Title"
            content="GDG Week1"
            onClose={closeModal}
          />
        )}

        <h4>Week2</h4>
        <button className="open-modal-button" onClick={openWeek2Modal}>open</button>
        {isWeek2ModalOpen && (
          <Week2Modal onClose={closeWeek2Modal} />
        )}
      </div>
    </>
  );
};

export default App;
