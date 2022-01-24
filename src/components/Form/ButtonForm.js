const ButtonForm = ({ handleClick, editUser, type }) => {
  return (
    <button
      type={type}
      className="mt-2 w-full inline-flex justify-center rounded-md border px-4 py-2 text-base font-normal outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      onClick={handleClick}
    >
      {handleClick ? "Cancel" : editUser ? "Update" : "Create"}
    </button>
  );
};

export default ButtonForm;
