import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const TextScaler = ({ text }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const resizeTextToFit = () => {
      const container = containerRef.current;
      const textElement = textRef.current;
      const winWidth = window.innerWidth;
      const maxHeight = winWidth < 450 ? 30 : 40;
      const offsetPad = winWidth < 450 ? 10 : 5;
      textElement.style.transform = "scale(1)";

      const containerWidth = container.offsetWidth;
      const textWidth = textElement.offsetWidth + offsetPad;
      let scale = containerWidth / textWidth;

      textElement.style.transform = `scale(${scale})`;

      const scaledHeight = textElement.offsetHeight * scale;
      if (scaledHeight > maxHeight) {
        scale = maxHeight / textElement.offsetHeight;
        textElement.style.transform = `scale(${scale})`;
      }
    };
    resizeTextToFit();
    window.addEventListener("resize", resizeTextToFit);
    return () => {
      window.removeEventListener("resize", resizeTextToFit);
    };
  }, [text]);

  return (
    <div id="resize-container" ref={containerRef}>
      <span
        id="resize-text"
        ref={textRef}
        style={{
          color: user && text === user.username ? "purple" : "black",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default TextScaler;
