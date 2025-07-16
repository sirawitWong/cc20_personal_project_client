import axios from "axios";

export const registerAdmin = async (token, data) => {
  return await axios.post(
    "http://localhost:3033/api/auth/admin/register",
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const getAllUser = async (token) => {
  return await axios.get("http://localhost:3033/api/auth/admin/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteUser = async (token, id) => {
  return await axios.delete(
    `http://localhost:3033/api/auth/admin/delete/user/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const banUser = async (token, id) => {
  return await axios.patch(`http://localhost:3033/api/auth/admin/ban/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addIngredient = async (token, data) => {
  return await axios.post(
    "http://localhost:3033/api/auth/admin/add/ingredient",
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const editIngredient = async (token, data, id) => {
  return await axios.post(
    `http://localhost:3033/api/auth/admin/edit/ingredient/${id}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const deleteIngredient = async (token, id) => {
  return await axios.delete(
    `http://localhost:3033/api/auth/admin/delete/ingredient/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const addEquipment = async (token, data) => {
  return await axios.post(
    "http://localhost:3033/api/auth/admin/add/equipment",
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const editEquipment = async (token, data, id) => {
  return await axios.post(
    `http://localhost:3033/api/auth/admin/edit/equipment/${id}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const deleteEquipment = async (token, id) => {
  return await axios.delete(
    `http://localhost:3033/api/auth/admin/delete/equipment/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
