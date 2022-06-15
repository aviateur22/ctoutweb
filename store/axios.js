import axios from 'axios';
export const actions = {

    /**
     * Centralisation de Axios
     * @param {Object} data - données pour la requete
     * @returns {object} - resultat de la requête
     */
    async fetchAxios(state, data){     
        const request = await axios({
            withCredentials: true,
            baseURL: process.env.BASE_URI,
            url: data.endPoint,
            method: data.method,     
            responseType: data.responseType ? data.responseType : 'json',              
            data: data.formData,           
        });   
        return request.data;
    }
};