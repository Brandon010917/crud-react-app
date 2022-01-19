//Components
import CreateToDo from "./CreateToDo";
import Title from "./Title";
import ListToDo from "./ListToDo";

const ContainerToDo = () => {
  return (
    <div className="py-12 px-6 container-todo mx-auto">
      <Title />
      <CreateToDo />
      <ListToDo />
    </div>
  );
};

export default ContainerToDo;
