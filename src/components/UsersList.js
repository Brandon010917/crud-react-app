//Components
import UserItem from "./UserItem";

const UsersList = ({
  usersList,
  onDeleteUser,
  setEditUser,
  setIsOpenModal,
}) => {
  return (
    <div className="mt-4 rounded-md flex flex-col px-5 bg-very-dark-desaturated-blue text-dark-grayish-blue">
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y">
              <thead className="divide-y">
                <tr className="text-light-grayish-blue">
                  <th
                    scope="col"
                    className="py-4 text-xs font-bold  uppercase tracking-wider text-center"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-2 text-xs font-bold uppercase tracking-wider text-center"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-2 text-xs font-bold uppercase tracking-wider text-center"
                  >
                    Birthday
                  </th>
                  <th scope="col" className="relative py-4 px-2">
                    <span className="sr-only"></span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {/* Renderizado de usersList */}
                {usersList?.length > 0 &&
                  usersList.map((user) => (
                    <UserItem
                      key={user.id}
                      user={user}
                      onDeleteUser={onDeleteUser}
                      setEditUser={setEditUser}
                      setIsOpenModal={setIsOpenModal}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
