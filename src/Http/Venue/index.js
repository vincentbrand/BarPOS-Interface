import ApiService from '../index';

export default {
    async getVenues () {
        const response = await ApiService.request({
            method: "GET",
            url: '/venue/all'
        });
        return response.data
    },
}