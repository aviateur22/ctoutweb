export const state = () => ({
    /**
     * liste des messages
     */
    message: [],
    i: 0
});

export const getters = {
    /**
     * Renvoie la liste des messages
     * @param {*} state 
     * @returns 
     */
    getFlashMessage: (state)=>{        
        return state.message;
    }
};

export const mutations = {    
    /**
     * ajout d'un message
     * @param {Object} state 
     * @param {Object} value - FlashMessage
     */
    addFlashMessage(state, value){        
        state.message.push(value);
    },

    /**
     * suppression d'un message
     * @param {Object} state 
     * @param {Number} index - élément a supprimer
     */
    removeFlashMessage(state, index){
        console.log(index);
        state.message.splice(index, 1);
    }
};