import { types } from './types';

export const setSubscriptionModal = (payload: boolean) => ({
    type: types.SET_SUBSCRIPTION_MODAL,
    payload
});

export const setIsSubscripted = (payload: boolean) => ({
    type: types.SET_IS_SUBSCRIPTED,
    payload
});