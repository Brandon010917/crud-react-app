import { useEffect } from "react";
import "./App.css";

//Components
import ContainerToDo from "./components/ContainerToDo";

import { getUsers } from "./services/crud";

function App() {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App bg-very-dark-blue min-h-screen">
      <ContainerToDo />
    </div>
  );
}

export default App;
