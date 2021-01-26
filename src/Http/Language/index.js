import ApiService from '../index';

export default {
    async getEnLanguage () {
        const response = await ApiService.request({
            method: "GET",
            url: '/lang/interface/en'
        });
        return response.data
    },

    async getZhLanguage () {
        const response = await ApiService.request({
            method: "GET",
            url: '/lang/interface/zh'
        });
        return response.data
    } 
}