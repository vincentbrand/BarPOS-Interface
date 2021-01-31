import ApiService from '../index';

export default {
    async getProducts () {
        const response = await ApiService.request({
            method: "GET",
            url: '/products'
        });
        return response.data
    },
}