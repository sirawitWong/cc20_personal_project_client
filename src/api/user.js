import axios from "axios";

export const getMe = async (token) => {
  return await axios.get("http://localhost:3033/api/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
