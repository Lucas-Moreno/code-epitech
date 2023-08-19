import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const signup = async (userData: any) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};