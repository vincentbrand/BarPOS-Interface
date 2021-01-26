import ApiService from '../index';

export default {
    async getEmployeesLoginInfo () {
        const response = await ApiService.request({
            method: "GET",
            url: '/employees/login'
        });
        return response.data
    },

    async setEmployeesLogin (data) {
        const response = await ApiService.request({
            method: "POST",
            url: '/employee/login',
            data
        });
        return response.data
    },
}