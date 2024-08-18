import axios from 'axios';
import {API_URL} from '../apiUrl.tsx';

export interface Item {
  name: string;
  description?: string;
}

export const postItems = async (item: Item): Promise<Item> => {
  try {
    const response = await axios.post('${API_URL}/items/', item);
    return response.data;
  } catch (error) {
    console.error('Error in getting items', error);
    throw error;
  }
};

export const getItem = async (itemId: string): Promise<Item> => {
  try {
    const response = await axios.get(`${API_URL}/items/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching item:', error);
    throw error;
  }
};
