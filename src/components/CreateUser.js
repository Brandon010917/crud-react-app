//Icons
import iconCros from "../assets/images/icon-cross.svg";

//Components
import Modal from "./Modal";

const CreateUser = ({
  onCreateOrUpdateUser,
  isOpenModal,
  setIsOpenModal,
  editUser,
  setEditUser,
}) => {
  return (
    <>
      <button
        className="w-full mt-10 rounded-md py-4 px-5 bg-very-dark-desaturated-blue text-dark-grayish-blue flex items-center justify-between text-xs sm:text-sm"
        onClick={() => setIsOpenModal(true)}
      >
        <span>Create a new user...</span>
        <img className="rotate-45 w-3 h-3" src={iconCros} alt="icon Cros" />
      </button>
      <Modal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        onCreateOrUpdateUser={onCreateOrUpdateUser}
        editUser={editUser}
        setEditUser={setEditUser}
      />
    </>
  );
};

export default CreateUser;
