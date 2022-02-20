import { types } from './types';
import { AnyAction } from 'redux';
import { produce } from 'immer';

const initialState = {
    subscriptionModal: false,
    isSubscripted: false,
};

export default (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case types.SET_SUBSCRIPTION_MODAL:
            return produce(state, draft => {
                draft.subscriptionModal = action.payload
            })
        case types.SET_IS_SUBSCRIPTED:
            return produce(state, draft => {
                draft.isSubscripted = action.payload
            })
        default:
            return state;
    }
}