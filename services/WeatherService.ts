import axios from 'axios';
import { BASE_URL } from '../Config';

export const getWeather = async (location: string) => {
    try {
        const result = await axios.get(`${BASE_URL}/weather/${location}`);
        return result;
    } catch (error) {
        console.log(error);
    }
};