import axios from 'axios'
export const actions = {

    /**
     * Centralisation de Axios
     * @param {Object} data - données pour la requete - formd
     * @returns {object} - resultat de la requête
     */
    async fetchAxios(data){
        let request;
        /** post/patch/get/delete */
        switch (data.method){           
        case 'post': 
            request = await this.$axios.post(data.endPoint, data.payload);
            return request;
        case 'get':
            request = await this.$axios.get(data.endPoint, data.payload);
            return request.data;
        case 'patch':
            request = await this.$axios.patch(data.endPoint, data.payload);
            return request.data;
        case 'delete':
            request = await this.$axios.delete(data.endPoint, data.payload);
            return request.data;
        }
    }
};