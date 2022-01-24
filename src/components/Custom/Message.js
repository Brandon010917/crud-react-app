import { useEffect, useRef } from "react";

const Message = ({ message, setShowMessage }) => {
  //Ref
  const animationBorder = useRef();

  //Effect
  useEffect(() => {
    const animationBorderCurrent = animationBorder.current;

    if (animationBorderCurrent) {
      animationBorderCurrent.classList.add("message");
      setTimeout(() => setShowMessage(false), 5000);
    }

    return () => {
      animationBorderCurrent.classList.remove("message");
    };
  }, [setShowMessage]);

  return (
    <div
      className="p-4 mb-4 bg-very-dark-desaturated-blue text-bright-blue rounded-lg fixed top-8 right-6 lg:right-12 overflow-hidden w-1/2 sm:w-1/3 md:w-1/4 text-xs sm:text-sm"
      role="alert"
    >
      <span className="font-medium">Success! User {message}</span>
      <div ref={animationBorder}></div>
    </div>
  );
};

export default Message;
