const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_VIDEO_SOURCE':
            return {
              ...state,
              playing: state.trends.find(item => item.id === Number(action.payload))
                  || state.original.find(item => item.id === Number(action.payload))
                  || []
            };
        case 'REGISTER_REQUEST':
            return {
              ...state,
              user: action.payload
            };
        case 'LOGOUT_REQUEST':
            return  {
              ...state,
              user: action.payload
            };
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload
            };
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            };
        case 'SET_FAVORITE':
            return {
                ...state,
                myList: [...state.myList, action.payload]
            };
        default:
            return state;
    }
};

export default reducer;
