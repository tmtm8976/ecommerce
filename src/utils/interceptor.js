import axios from "axios";

export const productsInterceptor = axios.create();

productsInterceptor.interceptors.request.use((config)=>{
    config.headers['location'] = "Alexandria"
    console.log(config.headers);
    console.log('Interceptor runnig');
    return config;
})