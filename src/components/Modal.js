//Tailwind
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

//Components
import UsersForm from "./Form/UsersForm";

const Modal = ({
  isOpenModal,
  setIsOpenModal,
  onCreateOrUpdateUser,
  editToDo,
  setEditToDo,
}) => {
  return (
    <Transition.Root show={isOpenModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setIsOpenModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-10 text-center sm:block sm:p-0 background-modal">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-very-dark-blue rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full modal">
              <div className="bg-very-dark-blue p-4 sm:p-6 sm:pb-4">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-light-grayish-blue-hover text-2xl leading-6"
                  >
                    Create ToDo
                  </Dialog.Title>
                  {/* From para crear o editar un usuario */}
                  <UsersForm
                    setIsOpenModal={setIsOpenModal}
                    onCreateOrUpdateUser={onCreateOrUpdateUser}
                    editToDo={editToDo}
                    setEditToDo={setEditToDo}
                  />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
