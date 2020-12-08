import { ADD_MEMBER } from './../actions/dragonActions';

export const initialState = {
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false },
        { name: 'Warren Longmire', dragonStatus: false },
      ]
};


export const dragonReducer = (state = initialState, action) => {
    console.log(action);
    
    switch(action.type) {
        case(ADD_MEMBER):
            return({
                ...state,
                members: [...state.members, newMember]
            });
        default:
            return(state);
    }
}