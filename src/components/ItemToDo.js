import { PencilIcon, TrashIcon } from "@heroicons/react/solid";

const ItemToDo = ({ name, email, isCompleted }) => {
  return (
    <tr>
      <td className="py-4 whitespace-nowrap">
        <span className="text-xs sm:text-sm">{name}</span>
      </td>
      <td className="py-4 whitespace-nowrap">
        <span className="text-xs sm:text-sm">{email}</span>
      </td>
      <td className="py-4 whitespace-nowrap">
        <span className="inline-flex text-xs sm:text-sm leading-5 font-bold rounded-full">
          {isCompleted ? "Completed" : "Active"}
        </span>
      </td>
      <td className="py-4 whitespace-nowrap">
        <button className="pr-2 hover:text-bright-blue transition-colors duration-300">
          <PencilIcon className="h-5 w-5" />
        </button>
        <button className="hover:text-bright-blue transition-colors duration-300">
          <TrashIcon className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
};

export default ItemToDo;
