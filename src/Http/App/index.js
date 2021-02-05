import ApiService from '../index';

export default {
    async getUserNotifications () {
        const response = await ApiService.request({
            method: "GET",
            url: '/notifications/unread'
        });
        return response.data
    },

    async getSidebarNav (lang) {
        const response = await ApiService.request({
            method: "GET",
            url: `/nav/${lang}`
        });
        return response.data
    },

    async createCustomer (data) {
        const response = await ApiService.request({
            method: "POST",
            url: `/customer/create`,
            data
        });
        return response.data
    },

    async getCustomer (params) {
        const response = await ApiService.request({
            method: "GET",
            url: `/customer/all`,
            params
        });
        return response.data
    }
}