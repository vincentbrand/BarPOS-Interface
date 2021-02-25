import ApiService from '../index';

export default {
    async getEmployees () {
        const response = await ApiService.request({
            method: "GET",
            url: '/employees'
        });
        return response.data
    },

    async setCreateEmployees (data) {
        const response = await ApiService.request({
            method: "POST",
            url: '/employees/create',
            data
        });
        return response.data
    },
}