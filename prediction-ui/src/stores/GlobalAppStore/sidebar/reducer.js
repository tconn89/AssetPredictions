import { TYPES } from './actions';

export const initialState = {
    show: false
};

const reducer = (state = initialState, { type } = {}) => {
    switch (type) {
        case TYPES.OPEN:
            return {
                show: true
            };

        case TYPES.CLOSE:
            return {
                show: false
            }

        case TYPES.TOGGLE:
            return {
                show: !state.show
            }

        default:
            return state;
    };
};

export default reducer;
