import axios from 'axios';

const API_URL = 'http://localhost:3000/api';
export const getItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/items`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const addItem = async (item) => {
  try {
    const response = await axios.post(`${API_URL}/items`, item);
    return response.data;
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
};