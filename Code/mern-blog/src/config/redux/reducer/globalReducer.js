const initialState = {
    name: 'Yos Sularko'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Muhammad Yos Sularko'
        }
    }
    return state;
}

export default globalReducer;