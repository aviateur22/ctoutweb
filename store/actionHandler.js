/**
 * centralisation du trycatch pour les actions
 */
export const actions = {
    /**
     * centralsation de TryCatch
     */
    async wrapperAction(state, payload){
        try {
            /**             
             * action a éxécuter
             * @property {Object} payload.action - Action a éxectuer
             * @property {[Object|null]} payload.data - donnéés a transferéer a l'action
             */
            return await state.dispatch(payload.action, payload.data, {root: true});   
        } catch (err) {
            /**
             * Erreur coté client
             */
            if(!err.response?.data){  
                return state.commit('flashMessage/addFlashMessage', { message: 'oupsss', error: true }, {root: true});
            }
            /**
             * Erreur coté API - statusCode > 400
             */
            state.commit('flashMessage/addFlashMessage', { message: err.response.data.errorMessage, error: true }, {root: true});
        }      
    }
};