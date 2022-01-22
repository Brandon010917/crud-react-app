//Icons
import { ExclamationIcon } from "@heroicons/react/solid";

const ErrorInputForm = ({ message }) => {
  return (
    <div className="flex items-center gap-1 text-red-500">
      <ExclamationIcon className="h-5 w-5" />
      <span className="block text-sm font-normal">{message}</span>
    </div>
  );
};

export default ErrorInputForm;
