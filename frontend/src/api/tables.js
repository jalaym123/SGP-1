import axios from 'axios';
import config from '../config.json'

export default axios.create({
    baseURL: `http://${config.server.HOST}:${config.server.PORT}/api/tables`
})