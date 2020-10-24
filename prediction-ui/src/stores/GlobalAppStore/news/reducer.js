import { TYPES } from './actions';

export const initialState = {
    response: null,
    loading: false,
};

const reducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case TYPES.loading:
            return {
                loading: true,
            };

        case TYPES.success:
            return {
                loading: false,
                response: payload,
            }

        case TYPES.error:
            return {
                error: payload,
                loading: false,
            }

        default:
            return state;
    };
};

export default reducer;
