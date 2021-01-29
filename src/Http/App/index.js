import ApiService from '../index';

export default {
    async getUserNotifications () {
        const response = await ApiService.request({
            method: "GET",
            url: '/notifications/unread'
        });
        return response.data
    }
}