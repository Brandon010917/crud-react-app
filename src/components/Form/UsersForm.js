import { useEffect } from "react";

//React-hook-form
import { useForm } from "react-hook-form";

//Components
import ButtonForm from "./ButtonForm";
import ErrorInputForm from "./ErrorInputForm";

const UsersForm = ({
  setIsOpenModal,
  onCreateOrUpdateUser,
  editUser,
  setEditUser,
}) => {
  useEffect(() => {
    return () => {
      setEditUser(null);
    };
  }, [setEditUser]);

  //React-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //Functions
  const onSubmit = (user) => {
    onCreateOrUpdateUser(user);
    setIsOpenModal(false);
    reset();
  };

  //Const para que el valor maximo del input date sea el dia actual
  const today = new Date().toISOString().split("T")[0];

  const handleClick = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="mt-5 md:col-span-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="overflow-hidden text-light-grayish-blue">
          <div className="px-4 py-2 sm:px-2">
            <div className="grid grid-cols-6 gap-6">
              {/* First Name */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-normal"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 block w-full shadow-sm text-sm rounded-md outline-none p-2 text-very-dark-blue"
                  {...register("first_name", {
                    required: "This field is required",
                    pattern: {
                      value: /^([a-zA-Z\s]+)*$/,
                      message: "Only character",
                    },
                    value: editUser?.first_name,
                  })}
                />
                {errors.first_name && (
                  <ErrorInputForm message={errors.first_name.message} />
                )}
              </div>

              {/* Last Name */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-normal"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 block w-full shadow-sm text-sm rounded-md outline-none p-2 text-very-dark-blue"
                  {...register("last_name", {
                    required: "This field is required",
                    pattern: {
                      value: /^([a-zA-Z\s]+)*$/,
                      message: "Only character",
                    },
                    value: editUser?.last_name,
                  })}
                />
                {errors.last_name && (
                  <ErrorInputForm message={errors.last_name.message} />
                )}
              </div>

              {/* Email */}
              <div className="col-span-6">
                <label htmlFor="email" className="block text-sm font-normal">
                  Email address
                </label>
                <input
                  type="text"
                  id="email"
                  autoComplete="email"
                  className="mt-1 block w-full shadow-sm text-sm rounded-md outline-none p-2 text-very-dark-blue"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                    value: editUser?.email,
                  })}
                />
                {errors.email && (
                  <ErrorInputForm message={errors.email.message} />
                )}
              </div>

              {/* Password */}
              <div className="col-span-6">
                <label htmlFor="password" className="block text-sm font-normal">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full shadow-sm text-sm rounded-md outline-none p-2 text-very-dark-blue"
                  {...register("password", {
                    required: "This field is required",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "Minimum eight characters, at least one letter and one number",
                    },
                    value: editUser?.password,
                  })}
                />
                {errors.password && (
                  <ErrorInputForm message={errors.password.message} />
                )}
              </div>

              {/* Birthday */}
              <div className="col-span-6">
                <label htmlFor="birthday" className="block text-sm font-normal">
                  Birthday
                </label>
                <input
                  type="date"
                  id="birthday"
                  max={today}
                  className="mt-1 block w-full shadow-sm text-sm rounded-md outline-none p-2 text-very-dark-blue"
                  {...register("birthday", {
                    required: true,
                    value: editUser?.birthday,
                  })}
                />
                {errors.birthday && (
                  <ErrorInputForm message={errors.birthday.message} />
                )}
              </div>
            </div>
          </div>
          {/* Boton de cancerlar y de crear||actualizar */}
          <div className="px-4 py-2 text-right sm:px-2">
            <ButtonForm handleClick={handleClick} type="button" />
            <ButtonForm editUser={editUser} type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UsersForm;
