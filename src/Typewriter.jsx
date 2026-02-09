import React, { useEffect, useState } from "react";

export default function Typewriter({
  texts = ["MERN stack Developer", "Student"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseMs = 1000,
}) {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCharIndex((c) => c + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        setCharIndex((c) => c - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [texts, index, charIndex, isDeleting, typingSpeed, deletingSpeed, pauseMs]);

  return <span className="animate">{texts[index].slice(0, charIndex)}</span>;
}
