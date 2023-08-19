import { productsInterceptor } from "../utils/interceptor";

export const getProducts = async () => {
    console.log('get products running');
    const axiosResponse = await productsInterceptor.get('https://dummyjson.com/products')
    const products = axiosResponse.data
    console.log("Get Products Finished");
    return products
}