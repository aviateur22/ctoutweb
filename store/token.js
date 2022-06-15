import utils from '~/helper/utils';
import tokenType from '~/helper/tokenType';

/**
 * get CSURF token
 */
export const actions = {
    /**
     * Récupération token pour envoyer un message
     * @param {Object} state 
     * @param {Object} data - contenu du formulaire
     * @returns 
     */
    async getCsurfToken(state, data){        
        /**resultat de la requete */
        let request;        
        switch (data){
        /**Envoie d'un message */
        case tokenType.message.name:             
            request = await this.$axios.get(utils.tokenApi.getToken.endPoint, { root: true });
            return request.data;
        default:         
            // eslint-disable-next-line unicorn/error-message
            throw new Error('paramètre csurf non définit');
        }        
    }
};