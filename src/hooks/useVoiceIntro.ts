import { useEffect, useRef } from "react";

export const useVoiceIntro = () => {
  const hasSpoken = useRef(false);

  useEffect(() => {
    const speak = () => {
      if (hasSpoken.current) return;

      if (!("speechSynthesis" in window)) {
        console.log("Speech synthesis not supported");
        return;
      }

      hasSpoken.current = true;

      const message = new SpeechSynthesisUtterance(
        "Hello, I am the EFilingCart AI assistant. Are you looking for help with GST filing?"
      );

      message.lang = "en-IN";
      message.rate = 1;
      message.pitch = 1;

      // Ensure voices are loaded
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const indianVoice = voices.find(v => v.lang === "en-IN");
        if (indianVoice) {
          message.voice = indianVoice;
        }
      }

      window.speechSynthesis.cancel(); // clear queue
      window.speechSynthesis.speak(message);
    };

    const handleTrigger = () => {
      speak();
      window.removeEventListener("scroll", handleTrigger);
      window.removeEventListener("mousemove", handleTrigger);
      window.removeEventListener("click", handleTrigger);
    };

    window.addEventListener("scroll", handleTrigger, { once: true });
    window.addEventListener("mousemove", handleTrigger, { once: true });
    window.addEventListener("click", handleTrigger, { once: true });

    const timeout = setTimeout(speak, 5000);

    return () => {
      window.removeEventListener("scroll", handleTrigger);
      window.removeEventListener("mousemove", handleTrigger);
      window.removeEventListener("click", handleTrigger);
      clearTimeout(timeout);
    };
  }, []);
};