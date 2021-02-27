import ApiService from '../index';

export default {
    async getBillsActive () {
        const response = await ApiService.request({
            method: "GET",
            url: '/bill/active'
        });
        return response.data
    },

    async getCategories () {
        const response = await ApiService.request({
            method: "GET",
            url: '/products/categories'
        });
        return response.data
    },

    async createBills (data) {
        const response = await ApiService.request({
            method: "POST",
            url: '/bill/create',
            data
        });
        return response.data
    },

    async removeBillsItem (id) {
        const response = await ApiService.request({
            method: "GET",
            url: `/bill/item/remove/${id}`
        });
        return response.data
    },

    async addBillsItem (data) {
        const response = await ApiService.request({
            method: "POST",
            url: `/bill/item/add`,
            data
        });
        return response.data
    },

    async closeBills (id) {
        const response = await ApiService.request({
            method: "GET",
            url: `/bill/close/${id}`
        });
        return response.data
    },

    async getBillsDetails (id) {
        const response = await ApiService.request({
            method: "GET",
            url: `/bill/detail/${id}`
        });
        return response.data
    },

    async getCustomerFavorites (params) {
        const response = await ApiService.request({
            method: "GET",
            url: `/customer/favorites`,
            params
        });
        return response.data
    },

    async createCustomer (data) {
        const response = await ApiService.request({
            method: "POST",
            url: `/customer/quickadd`,
            data
        });
        return response.data
    },

    async addBillsCustomer (data) {
        const response = await ApiService.request({
            method: "POST",
            url: `/bill/setcustomer`,
            data
        });
        return response.data
    }
}