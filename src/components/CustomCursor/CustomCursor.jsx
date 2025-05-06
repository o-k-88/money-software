import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const lineContainerRef = useRef(null);
  const previousPositionRef = useRef(null);

  useEffect(() => {
    // Create line container once
    const lineContainer = document.createElement("div");
    lineContainer.className = "line-container";
    document.body.appendChild(lineContainer);
    lineContainerRef.current = lineContainer;

    const handleMouseMove = (event) => {
      const currentPosition = { x: event.pageX, y: event.pageY };

      // Move custom cursor
      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentPosition.x}px`;
        cursorRef.current.style.top = `${currentPosition.y}px`;
      }

      // Draw line from previous position to current
      if (previousPositionRef.current) {
        const line = createLine(previousPositionRef.current, currentPosition);
        lineContainer.appendChild(line);
        setTimeout(() => line.remove(), 500);
      }

      previousPositionRef.current = currentPosition;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(lineContainer);
    };
  }, []);

  const createLine = (start, end) => {
    const line = document.createElement("div");
    const length = Math.hypot(end.x - start.x, end.y - start.y);
    const angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI);
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;

    Object.assign(line.style, {
      position: "absolute",
      width: `${length}px`,
      height: "2px",
      left: `${midX - length / 2}px`,
      top: `${midY}px`,
      transform: `rotate(${angle}deg)`,
      transformOrigin: "center",
      backgroundColor: "red",
      pointerEvents: "none",
      zIndex: 9999,
    });

    return line;
  };

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
