import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success': return 'fa-check-circle';
      case 'warning': return 'fa-clock';
      case 'danger': return 'fa-exclamation-triangle';
      default: return 'fa-info-circle';
    }
  };

  return (
    <div className={`toast ${type}`}>
      <i className={`fas ${getIcon()}`}></i>
      <div className="toast-content">{message}</div>
    </div>
  );
};

export default Toast;