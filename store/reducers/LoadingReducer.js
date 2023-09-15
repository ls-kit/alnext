const initialState = {
    category_loading: false, // Initial state for category_loading
};

const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        // Define your action types and handle them accordingly
        default:
            return state;
    }
};

export default LoadingReducer;