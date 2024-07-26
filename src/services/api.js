import axios from "axios";

export const postData = async (data) => {
  try {
    const response = await axios.post("http://localhost:3001/data", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/data/${id}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateData = async (id, data) => {
  try {
    const response = await axios.put(`http://localhost:3001/data/${id}`, data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
