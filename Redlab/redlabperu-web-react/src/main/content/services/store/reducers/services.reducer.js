import * as Actions from '../actions';

const initialState = {
    data      : [],
    total     : 0,
    searchText: ''
};

const servicesReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_SERVICES:
        {
            return {
                ...state,
                total: action.payload.total,
                data: action.payload.data
            };
        }
        case Actions.GET_SERVICES_MOBILE:
        {
            return {
                ...state,
                total: action.payload.total,
                data: [...state.data,...action.payload.data]
            };
        }
        case Actions.SET_SERVICES_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        case Actions.CLEAR_SERVICES:
        {
            return {
                ...initialState
            };
        }
        default:
        {
            return state;
        }
    }
};

export default servicesReducer;
