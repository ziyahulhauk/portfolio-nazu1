import { useEffect, useState } from "react";

export const useNameAnimation = (text = "Hi I'm Nazrun") => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let i = 0;
    let speed = 100;

    const interval = setInterval(() => {
      setDisplayed((prev) => {
        if (!isDeleting) {
          // typing
          const next = text.slice(0, prev.length + 1);

          if (next === text) {
            setTimeout(() => setIsDeleting(true), 800); // wait before delete
          }

          return next;
        } else {
          // deleting
          const next = text.slice(0, prev.length - 0.9);

          if (next === "") {
            setIsDeleting(false);
          }

          return next;
        }
      });
    }, isDeleting ? 60 : speed);

    return () => clearInterval(interval);
  }, [text, isDeleting]);

  return displayed;
};