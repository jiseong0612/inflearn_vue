import axios from 'axios'

const baseUrl = "https://api.hnpwa.com/v0/";

export default {
    fetchNewsList: function () {
        return axios.get(`${baseUrl}news/1.json`);
    },
    fetchAskList: function () {
        return axios.get(`${baseUrl}ask/1.json`);
    },
    fetchJobsList: function fetchJobsList() {
        return axios.get(`${baseUrl}jobs/1.json`);
    },
    fetchItem: function (id) {
        return axios.get(`${baseUrl}item/${id}.json`);
    },
    fetchUser: function (userName) {
        return axios.get(`${baseUrl}user/${userName}.json`);
    }
}