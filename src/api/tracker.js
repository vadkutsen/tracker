import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'http://5507ad2f.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        //try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        //} catch (error) {
          //  console.log(error);
       // }
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;