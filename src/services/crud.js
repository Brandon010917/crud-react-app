import axios from "axios";

export const getUsers = () => {
  (() => {
    axios.get("/src/data.json").then((res) => res.data);
  })();
};
