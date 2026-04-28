import { useState, useCallback } from 'react';

export function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
  }, []);

  const removeToast = useCallback(() => {
    setToast(null);
  }, []);

  return { toast, showToast, removeToast };
}