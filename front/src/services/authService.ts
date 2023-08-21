import axios from 'axios';
import axiosInstance from '../middlewares/Axiosinterceptors'

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

    const response = await axiosInstance.post(`${API_URL}/signin`, userData);

    const token = response.data.token;
    console.log('hello', token)
    localStorage.setItem('token', token);

    // const dataTest = axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // console.log('hello', dataTest)
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post(`${API_URL}/logout`);
    return response.data;
  } catch (error) {
    throw error;
  }
};