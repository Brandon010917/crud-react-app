import axios from "axios";

axios.defaults.baseURL = "https://users-crud1.herokuapp.com/";

const create = async (user) => {
  const { data } = await axios.post("users/", user);

  return data;
};

const read = async () => {
  const { data } = await axios.get("users/");

  return data;
};

const update = async (user) => {
  const { data } = await axios.put(`/users/${user.id}/`, user);

  return data;
};

const onDelete = async (id) => {
  const { data } = await axios.delete(`/users/${id}/`);

  return data;
};

export { create, read, update, onDelete };
