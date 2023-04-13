import axios from "axios";

export const gestorWebAPI = axios.create({
    baseURL: "http://apiapoio.pm.pa.gov.br/",
    timeout: 19000,
});