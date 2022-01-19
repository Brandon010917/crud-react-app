import { useState } from "react";

//Icons
import iconCros from "../assets/images/icon-cross.svg";

//Components
import Modal from "./Modal";

const CreateToDo = () => {
  //State
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="w-full mt-10 rounded-md py-4 px-5 bg-very-dark-desaturated-blue text-dark-grayish-blue flex items-center justify-between text-xs sm:text-sm"
        onClick={() => setOpen(true)}
      >
        <span>Create a new todo...</span>
        <img
          className="rotate-45 w-3 sm:w-4 h-3 sm:h-4"
          src={iconCros}
          alt="icon Cros"
        />
      </button>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default CreateToDo;
