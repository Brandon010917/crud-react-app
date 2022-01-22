import { useEffect, useRef } from "react";

const Message = ({ message }) => {
  const borderBottom = useRef();

  useEffect(() => {
    const border = borderBottom.current;
    border.classList.add("message");

    return () => {
      border.classList.remove("message");
    };
  }, []);

  return (
    <div
      className="p-4 mb-4 text-sm bg-very-dark-desaturated-blue text-bright-blue rounded-lg fixed top-8 right-8 overflow-hidden w-1/5 font-lg"
      role="alert"
    >
      <span className="font-medium">Success! User {message}</span>
      <div ref={borderBottom}></div>
    </div>
  );
};

export default Message;
