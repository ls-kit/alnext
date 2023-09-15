import * as Types from "../actions/types";

const initialState = {
    categories: [], // Initial state for categories
    banners: [],
};

const InitReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOAD_GENERAL: {
            return { ...state, general: action.payload.general };
        }
        case Types.LOAD_CATEGORIES: {
            return { ...state, categories: action.payload.categories };
        }
        case Types.LOAD_BANNER: {
            return { ...state, banners: action.payload.banners };
        }
        default:
            return state;
    }
};

export default InitReducer;