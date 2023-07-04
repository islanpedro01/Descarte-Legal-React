"use client"
import React, { useState } from 'react';
import Modal from "./modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button  className="inline-block rounded-full border border-black py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-musgo hover:text-white hover:border-0 dark:border-white" onClick={handleOpenModal}>Cadastre-se</button>
      <Modal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
