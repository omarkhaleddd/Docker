import axios from 'axios';

const nodeServiceApi = axios.create({
    baseURL: 'http://localhost:6002/api',
});





const nodeCountString = async ({ inputString }) => {
    try {
        const response = await nodeServiceApi.post("/countletters", { inputString }); // Use nodeServiceApi instead of axios
        return response.data;
    } catch (error) {
        throw error;
    }
};

const nodeRepeat = async ({ inputString }) => {
    try {
        const response = await nodeServiceApi.post("/repeat", { inputString }); // Use nodeServiceApi instead of axios
        return response.data;
    } catch (error) {
        throw error;
    }
};

const apis = {
    nodeCountString,
    nodeRepeat
};

export default apis;
