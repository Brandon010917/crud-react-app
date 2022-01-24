import { useEffect, useState } from "react";

//Services
import { create, onDelete, read, update } from "../services/crud";

//Components
import CreateUser from "./CreateUser";
import Message from "./Custom/Message";
import Title from "./Custom/Title";
import UsersList from "./UsersList";

const UsersBox = () => {
  //State
  const [usersList, setUsersList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  //Effect
  useEffect(() => {
    //Get Users
    (async () => {
      const data = await read();

      setUsersList(data);
    })();
  }, []);

  //HandleShowMessage
  const HandleShowMessage = (msg) => {
    setShowMessage(true);
    setMessage(msg);
  };

  //Create or Update User
  const onCreateOrUpdateUser = (user) => {
    //Update
    if (editUser) {
      const updateUser = async () => {
        const res = await update({ ...user, id: editUser.id });

        HandleShowMessage("updated");
        setUsersList(
          usersList.map((user) => (user.id === res.id ? res : user))
        );
      };

      updateUser();
    } else {
      //Create
      const createUser = async () => {
        const res = await create(user);

        HandleShowMessage("created");
        setUsersList([res, ...usersList]);
      };

      createUser();
    }
  };

  //Delete User
  const onDeleteUser = (id) => {
    const deleteUser = async () => {
      await onDelete(id);

      HandleShowMessage("deleted");
      setUsersList(usersList.filter((user) => user.id !== id));
    };

    deleteUser();
  };

  return (
    <div className="py-12 px-6 max-w-3xl mx-auto">
      <Title />
      <CreateUser
        onCreateOrUpdateUser={onCreateOrUpdateUser}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        editUser={editUser}
        setEditUser={setEditUser}
      />
      <UsersList
        usersList={usersList}
        onDeleteUser={onDeleteUser}
        setEditUser={setEditUser}
        setIsOpenModal={setIsOpenModal}
      />

      {/* Message */}
      {showMessage && (
        <Message setShowMessage={setShowMessage} message={message} />
      )}
    </div>
  );
};

export default UsersBox;
