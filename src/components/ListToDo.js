//Components
import ItemToDo from "./ItemToDo";

const ListToDo = () => {
  return (
    <div className="mt-4 rounded-md flex flex-col py-2-4 px-5 bg-very-dark-desaturated-blue text-dark-grayish-blue">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y mt-2">
              <thead>
                <tr className="text-light-grayish-blue">
                  <th
                    scope="col"
                    className="py-3 text-left text-xs font-bold  uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-left text-xs font-bold uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-left text-xs font-bold uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative py-3">
                    <span className="sr-only"></span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <ItemToDo
                  name="Brandon Leal"
                  email="brandon01@gmail.com"
                  isCompleted={true}
                />
                <ItemToDo
                  name="Brandon Leal"
                  email="brandon0109@gmail.com"
                  isCompleted={false}
                />
                <ItemToDo
                  name="Brandon Leal"
                  email="brandon010917@gmail.com"
                  isCompleted={true}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListToDo;
