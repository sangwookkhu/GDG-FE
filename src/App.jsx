import React, { useState } from 'react';
import Modal from './Modal';
import './Modal.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>GDG ON CAMPUS: KHU</h1>
      <h4>Week 1</h4>
      <button onClick={openModal}>open</button>
      {isModalOpen && (
        <Modal
          title="Title"
          content="GDG Week1"
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
