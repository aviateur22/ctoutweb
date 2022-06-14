import utils from '~/helper/utils';
/**
 * Send a message
 */
export const actions = {
    /**
     * Envoie d'un message
     * @param {Object} state 
     * @param {Object} data - contenu du formulaire
     * @returns 
     */
    async sendMessage(state, data){       
        const result = await this.$axios.post(utils.messageApi.sendMessage.endPoint, data, {credentials: true, root: true});        
        state.commit('flashMessage/updateFlashMessage', { message: result.data.message, error: false }, {root: true});
        return result;
    }
};