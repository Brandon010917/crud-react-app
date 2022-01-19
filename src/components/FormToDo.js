//React-hook-form
import { useForm } from "react-hook-form";

//Icons
import { ExclamationIcon } from "@heroicons/react/solid";

const FormToDo = ({ setOpen }) => {
  //React-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //Functions
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="mt-5 md:col-span-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="overflow-hidden sm:rounded-md text-light-grayish-blue">
          <div className="px-4 pt-5 sm:p-0">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-normal"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="my-2 block w-full shadow-sm text-sm rounded-md outline-none p-2 text-very-dark-blue"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <div className="flex items-center gap-1 text-red-500">
                    <ExclamationIcon className="h-5 w-5" />
                    <span className="block text-sm font-normal">
                      This field is required
                    </span>
                  </div>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-normal"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="my-2 block w-full shadow-sm text-sm rounded-md outline-none p-2 text-very-dark-blue"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <div className="flex items-center gap-1 text-red-500">
                    <ExclamationIcon className="h-5 w-5" />
                    <span className="block text-sm font-normal">
                      This field is required
                    </span>
                  </div>
                )}
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-normal"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="my-2 block w-full shadow-sm text-sm rounded-md outline-none p-2 text-very-dark-blue"
                  {...register("emailAddress", { required: true })}
                />
                {errors.emailAddress && (
                  <div className="flex items-center gap-1 text-red-500">
                    <ExclamationIcon className="h-5 w-5" />
                    <span className="block text-sm font-normal">
                      This field is required
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-6 text-right sm:px-0">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-normal outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm mr-2"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-normal outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormToDo;
