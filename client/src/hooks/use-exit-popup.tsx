import { useState, useEffect } from "react";

export function useExitPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    const handleBeforeUnload = () => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Show popup after 45 seconds if not shown yet
    const showAfterDelay = () => {
      timeoutId = setTimeout(() => {
        if (!hasShown) {
          setShowPopup(true);
          setHasShown(true);
          sessionStorage.setItem('exitPopupShown', 'true');
        }
      }, 45000);
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);
    showAfterDelay();

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hasShown]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return { showPopup, closePopup };
}