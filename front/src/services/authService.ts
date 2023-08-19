import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const signup = async (userData: { name: string, email: string, password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signin = async (userData: { email: string, password: string }) => {
    try {
      const response = await axios.post(`${API_URL}/signin`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };