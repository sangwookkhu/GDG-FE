import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ title, content, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 이벤트 리스너
  useEffect(() => {
    const handleEsc = (e) => {
      // ESC 키인지 확인
      if (e.key === 'Escape') {
        onClose();  // 모달창 닫기
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  return (
    <div className="backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
