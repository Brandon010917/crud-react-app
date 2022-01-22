import { PencilIcon, TrashIcon } from "@heroicons/react/solid";

const UserItem = ({ user, onDeleteUser, setEditUser, setIsOpenModal }) => {
  const { first_name, last_name, email, birthday, id } = user;

  //Function
  const handleUpdate = (user) => {
    setIsOpenModal(true);
    setEditUser(user);
  };

  return (
    <tr>
      <td className="py-4 px-2 whitespace-nowrap">
        <p className="text-xs sm:text-sm font-bold text-center">
          <span>{first_name}</span>
          <span> {last_name}</span>
        </p>
      </td>
      <td className="py-4 px-2 whitespace-nowrap">
        <p className="text-xs sm:text-sm text-center">{email}</p>
      </td>
      <td className="py-4 px-2 whitespace-nowrap">
        <p className="text-xs sm:text-sm text-center">{birthday}</p>
      </td>
      <td className="py-4 px-2 whitespace-nowrap">
        <div className="text-center flex justify-center">
          <button
            className="mr-2 hover:text-bright-blue transition-colors duration-300"
            // Retorno el objeto user mas el id para editarlo en el formulario
            onClick={() => handleUpdate({ ...user, id })}
          >
            <PencilIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            className="hover:text-bright-blue transition-colors duration-300"
            onClick={() => onDeleteUser(id)}
          >
            <TrashIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserItem;
