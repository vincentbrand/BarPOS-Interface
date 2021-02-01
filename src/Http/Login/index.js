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

    async setVenues () {
        const response = await ApiService.request({
            method: "GET",
            url: '/venue/compact'
        });
        return response.data
    },

    async setEmployeesVenues (id) {
        const response = await ApiService.request({
            method: "GET",
            url: `/employees/venue/${id}`
        });
        return response.data
    },

    async setSupervisor (data) {
        const response = await ApiService.request({
            method: "POST",
            url: `/supervisor/login`,
            data
        });
        return response.data
    }
}