import axios from 'axios';

const url = 'https://192.168.1.155/tsdm-dvldata/rest/services/getcurrentyearDvldataset'

export const GetRoad = () => {
    return axios.get(url + '/' + 1005)
}