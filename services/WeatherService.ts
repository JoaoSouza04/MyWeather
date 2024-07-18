import axios from 'axios';

export const getWeather = async (location: string) => {
    try{
        const result = await axios.get(`http://localhost:3000/api/weather/${location}`);
        return result
    }
    catch(error) {
        console.log(error);
    }
        
}