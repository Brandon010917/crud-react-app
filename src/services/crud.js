import axios from "axios";

axios.defaults.baseURL = "https://users-crud1.herokuapp.com/";

const create = async (todo) => {
  const { data } = await axios.post("users/", todo);

  return data;
};

const read = async () => {
  const { data } = await axios.get("users/");

  return data;
};

const update = async (todo) => {
  const { data } = await axios.put(`/users/${todo.id}/`, todo);

  return data;
};

const onDelete = async (id) => {
  const { data } = await axios.delete(`/users/${id}/`);

  return data;
};

export { create, read, update, onDelete };
