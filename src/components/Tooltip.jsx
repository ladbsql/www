import { useState, useRef } from "react";
import { useFloating, offset, flip, shift } from "@floating-ui/react";

const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    x,
    y,
    reference,
    floating,
    strategy,
    placement,
    middlewareData: { arrow },
  } = useFloating({
    placement: "top",
    middleware: [offset(5), flip(), shift({ padding: 5 })],
  });

  return (
    <>
      <div
        ref={reference}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={floating}
          style={{
            position: "absolute",
            top: y ?? "",
            left: x ?? "",
            backgroundColor: "black",
            color: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "14px",
            zIndex: 100,
          }}
        >
          {content}
        </div>
      )}
    </>
  );
};

export default Tooltip;
