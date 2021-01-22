
const initialState = {
    showSideBar: false,
    sidebarContainer: null
}

function generalReducer(state = initialState, action) {
    switch (action.type) {
        case 'CLOSE_SIDEBAR':
            return { ...state, showSideBar: false };
        case 'SWITCH_SIDEBAR':
            return { ...state, showSideBar: !state.showSideBar };
        case 'SET_SIDEBAR_CONTAINER':
            return { ...state, sidebarContainer: action.payload };
        default:
            return state;
    }
}

export default generalReducer;