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

    async getProducts () {
        const response = await ApiService.request({
            method: "GET",
            url: '/products'
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
}