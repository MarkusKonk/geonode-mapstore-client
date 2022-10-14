import {
    CREATE_STA_FEATURES   
} from './actions_StaHanlder';

/**
 * @memberof reducers
 */

function sta_add_features(state, action) {
    switch (action.type) {
        case CREATE_STA_FEATURES:
            return (
                console.log(CREATE_STA_FEATURES)
            )
        default:
            return state;
    }
}

export default sta_add_features;