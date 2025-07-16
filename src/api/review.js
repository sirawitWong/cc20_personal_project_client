import axios from "axios";

export const createReview = async (token, data) => {
    return await axios.post(
    `http://localhost:3033/api/auth/review`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
