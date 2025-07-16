import axios from "axios";

export const getMe = async (token) => {
  return await axios.get("http://localhost:3033/api/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
//later
export const editUser = async (token, value) => {
  return await axios.patch("http://localhost:3033/api/auth/user", value,{
    headers: { Authorization: `Bearer ${token}` },
  });
} 