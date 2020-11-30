
const initialState = {
    showSideBar: false
}

function generalReducer(state = initialState, action) {
    switch (action.type) {
        case 'CLOSE_SIDEBAR':
            return { ...state, showSideBar: false };
        case 'SWITCH_SIDEBAR':
            return { ...state, showSideBar: !state.showSideBar };
        default:
            return state;
    }
}

export default generalReducer;