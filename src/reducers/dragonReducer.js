import { ADD_MEMBER } from './../actions/dragonActions';

export const initialState = {};


export const dragonReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_MEMBER):
            return({
                ...state,
                members: [...state.members, {name: action.payload, dragonStatus:false }]
            });
        default:
            return(state);
    }
}